import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SideDrawer from "./layout/SideDrawer";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SubmitCommission from "./pages/SubmitCommission";

const App = () => {
  return (
    <BrowserRouter>
      <SideDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/submit-commission" element={<SubmitCommission />} />
      </Routes>
      <ToastContainer position="top-right" />
    </BrowserRouter>
  );
};

export default App;
