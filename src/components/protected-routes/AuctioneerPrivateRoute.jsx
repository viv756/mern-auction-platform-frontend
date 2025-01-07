import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Spinner from "../Spinner";

const AuctioneerPrivateRoute = () => {
  const { isAuthenticated, loading } = useSelector((store) => store.auth);
  if (loading) {
    return <Spinner />;
  }

  return isAuthenticated && isAuthenticated.role === "Auctioneer" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default AuctioneerPrivateRoute;
