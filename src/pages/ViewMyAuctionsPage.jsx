import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyAuctionItems } from "@/store/slices/auctionSlice";
import H1 from "@/components/H1";
import Spinner from "@/components/Spinner";
import CardTwo from "@/components/CardTwo";

const ViewMyAuctionsPage = () => {
  const { myAuctions, loading } = useSelector((state) => state.auction);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || user.role !== "Auctioneer") {
      navigateTo("/");
    }
    dispatch(getMyAuctionItems());
  }, [dispatch, isAuthenticated]);

  return (
    <div className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
      <H1 content={"My Auctions"} color={`#d6482b`} />
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap gap-6">
          {myAuctions.map((element) => (
            <CardTwo
              title={element.title}
              startingBid={element.startingBid}
              endTime={element.endTime}
              startTime={element.startTime}
              imgSrc={element.image?.url}
              id={element._id}
              key={element._id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewMyAuctionsPage;
