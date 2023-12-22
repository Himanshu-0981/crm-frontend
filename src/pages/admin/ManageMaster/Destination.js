import React, { useState } from "react";
import { Button, PageHeader, PageWrapper } from "../../../components";
import { IoMdSearch } from "react-icons/io";
import { RxReset } from "react-icons/rx";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import { MdFullscreen } from "react-icons/md";

function Destination() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  const navigate = useNavigate();

  return (
    <PageWrapper>
      <section>
        <PageHeader
          title={"manage Destination"}
          slugTitle1={"masters"}
          slugTitle2={"Destination list"}
          buttonIcon={<IoAddCircleOutline size={16} />}
          buttonTitle={"Add Destination"}
          handleButtonClick={() => navigate("/destination/add-destination")}
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
                  placeholder=" Destination"
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
      </section>
    </PageWrapper>
  );
}

export default Destination;
