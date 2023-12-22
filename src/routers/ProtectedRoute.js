// ProtectedRoute.js
import React, { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { SideSection } from "../components";
function ProtectedRoute() {
  const [ok, setOk] = useState(true);
  if (ok) {
    return <Outlet />;
  } else {
    return <p>not login login first</p>;
  }
}

export default ProtectedRoute;
