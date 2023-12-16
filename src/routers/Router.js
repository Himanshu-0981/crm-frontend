import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Login, PageNotFound, Signup } from "../pages/index";
import { Navbar } from "../components";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        {/* 404 page */}
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
