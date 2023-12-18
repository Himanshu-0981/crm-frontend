import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// icons

import { IoIosSpeedometer } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { FaGlobeAsia } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { ImBook } from "react-icons/im";
import { RiNewspaperLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { GiPerson } from "react-icons/gi";
import { RiRouteFill } from "react-icons/ri";
import { HiFlag } from "react-icons/hi";
import { IoBagSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbUserSquare } from "react-icons/tb";
import { FaBlackTie } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { PiListBulletsFill } from "react-icons/pi";
import { HiIdentification } from "react-icons/hi2";

import {
  Accountant,
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
  Products,
  Prospect,
  SalesUser,
  Signup,
  State,
} from "../pages/index";
import { Navbar, SideSection } from "../components";

function Router() {
  const routes = [
    { path: "/", name: "Home", element: <Home /> },
    { path: "/login", name: "Login", element: <Login /> },
    { path: "/signup", name: "Signup", element: <Signup /> },
  ];

  const sideMenuRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      element: Dashboard,
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
  return (
    <BrowserRouter>
      <Navbar />
      <SideSection routes={sideMenuRoutes} />
      <Routes>
        {routes?.map((route, index) => {
          return (
            <React.Fragment key={index}>
              <Route path={route?.path} element={route?.element} />
            </React.Fragment>
          );
        })}

        {/* side menu routes */}

        {sideMenuRoutes?.map((category) =>
          category?.children?.map((route, childrenIndex) => (
            <Route
              key={childrenIndex}
              path={route?.path}
              element={route?.element}
            />
          ))
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
