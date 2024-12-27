import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { fetchUser } from "./store/slices/userSlice";
import SideDrawer from "./layout/SideDrawer";
import Home from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/SignUpPage";
import Login from "./pages/LoginPage";
import SubmitCommission from "./pages/SubmitCommissionPage";
import HowItWorks from "./pages/HowItWorksPage";
import About from "./pages/AboutPage";
import { getAllAuctionItems } from "./store/slices/auctionSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(getAllAuctionItems());
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
        <Route path="/about" element={<About />} />
      </Routes>
      <ToastContainer position="top-right" />
    </BrowserRouter>
  );
};

export default App;
