import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    isAuthenticated: false,
    user: null,
    leaderboard: [],
    successLogin: false,
  },
  reducers: {
    registerRequest(state, action) {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    registerFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
    },
    loginRequest(state, action) {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.successLogin = true;
      state.user = action.payload.user;
    },
    loginFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
    },
    logoutSuccess(state, action) {
      state.isAuthenticated = false;
      state.user = {};
    },
    logoutFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = state.isAuthenticated;
      state.user = state.user;
    },
    fetchUserRequest(state, action) {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
    },
    fetchUserSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    fetchUserFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
    },
    fetchLeaderboardRequest(state, action) {
      state.loading = true;
      state.leaderboard = [];
    },
    fetchLeaderboardSuccess(state, action) {
      state.loading = false;
      state.leaderboard = action.payload;
    },
    fetchLeaderboardFailed(state, action) {
      state.loading = false;
      state.leaderboard = [];
    },
    clearAllErrors(state, action) {
      state.user = state.user;
      state.isAuthenticated = state.isAuthenticated;
      state.leaderboard = state.leaderboard;
      state.loading = false;
    },
    setLoginSuccesFalse(state, action) {
      state.successLogin = false;
    },
  },
});

// user register functionality
export const register = (data) => async (dispatch) => {
  dispatch(authSlice.actions.registerRequest());
  try {
    const response = await axios.post("http://localhost:5000/api/v1/user/register", data, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch(authSlice.actions.registerSuccess(response.data));
    toast.success(response.data.message);
    dispatch(authSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(authSlice.actions.registerFailed());
    toast.error(error.response.data.message);
    dispatch(authSlice.actions.clearAllErrors());
  }
};

// user login functionality
export const login = (data) => async (dispatch) => {
  dispatch(authSlice.actions.loginRequest());
  try {
    const response = await axios.post("http://localhost:5000/api/v1/user/login", data, {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });
    dispatch(authSlice.actions.loginSuccess(response.data));
    toast.success(response.data.message);
    dispatch(authSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(authSlice.actions.loginFailed());
    toast.error(error.response.data.message);
    dispatch(authSlice.actions.clearAllErrors());
  }
};

// user logout functionality
export const logout = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/api/v1/user/logout", {
      withCredentials: true,
    });
    dispatch(authSlice.actions.logoutSuccess());
    toast.success(response.data.message);
    dispatch(authSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(authSlice.actions.logoutFailed());
    toast.error(error.response.data.message);
    dispatch(authSlice.actions.clearAllErrors());
  }
};

export const fetchUser = () => async (dispatch) => {
  dispatch(authSlice.actions.fetchUserRequest());
  try {
    const response = await axios.get("http://localhost:5000/api/v1/user/me", {
      withCredentials: true,
    });
    dispatch(authSlice.actions.fetchUserSuccess(response.data.user));
    dispatch(authSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(authSlice.actions.fetchUserFailed());
    dispatch(authSlice.actions.clearAllErrors());
    console.error(error);
  }
};

export const fetchLeaderboard = () => async (dispatch) => {
  dispatch(authSlice.actions.fetchLeaderboardRequest());
  try {
    const response = await axios.get("http://localhost:5000/api/v1/user/leaderboard", {
      withCredentials: true,
    });
    dispatch(authSlice.actions.fetchLeaderboardSuccess(response.data.leaderboard));
    dispatch(authSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(authSlice.actions.fetchLeaderboardFailed());
    dispatch(authSlice.actions.clearAllErrors());
    console.error(error);
  }
};

export const { setLoginSuccesFalse } = authSlice.actions;
export default authSlice.reducer;
