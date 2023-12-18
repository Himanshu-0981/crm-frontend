import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useSideMenuState } from "../contexts/SideMenuState";

function SideSection({ routes }) {
  const [activeSection, setActiveSection] = useState(null);
  const { toggle, setToggle } = useSideMenuState();

  const toggleSection = (index) =>
    setActiveSection((prev) => (prev === index ? null : index));

  // whenever the size will change the side menu will be closed automatically
  const handleResize = () => setToggle(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // clean up function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <aside
        className={`${toggle ? "translate-x-0   " : ""} 
        fixed top-12 xxs:top-[54px] md:top-14 -translate-x-40 transition-transform duration-300 md:-translate-x-0 md:w-fit lg:w-60 h-screen bg-color_blue text-white flex-col  md:flex shadow-md`}
      >
        {routes?.map((route, index) => (
          <NavLink to={route?.path} key={index}>
            <div className="relative">
              <section
                className={`flex justify-between  cursor-pointer duration-150 p-3 items-center gap-6 ${
                  activeSection === index
                    ? "bg-white text-color_blue"
                    : "hover:bg-white hover:text-color_blue"
                }`}
                onClick={() => toggleSection(index)}
              >
                <section className="flex gap-4">
                  {" "}
                  <div className="text-lg">{route?.icon}</div>{" "}
                  <div
                    className={`text-sm  lg:flex ${toggle ? "" : "hidden"}  `}
                  >
                    {route?.name}
                  </div>
                </section>
                <div className={`${toggle ? "" : "hidden"} lg:flex`}>
                  {activeSection === index ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </div>
              </section>
              {activeSection === index && (
                <ul
                  className={`bg-color_blue cursor-pointer   lg:relative  w-full  lg:w-full lg:left-0 top-0 
                ${
                  toggle ? "relative left-0 w-full" : "absolute left-10 md:w-44"
                }`}
                >
                  {route?.children?.map((child, childIndex) => (
                    <NavLink
                      to={child?.path}
                      key={childIndex}
                      className={`hover:bg-blue-950 p-3 pl-14  flex md:pl-2 lg:pl-14`}
                    >
                      <div className="flex justify-start items-center gap-3">
                        <div>{child?.icon} </div>
                        <div className="text-sm">{child?.name}</div>
                      </div>
                    </NavLink>
                  ))}
                </ul>
              )}
            </div>
          </NavLink>
        ))}
      </aside>
    </>
  );
}

export default SideSection;
