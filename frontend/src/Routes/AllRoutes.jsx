import { Routes, Route } from "react-router-dom";
import NavigationLayout from "./NavigationLayout";
import Home from "../App/Pages/Home";
import Login from "../App/Pages/Login";
import Signup from "../App/Pages/Signup";
import Otp from "../App/Pages/Otp";
function AllRoutes() {
  return (
    <Routes>
      <Route element={<NavigationLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<Otp />} />
    </Routes>
  );
}

export default AllRoutes;
