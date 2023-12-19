import React from "react";
import { PageHeader, PageWrapper } from "../../components";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { MdFullscreen } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";

function City() {
  return (
    <PageWrapper>
      <section>
        <PageHeader
          title={"manage city"}
          slugTitle1={"masters"}
          slugTitle2={"city list"}
          buttonIcon={<IoAddCircleOutline size={16} />}
          buttonTitle={"Add City"}
          handleButtonClick={() => {}}
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
            <CiFilter className="cursor-pointer" />
            <MdFullscreen className="cursor-pointer" />
          </div>
        </div>

        <div>
          <form className="flex justify-between mt-5">
            <section className="flex items-center gap-4">
              {" "}
              <div>
                <label
                  htmlFor="state"
                  className="bg-gray-200 py-2 px-2 rounded-l-md"
                >
                  State
                </label>
                <input
                  type="text"
                  className="border border-gray-300 outline-none py-1 px-2"
                />
              </div>
              <div>
                {" "}
                <label
                  htmlFor="city"
                  className="bg-gray-200 py-2 px-2 rounded-l-md"
                >
                  City
                </label>
                <input
                  type="text"
                  className="border border-gray-300 outline-none py-1 px-2"
                />
              </div>
            </section>

            <div className="flex items-center gap-2 ">
              <button className="bg-blue-600 text-white px-2 py-0.5 flex items-center gap-1 rounded-sm">
                <IoMdSearch />
                Search
              </button>
              <button className="bg-blue-600 text-white px-2 py-0.5 flex items-center gap-1 rounded-sm">
                <GrPowerReset />
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* Table */}
        <table></table>
      </section>
    </PageWrapper>
  );
}

export default City;
