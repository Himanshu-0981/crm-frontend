// import React, { useState } from "react";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// // icons

import { IoIosSpeedometer, IoIosPeople } from "react-icons/io";
import { BsBoxes } from "react-icons/bs";
import { ImBook } from "react-icons/im";
import { RiNewspaperLine, RiRouteFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { GiPerson } from "react-icons/gi";
import { HiFlag } from "react-icons/hi";
import { IoBagSharp } from "react-icons/io5";
import { TbUserSquare } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { PiListBulletsFill } from "react-icons/pi";
import { HiIdentification } from "react-icons/hi2";
import {
  FaDatabase,
  FaUserCircle,
  FaGlobeAsia,
  FaBlackTie,
} from "react-icons/fa";

// import {
//   Accountant,
//   AssessmentForm,
//   Assessments,
//   Branch,
//   City,
//   Country,
//   Dashboard,
//   Destination,
//   EmailTemplate,
//   FollowUpTasks,
//   Home,
//   LegalUsers,
//   Login,
//   NewLeads,
//   PageNotFound,
//   Products,
//   Prospect,
//   SalesUser,
//   Signup,
//   State,
// } from "../pages/index";
// import { Navbar, SideSection } from "../components";
// import AddCity from "../pages/ManageMaster/AddCity";

// function Router() {
//   const [auth, setAuth] = useState(true);
//   const [isAdmin, setIsAdmin] = useState(true);

//   return (
//     <BrowserRouter>
//       {auth ? (
//         <>
//           <Navbar />
//           <SideSection routes={sideMenuRoutes} />
//         </>
//       ) : null}
//       <Routes>
//         <Route
//           path="/dashboard"
//           element={auth ? <Dashboard /> : <Navigate to="/login" />}
//         />

//         <Route path="/login" element={<Login />} />

//         <Route path="/signup" element={<Signup />} />

//         <Route path="/add-city" element={<AddCity />} />

//         {sideMenuRoutes?.map((category, index) => (
//           <React.Fragment key={index}>
//             {category?.children?.map((route, childrenIndex) => (
//               <Route
//                 key={childrenIndex}
//                 path={route?.path}
//                 element={route?.element}
//               />
//             ))}
//             <Route path={category?.path} element={category?.element} />
//           </React.Fragment>
//         ))}

//         {/* 404 page not found */}
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default Router;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Accountant,
  AddBranch,
  AddCity,
  AddCountry,
  AddDestination,
  AddProduct,
  AddState,
  AssessmentForm,
  Assessments,
  Branch,
  City,
  Country,
  Dashboard,
  Destination,
  EmailTemplate,
  FollowUpTasks,
  Home,
  LegalUsers,
  Login,
  NewLeads,
  PageNotFound,
  Products,
  Prospect,
  SalesUser,
  Signup,
  State,
} from "../pages/index";

import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import React from "react";
import { Navbar, SideSection } from "../components";

function Router() {
  const userSideMenuRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      element: <Dashboard />,
      icon: <IoIosSpeedometer />,
    },
    {
      path: "/products",
      name: "Products",
      element: <Products />,
      icon: <IoBagSharp />,
    },
    {
      path: "/leads",
      name: "leads",
      element: "",
      icon: <IoBagSharp />,
    },
  ];

  const adminSideMenuRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      element: <Dashboard />,
      icon: <IoIosSpeedometer />,
    },

    {
      name: "Manage Master",
      icon: <FaDatabase />,

      children: [
        {
          path: "/city",
          name: "City",
          element: <City />,
          icon: <MdLocationOn />,
        },
        {
          path: "/state",
          name: "State",
          element: <State />,
          icon: <GiPerson />,
        },
        {
          path: "/branch",
          name: "Branch",
          element: <Branch />,
          icon: <MdLocationOn />,
        },
        {
          path: "/destination",
          name: "Destination",
          element: <Destination />,
          icon: <RiRouteFill />,
        },
      ],
    },
    {
      name: "Manage Leads",
      icon: <BsBoxes />,
      children: [
        {
          path: "/new-leads",
          name: "New Leads",
          element: <NewLeads />,
          icon: <BsBoxes />,
        },
        {
          path: "/prospect",
          name: "Prospect",
          element: <Prospect />,
          icon: <BsBoxes />,
        },
        {
          path: "/followup-tasks",
          name: "Followup Tasks",
          element: <FollowUpTasks />,
          icon: <BsBoxes />,
        },
      ],
    },
    {
      name: "Manage Products",
      icon: <FaGlobeAsia />,
      children: [
        {
          path: "/country",
          name: "Country",
          element: <Country />,
          icon: <HiFlag />,
        },
        {
          path: "/products",
          name: "Products",
          element: <Products />,
          icon: <IoBagSharp />,
        },
      ],
    },
    {
      name: "Manage Users",
      icon: <IoIosPeople />,
      children: [
        {
          path: "/sales-users",
          name: "Sales Users",
          element: <SalesUser />,
          icon: <FaUserCircle />,
        },
        {
          path: "/accountants",
          name: "Accountants",
          element: <Accountant />,
          icon: <TbUserSquare />,
        },
        {
          path: "/legal-users",
          name: "Legal Users",
          element: <LegalUsers />,
          icon: <FaBlackTie />,
        },
        {
          path: "/assessment",
          name: "Assessment",
          element: <Assessments />,
          icon: <FiUser />,
        },
      ],
    },
    {
      name: "Assessment",
      icon: <ImBook />,
      children: [
        {
          path: "/assessment-form",
          name: " Assessment Form",
          element: <AssessmentForm />,
          icon: <PiListBulletsFill />,
        },
      ],
    },
    {
      name: "CMS",
      icon: <RiNewspaperLine />,
      children: [
        {
          path: "/email-template",
          name: "Email Template",
          element: <EmailTemplate />,
          icon: <HiIdentification />,
        },
      ],
    },
  ];

  const isAuthenticated = true;
  const isAdmin = true;
  return (
    <>
      <BrowserRouter>
        {" "}
        {isAuthenticated && <Navbar />}
        {isAuthenticated && <SideSection routes={userSideMenuRoutes} />}
        {isAuthenticated && isAdmin ? (
          <SideSection routes={adminSideMenuRoutes} />
        ) : null}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />

          {/* Protected Routes  */}

          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/leads" element={<NewLeads />} />
          </Route>

          {/* Admin Routes */}

          <Route path="/" element={<AdminRoute />}>
            {adminSideMenuRoutes?.map((route, index) => (
              <Route key={index} path={route?.path} element={route?.element}>
                {route?.children?.map((child, index) => (
                  <Route
                    key={index}
                    path={child?.path}
                    element={child?.element}
                  />
                ))}
              </Route>
            ))}

            <Route path="/city/add-city" element={<AddCity />} />
            <Route path="/state/add-state" element={<AddState />} />
            <Route path="/branch/add-branch" element={<AddBranch />} />
            <Route
              path="/destination/add-destination"
              element={<AddDestination />}
            />
            <Route path="/product/add-country" element={<AddCountry />} />
            <Route path="/product/add-product" element={<AddProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
