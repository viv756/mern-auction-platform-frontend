import { Link } from "react-router-dom";

const CustomLink = ({ navLink, icon, title }) => {
  return (
    <Link
      to={`${navLink}`}
      className="flex text-xl font-semibold gap-2 items-center hover:text-primary hover:transition-all hover:duration-150">
      {icon}
      {title}
    </Link>
  );
};

export default CustomLink;
