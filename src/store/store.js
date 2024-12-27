import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/slices/userSlice";
import commissionReducer from "@/store/slices/commissionSlice";
import auctionReducer from "@/store/slices/auctionSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    commission: commissionReducer,
    auction: auctionReducer,
  },
});
