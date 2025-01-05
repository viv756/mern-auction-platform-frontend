import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAuctionFill } from "react-icons/ri";
import { MdLeaderboard, MdDashboard } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
import { FaEye, FaUserCircle } from "react-icons/fa";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { logout } from "@/store/slices/userSlice";
import CustomLink from "@/components/CustomLink";
import SidebarFooter from "@/components/SidebarFooter";

const SideDrawer = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="fixed right-5 top-5 bg-[#D6482B] text-white text-3xl p-2 rounded-md hover:bg-[#b8381e] lg:hidden ">
        <GiHamburgerMenu />
      </div>
      <div
        className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-full fixed top-0 ${
          show ? "left-0" : "left-[-100%]"
        } transition-all duration-100 p-4 flex flex-col justify-between lg:left-0 border-r-[1px] border-r-stone-500`}>
        <div className="relative">
          <Link to={"/"}>
            <h4 className="text-2xl font-semibold mb-4">
              Prime<span className="text-[#D6482b]">Bid</span>
            </h4>
          </Link>
          <ul className="flex flex-col gap-3">
            <li>
              <CustomLink navLink={"/auctions"} icon={<RiAuctionFill />} title={"Auctions"} />
            </li>
            <li>
              <CustomLink navLink={"/leaderboard"} icon={<MdLeaderboard />} title={"Leaderboard"} />
            </li>
            {isAuthenticated && user && user.role === "Auctioneer" && (
              <>
                <li>
                  <CustomLink
                    navLink={"/submit-commission"}
                    icon={<FaFileInvoiceDollar />}
                    title={"Submit Commission"}
                  />
                </li>
                <li>
                  <CustomLink
                    navLink={"/create-auction"}
                    icon={<IoIosCreate />}
                    title={"Create Auction"}
                  />
                </li>
                <li>
                  <CustomLink
                    navLink={"/view-my-auctions"}
                    icon={<FaEye />}
                    title={"View My Auctions"}
                  />
                </li>
              </>
            )}
            {isAuthenticated && user && user.role === "Super Admin" && (
              <li>
                <CustomLink navLink={"/dashboard"} icon={<MdDashboard />} title={"Dashboard"} />
              </li>
            )}
          </ul>
          {!isAuthenticated ? (
            <>
              <div className="my-4 flex gap-2">
                <Link
                  to={"/sign-up"}
                  className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white">
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  className="text-[#DECCBE] bg-transparent border-[#DECCBE] border-2 hover:bg-[#fffefd] hover:text-[#fdba88] font-bold text-xl py-1 px-4 rounded-md">
                  Login
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="my-4 flex gap-4 w-fit" onClick={handleLogout}>
                <button className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white">
                  Logout
                </button>
              </div>
            </>
          )}
          <hr className="mb-4 border-t-[#d6482b]" />
          <ul className="flex flex-col gap-3">
            {isAuthenticated && (
              <li>
                <CustomLink navLink={"/me"} icon={<FaUserCircle />} title={"My Profile"} />
              </li>
            )}
            <li>
              <CustomLink
                navLink={"/how-it-works-info"}
                icon={<SiGooglesearchconsole />}
                title={"How it works"}
              />
            </li>
            <li>
              <CustomLink navLink={"/about"} icon={<BsFillInfoSquareFill />} title={"About Us"} />
            </li>
          </ul>
          <IoMdCloseCircleOutline
            onClick={() => setShow(!show)}
            className="absolute top-0 right-4 text-[28px] sm:hidden"
          />
        </div>
        <SidebarFooter />
      </div>
    </>
  );
};

export default SideDrawer;
