import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SideDrawer from "./layout/SideDrawer";
import Home from "./pages/Home";
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <BrowserRouter>
      <SideDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer position="top-right" />
    </BrowserRouter>
  );
};

export default App;
