import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAllSuperAdminSliceErrors,
  getAllPaymentProofs,
  getAllUsers,
  getMonthlyRevenue,
} from "@/store/slices/superAdminSlice";
import H1 from "@/components/H1";
import Spinner from "@/components/Spinner";
import PaymentGraph from "@/components/dashboard-sub-components/PaymentGraph";
import BiddersAuctioneerGraph from "@/components/dashboard-sub-components/BiddersAuctioneerGraph";
import PaymentProofs from "@/components/dashboard-sub-components/PaymentProofs";
import AuctionItemDelete from "@/components/dashboard-sub-components/AuctionItemDelete";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.superAdmin);

  useEffect(() => {
    dispatch(getMonthlyRevenue());
    dispatch(getAllUsers());
    dispatch(getAllPaymentProofs());
    dispatch(clearAllSuperAdminSliceErrors());
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col gap-10">
          <H1>Dashboard</H1>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
                Monthly Total Payments Received
              </h3>
              <PaymentGraph />
            </div>
            <div>
              <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
                Users
              </h3>
              <BiddersAuctioneerGraph />
            </div>
            <div>
              <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
                Payment Proofs
              </h3>
              <PaymentProofs />
            </div>
            <div>
              <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
                Delete Items From Auction
              </h3>
              <AuctionItemDelete />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
