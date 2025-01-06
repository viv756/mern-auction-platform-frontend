import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "@/store/slices/authSlice";
import commissionReducer from "@/store/slices/commissionSlice";
import auctionReducer from "@/store/slices/auctionSlice";
import bidReducer from "@/store/slices/bidSlice";
import superAdminReducer from "@/store/slices/superAdminSlice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["isAuthenticated"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = {
  auth: persistedAuthReducer,
  commission: commissionReducer,
  auction: auctionReducer,
  bid: bidReducer,
  superAdmin: superAdminReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
