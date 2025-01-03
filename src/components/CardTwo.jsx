import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { calculateTimeLeft, formatTimeLeft } from "@/lib/utils";

const CardTwo = ({ imgSrc, title, startingBid, startTime, endTime, id }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startTime, endTime));
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(startTime, endTime));
    }, 1000); // Update every second
    return () => clearInterval(timer);
  }, [startTime, endTime]);

  const handleDeleteAuction = (id) => {};

  return (
    <div className="basis-full bg-white rounded-md group sm:basis-56 lg:basis-60 2xl:basis-80">
      <img src={imgSrc} alt={title} className="w-full aspect-[4/3] m-auto md:p-12" />
      <div className="px-2 pt-4 pb-2">
        <h5 className="font-semibold text-[18px] group-hover:text-[#d6482b] mb-2">{title}</h5>
        {startingBid && (
          <p className="text-stone-600 font-light">
            Starting Bid: <span className="text-[#fdba88] font-bold ml-1">{startingBid}</span>
          </p>
        )}
        <p className="text-stone-600 font-light">
          {timeLeft.type}
          {Object.keys(timeLeft).length > 1 ? (
            <span className="text-[#fdba88] font-bold ml-1">{formatTimeLeft(timeLeft)}</span>
          ) : (
            <span className="text-[#fdba88] font-bold ml-1">Time's up!</span>
          )}
        </p>
        <div className="flex flex-col gap-2 mt-4">
          <Link
            className="bg-stone-700 text-center text-white text-xl px-4 py-2 rounded-md transition-all duration-300 hover:bg-black"
            to={`/auction/details/${id}`}>
            View Auction
          </Link>
          <button
            className="bg-red-400 text-center text-white text-xl px-4 py-2 rounded-md transition-all duration-300 hover:bg-red-600"
            onClick={handleDeleteAuction}>
            Delete Auction
          </button>
          <button
            disabled={new Date(endTime) > Date.now()}
            onClick={() => setOpenDrawer(true)}
            className="bg-sky-400 text-center text-white text-xl px-4 py-2 rounded-md transition-all duration-300 hover:bg-sky-700">
            Republish Auction
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
