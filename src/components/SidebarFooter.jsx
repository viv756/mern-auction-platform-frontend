import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const SidebarFooter = () => {
  return (
    <div>
      <div className="flex gap-2 items-center mb-2">
        <Link
          to="/"
          className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-blue-700">
          <FaFacebook />
        </Link>
        <Link
          to="/"
          className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-pink-500">
          <RiInstagramFill />
        </Link>
      </div>
      <Link
        to={"/contact"}
        className="text-stone-500 font-semibold hover:text-[#d6482b] hover:transition-all hover:duration-150">
        Contact Us
      </Link>
      <p className="text-stone-500">&copy; PrimeBid, LLC.</p>
      <p className="text-stone-500">
        Degined By{" "}
        <Link
          to={"/"}
          className="font-semibold hover:text-[#d6482b] hover:transition-all hover:duration-150">
          Vivek
        </Link>
      </p>
    </div>
  )
}

export default SidebarFooter;
