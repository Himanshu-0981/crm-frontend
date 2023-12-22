// AdminRoute.js
import React, { useState } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { PageWrapper } from "../components";

function AdminRoute() {
  const [ok, setOk] = useState(true);
  if (ok) {
    return <Outlet />;
  } else {
    return (
      <PageWrapper>
        login not admin
        plsssssssssssssssssssssssssssssssssssssssssssssssssssssss
      </PageWrapper>
    );
  }
}

export default AdminRoute;
