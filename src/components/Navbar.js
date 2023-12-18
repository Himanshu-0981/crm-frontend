import React, { useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { RxEnterFullScreen } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { MdOutlinePowerSettingsNew } from "react-icons/md";

import { useSideMenuState } from "../contexts/SideMenuState";
import { logo, mini_logo } from "../assets/images";
import { Search } from ".";

function Navbar() {
  const [selectedSearchIcon, setSelectedSearchIcon] = useState(false);
  const [administratorIcon, setAdministratorIcon] = useState(false);
  const [mobileMenuIcon, setMobileMenuIcon] = useState(false);

  const { toggle, setToggle } = useSideMenuState();

  const handleSelectedSearch = () => setSelectedSearchIcon(!selectedSearchIcon);
  const handleAdministratorIcon = () =>
    setAdministratorIcon(!administratorIcon);

  const handleMobileMenuIconClick = () => setMobileMenuIcon(!mobileMenuIcon);

  const handleMenuClick = () => setToggle(!toggle);

  return (
    <React.Fragment>
      <nav className="sticky top-0 bg-color_blue  flex items-center justify-between px-4 py-3 ">
        <section className="md:hidden">
          <HiMenu
            onClick={handleMenuClick}
            className="text-white text-2xl xxs:text-3xl cursor-pointer"
          />
        </section>

        <section className="md:hidden">
          <img
            src={logo}
            className=" w-24  xxs:w-36 cursor-pointer"
            alt="logo"
          />
        </section>

        <section className="md:hidden">
          <BsThreeDotsVertical
            className="text-white text-xl xxs:text-2xl cursor-pointer"
            onClick={handleMobileMenuIconClick}
          />
        </section>

        <section className="hidden md:flex items-center justify-between gap-7 lg:gap-16 ">
          <div>
            <img
              src={mini_logo}
              alt="logo-mini"
              className="cursor-pointer h-8 hidden md:flex lg:hidden"
            />
            <img
              src={logo}
              className=" w-40 cursor-pointer hidden lg:flex"
              alt="logo"
            />
          </div>
          <div className="  md:relative flex items-center gap-5 text-white">
            <HiMenu
              onClick={handleMenuClick}
              className=" text-2xl xxs:text-2xl cursor-pointer"
            />
            <RxEnterFullScreen className=" text-2xl xxs:text-xl cursor-pointer" />
            <IoSearch
              className=" text-2xl xxs:text-xl cursor-pointer "
              onClick={handleSelectedSearch}
            />
            <div className="">
              {selectedSearchIcon ? (
                <Search
                  type="text"
                  placeholder="Search Lead From Mobile"
                  className="w-full"
                />
              ) : (
                <React.Fragment></React.Fragment>
              )}
            </div>
          </div>
        </section>

        <section className="absolute right-2 top-[70px]  z-40 text-white md:relative md:flex md:top-0 items-center gap-3 ">
          <div
            className="  md:flex items-center gap-1 cursor-pointer relative"
            onClick={handleAdministratorIcon}
          >
            <p className="hidden w-1200:flex text-sm">Administrator</p>{" "}
            {mobileMenuIcon ? (
              <IoIosArrowDown className="text-gray-600 md:text-white text-base cursor-pointer" />
            ) : (
              <IoIosArrowDown className="hidden md:flex text-white text-base cursor-pointer" />
            )}
          </div>

          {/* buttons  */}

          <section
            className={`${
              administratorIcon ? "absolute " : "hidden"
            }  z-20  right-0 top-9 text-gray-600 bg-white   shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] `}
          >
            <div className="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-slate-100">
              <CiSettings className="text-lg" />
              <p>Settings</p>
            </div>
            <hr className="border border-gray-300" />
            <div className="flex items-center gap-3 px-5 py-3 cursor-pointer hover:bg-slate-100">
              <MdOutlinePowerSettingsNew className="text-lg" />
              <p>Logout</p>
            </div>
          </section>
        </section>

        {/* Mobile view search section and administrator section*/}
        <section
          className={`${
            mobileMenuIcon ? "flex" : "hidden"
          } bg-gray-300 absolute flex  items-center justify-between px-6  gap-4 sm:gap-16 border border-t-0 border-r-0 border-l-0  w-full h-14 top-[48px] xxs:top-[52px]  left-0 md:hidden`}
        >
          <div className="w-full flex items-center shadow-sm">
            <Search
              type="text"
              placeholder="Search Lead From Mobile"
              className="w-full relative pl-10 py-2 rounded-sm border shadow-sm text-sm"
            />
            <IoSearch className="absolute left-8 " color="gray" size={20} />
          </div>
          <div></div>
        </section>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
