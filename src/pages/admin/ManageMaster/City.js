import React, { useState } from "react";
import { Button, PageHeader, PageWrapper, Table } from "../../../components";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { MdFullscreen } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { RxReset } from "react-icons/rx";

function City() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  const navigate = useNavigate();

  const data = [
    { sno: 1, name: "John Doe", email: "john.doe@example.com" },
    { sno: 2, name: "Jane Doe", email: "jane.doe@example.com" },
  ];
  const columns = [
    { key: "sno", title: "Serial Number" },
    { key: "name", title: "Name" },
    { key: "email", title: "Email" },
    // Add more columns as needed
  ];
  const actions = [
    {
      key: "edit",
      label: "Edit",
      onClick: (row) => {
        // Handle edit action for the row
        console.log("Edit", row);
      },
    },
    // Add more actions as needed
  ];

  return (
    <PageWrapper>
      <section>
        <PageHeader
          title={"manage city"}
          slugTitle1={"masters"}
          slugTitle2={"city list"}
          buttonIcon={<IoAddCircleOutline size={16} />}
          buttonTitle={"Add City"}
          handleButtonClick={() => navigate("/city/add-city")}
        />
      </section>

      <section className="bg-white mt-10 px-5 py-10">
        <div className="flex justify-between ">
          <div>
            <h1 className="font-open-sans text-xs font-normal text-[#404e67]  ">
              Showing {1} to {10} of {1034}
            </h1>
          </div>

          <div className="flex items-center gap-6 text-[#333e52] text-xl ">
            <CiFilter className="cursor-pointer" onClick={handleToggle} />
            <MdFullscreen className="cursor-pointer" />
          </div>
        </div>

        <div
          className={`${
            toggle
              ? "opacity-100 max-h-[500px] transition-opacity transition-max-height duration-300 ease-in-out"
              : "opacity-0 max-h-0 overflow-hidden transition-opacity transition-max-height duration-300 ease-in-out"
          }`}
        >
          <form className="flex flex-col sm:flex-row gap-4 justify-between mt-5">
            <section className="flex items-center gap-4">
              {" "}
              <div>
                <input
                  type="text"
                  className="border border-gray-400 outline-none py-1 px-2 w-full text-sm rounded-md"
                  placeholder=" State"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="border border-gray-400 outline-none py-1 px-2 w-full text-sm rounded-md"
                  placeholder=" City"
                />
              </div>
            </section>

            <div className="flex items-center gap-2  ">
              <Button
                title={"Search"}
                className={"bg-blue-500"}
                icon={<IoMdSearch />}
              />
              <Button
                title={"Reset"}
                className={"bg-blue-500"}
                icon={<RxReset />}
              />
            </div>
          </form>
        </div>

        {/* Table */}
        <div className="mt-10 transition-transform ease-in-out duration-300 transform">
          <Table
            columns={columns}
            data={data}
            showCheckbox={false}
            actions={actions}
          />
        </div>
      </section>
    </PageWrapper>
  );
}

export default City;
