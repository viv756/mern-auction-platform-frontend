import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Spinner from "../Spinner";

const AdminPrivateRoute = () => {
  const { isAuthenticated, loading } = useSelector((store) => store.auth);
  if (loading) {
    return <Spinner />;
  }

  return isAuthenticated && isAuthenticated.role === "Super Admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminPrivateRoute;
