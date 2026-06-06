import { Routes, Route } from "react-router-dom";
import NavigationLayout from "./NavigationLayout";
import Home from "../App/Pages/Home";
import Login from "../App/Pages/Login";
import Signup from "../App/Pages/Signup";
import Otp from "../App/Pages/Otp";
import Profile from "../App/Pages/Profile";
import Games from "../Games/Games.jsx";
function AllRoutes() {
  return (
    <Routes>
      <Route element={<NavigationLayout />}>
        <Route path="/" element={<Home />} />
         <Route path="/profile" element={<Profile />} />
          <Route path="/games" element={<Games />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<Otp />} />
    </Routes>
  );
}

export default AllRoutes;
