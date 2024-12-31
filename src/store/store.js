import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/slices/userSlice";
import commissionReducer from "@/store/slices/commissionSlice";
import auctionReducer from "@/store/slices/auctionSlice";
import bidReducer from "@/store/slices/bidSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    commission: commissionReducer,
    auction: auctionReducer,
    bid: bidReducer,
  },
});
