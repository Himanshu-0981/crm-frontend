// ProtectedRoute.js
import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
function ProtectedRoute() {
  const [ok, setOk] = useState(true);
  if (ok) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
