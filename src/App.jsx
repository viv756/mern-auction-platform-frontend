import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { fetchUser } from "./store/slices/userSlice";
import SideDrawer from "./layout/SideDrawer";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SubmitCommission from "./pages/SubmitCommission";
import HowItWorks from "./pages/HowItWorks";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <BrowserRouter>
      <SideDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/submit-commission" element={<SubmitCommission />} />
        <Route path="/how-it-works-info" element={<HowItWorks />} />
      </Routes>
      <ToastContainer position="top-right" />
    </BrowserRouter>
  );
};

export default App;
