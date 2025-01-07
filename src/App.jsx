import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { fetchUser, fetchLeaderboard } from "./store/slices/authSlice";
import { getAllAuctionItems } from "./store/slices/auctionSlice";
import SideDrawer from "./layout/SideDrawer";
import Home from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/SignUpPage";
import Login from "./pages/LoginPage";
import SubmitCommission from "./pages/SubmitCommissionPage";
import HowItWorks from "./pages/HowItWorksPage";
import About from "./pages/AboutPage";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import AuctionsPage from "./pages/AuctionsPage";
import AuctionItemPage from "./pages/AuctionItemPage";
import CreateAuctionPage from "./pages/CreateAuctionPage";
import ViewMyAuctionsPage from "./pages/ViewMyAuctionsPage";
import ViewAuctionDetails from "./pages/ViewAuctionDetails";
import Dashboard from "./pages/super-admin/Dashboard";
import ContactUsPage from "./pages/ContactUsPage";
import UserProfilePage from "./pages/UserProfilePage";
import PrivateRoute from "./components/protected-routes/PrivateRoute";
import AuctioneerPrivateRoute from "./components/protected-routes/AuctioneerPrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(getAllAuctionItems());
    dispatch(fetchLeaderboard());
  }, []);

  return (
    <BrowserRouter>
      <SideDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
        <Route path="/how-it-works-info" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/auctions" element={<AuctionsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/me" element={<UserProfilePage />} />
          <Route path="/auction/item/:id" element={<AuctionItemPage />} />
        </Route>
        <Route element={<AuctioneerPrivateRoute />}>
          <Route path="/submit-commission" element={<SubmitCommission />} />
          <Route path="/create-auction" element={<CreateAuctionPage />} />
          <Route path="/view-my-auctions" element={<ViewMyAuctionsPage />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auction/details/:id" element={<ViewAuctionDetails />} />
      </Routes>
      <ToastContainer position="top-right" />
    </BrowserRouter>
  );
};

export default App;
