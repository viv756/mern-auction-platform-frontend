import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/slices/userSlice";
import commissionReducer from "@/store/slices/commissionSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    commission: commissionReducer,
  },
});
