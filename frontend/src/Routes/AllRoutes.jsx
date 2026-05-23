import { Routes, Route } from "react-router-dom";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/login" element={<div>Login</div>} />
    </Routes>
  );
}

export default AllRoutes;
