import { Routes, Route } from "react-router-dom";
import Home from "../App/Pages/Home";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<div>Login</div>} />
    </Routes>
  );
}

export default AllRoutes;
