import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/slices/userSlice";
import commissionReducer from "@/store/slices/commissionSlice";
import auctionReducer from "@/store/slices/auctionSlice";
import bidReducer from "@/store/slices/bidSlice";
import superAdminReducer from "@/store/slices/superAdminSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    commission: commissionReducer,
    auction: auctionReducer,
    bid: bidReducer,
    superAdmin: superAdminReducer,
  },
});
