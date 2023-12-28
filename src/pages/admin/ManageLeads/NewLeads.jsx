import React, { useState } from "react";
import { Button, Input, PageHeader, PageWrapper } from "../../../components";
import { NavLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { RxReset } from "react-icons/rx";
import { CiFilter } from "react-icons/ci";
import { MdFullscreen } from "react-icons/md";

function NewLeads() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <PageWrapper>
      <PageHeader
        title={"Manage leads"}
        slugTitle1={"new leads"}
        slugTitle2={"new leads list"}
        buttonClassName={"hidden"}
      />

      <section className=" shadow-lg bg-white rounded-md  mt-10">
        <div className="flex font-open-sans text-gray-600 text-sm justify-around">
          <NavLink
            to="/leads/new-leads/active"
            className={({ isActive }) =>
              `text-center w-full h-full p-3  ${
                isActive ? "bg-blue-700 text-white" : ""
              }`
            }
          >
            Active Leads
          </NavLink>
          <NavLink
            to="/leads/new-leads/inactive"
            className="text-center w-full h-full p-3 "
          >
            Inactive Leads
          </NavLink>
        </div>

        <div className="flex justify-between xs:justify-end xs:gap-3 sm:gap-5 md:gap-10 items-center text-[#333e52] text-xl mt-5 px-5">
          <div className="flex items-center gap-4">
            <button className="text-sm border-[0.1px] border-color_blue text-color_blue hover:bg-color_blue hover:text-white duration-150 py-1 px-2 rounded-full">
              Add Lead
            </button>
            <button className="text-sm border-[0.1px] border-color_blue text-color_blue hover:bg-color_blue hover:text-white duration-150 py-1 px-2 rounded-full">
              Assign Lead
            </button>
          </div>
          <div className="flex items-center gap-4">
            <CiFilter
              className="cursor-pointer text-xl"
              onClick={handleToggle}
            />
            <MdFullscreen className="cursor-pointer text-xl " />
          </div>
        </div>

        <div
          className={`flex justify-between gap-4 flex-col  mt-3 items-start sm:flex-row sm:items-center  ${
            toggle
              ? "opacity-100 max-h-[500px] transition-opacity transition-max-height duration-300 ease-in-out"
              : "opacity-0 max-h-0 overflow-hidden transition-opacity transition-max-height duration-300 ease-in-out"
          }`}
        >
          <div className="flex flex-col sm:flex-row  justify-center items-center w-full   gap-2">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Mobile" />
            <Input placeholder="Status" />
          </div>
          <div className="flex items-center gap-2  ">
            <Button
              title={"Search"}
              className={"bg-blue-500 w-full"}
              icon={<IoMdSearch />}
            />
            <Button
              title={"Reset"}
              className={"bg-blue-500"}
              icon={<RxReset />}
            />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default NewLeads;
