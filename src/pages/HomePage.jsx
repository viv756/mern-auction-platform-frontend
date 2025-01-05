import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import H1 from "@/components/H1";
import { howItWorks } from "@/lib/constants";
import FeaturedAuctions from "@/components/home-sub-components/FeaturedAuctions";
import UpcomingAuctions from "@/components/home-sub-components/UpcomingAuctions";
import Leaderboard from "@/components/home-sub-components/Leaderboard";
import Spinner from "@/components/Spinner";

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
      <div>
        <p className="text-[#DECCBE] font-bold text-xl mb-8">Transparency Leads to Your Victory</p>
        <H1 style={{ color: "#040316" }}>Transparent Auctions</H1>
        <H1 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Be The Winner
        </H1>
        <div className="flex gap-4 my-8">
          {!isAuthenticated && (
            <>
              <Link
                to="/sign-up"
                className="bg-primary font-semibold hover:shadow-xl rounded-md px-8 flex items-center py-2 text-white transition-all duration-300">
                Sign Up
              </Link>
              <Link
                to={"/login"}
                className="text-[#08071A] bg-secondary hover:shadow-xl font-medium text-xl  rounded-md px-8 flex items-center py-2 transition-all duration-300">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
          How it works
        </h3>
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap w-full">
          {howItWorks.map((element) => {
            return (
              <div
                key={element.title}
                className="bg-boxcolor flex flex-col gap-2 p-2 rounded-md h-[96px] justify-center md:w-[48%] lg:w-[47%] 2xl:w-[24%] hover:shadow-2xl transition-all duration-300">
                <h5 className="font-bold">{element.title}</h5>
                <p>{element.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <FeaturedAuctions />
      <UpcomingAuctions />
      <Leaderboard />
    </section>
  );
};

export default Home;
