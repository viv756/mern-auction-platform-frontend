import { useSelector } from "react-redux";
import { RiAuctionFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const UpcomingAuctions = () => {
  const { allAuctions } = useSelector((state) => state.auction);

  const today = new Date();
  const todayString = today.toDateString();

  const auctionsStartingToday = allAuctions.filter((item) => {
    const auctionDate = new Date(item.startTime);
    return auctionDate.toDateString() === todayString;
  });

  return (
    <section className="my-8">
      <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
        Auctions For Today
      </h3>
      <div className="flex flex-wrap gap-6">
        <div className="bg-primary w-full p-2 gap-10 rounded-md flex flex-col justify-between lg:flex-1 lg:h-auto lg:p-6 2xl:flex-none 2xl:basis-64 2xl:flex-grow 2xl:px-2  2xl:py-6">
          <span className="rounded-full bg-accent text-white w-fit p-3 ml-3 ">
            <RiAuctionFill />
          </span>
          <div className="pl-3">
            <h3 className="text-secondary text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
              Auctions For
            </h3>
            <div>
              <h3 className="text-textcolor text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
                Today
              </h3>
            </div>
          </div>
        </div>
        {auctionsStartingToday.slice(0, 2).map((element) => (
          <div
            className="flex flex-col gap-4 w-full lg:flex-1 2xl:flex-none 2xl:basis-64 2xl:flex-grow"
            key={element._id}>
            <Link
              to={`/auction/item/${element._id}`}
              className="w-full flex flex-col gap-4 bg-boxcolor p-2 rounded-md 2xl:gap-2 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2">
                <img
                  src={element.image?.url}
                  alt={element.title}
                  className="w-16 h-16 2xl:w-10 2xl:h-10"
                />
                <p className="font-extralight text-[#111] text-[12px]">{element.title}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-textcolor font-semibold">Starting Bid:</p>{" "}
                <p className="text-accent font-semibold">Rs. {element.startingBid}</p>{" "}
              </div>
              <div className="flex flex-col">
                <p className="text-textcolor font-bold">Starting Time:</p>
                <p className="text-accent text-[12px]">{element.startTime}</p>
              </div>
            </Link>
          </div>
        ))}
        {auctionsStartingToday.slice(2, 4).map((element) => (
          <div className="flex flex-col gap-4 w-full 2xl:basis-64 2xl:flex-grow" key={element._id}>
            <Link
              to={`/auction/item/${element._id}`}
              className="w-full flex flex-col gap-4 bg-boxcolor p-2 rounded-md 2xl:gap-2 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2">
                <img
                  src={element.image?.url}
                  alt={element.title}
                  className="w-16 h-16 2xl:w-10 2xl:h-10"
                />
                <p className="font-extralight text-[#111] text-[12px]">{element.title}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-textcolor font-semibold">Starting Bid:</p>{" "}
                <p className="text-accent font-semibold">Rs. {element.startingBid}</p>{" "}
              </div>
              <div className="flex flex-col">
                <p className="text-textcolor font-bold">Starting Time:</p>
                <p className="text-accent  text-[12px]">{element.startTime}</p>
              </div>
            </Link>
          </div>
        ))}
        {auctionsStartingToday.slice(4, 6).map((element) => (
          <div className="flex flex-col gap-4 w-full 2xl:basis-64 2xl:flex-grow" key={element._id}>
            <Link
              to={`/auction/item/${element._id}`}
              className="w-full flex flex-col gap-4 bg-boxcolor p-2 rounded-md 2xl:gap-2 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2">
                <img
                  src={element.image?.url}
                  alt={element.title}
                  className="w-16 h-16 2xl:w-10 2xl:h-10"
                />
                <p className="font-extralight text-[#111] text-[12px]">{element.title}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-textcolor font-semibold">Starting Bid:</p>{" "}
                <p className="text-accent font-semibold]">Rs. {element.startingBid}</p>{" "}
              </div>
              <div className="flex flex-col">
                <p className="text-textcolor font-bold">Starting Time:</p>
                <p className="text-accent  text-[12px]">{element.startTime}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingAuctions;
