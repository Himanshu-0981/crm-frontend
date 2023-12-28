import React from "react";
import { Button, Input, PageHeader, PageWrapper } from "../../../components";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { MdFullscreen } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { RxReset } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Products() {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => setToggle(!toggle);

  const navigate = useNavigate();
  return (
    <PageWrapper>
      <PageHeader
        title={"Country"}
        slugTitle1={"products"}
        slugTitle2={"products list"}
        buttonTitle={"Add Product"}
        buttonIcon={<IoAddCircleOutline size={16} />}
        handleButtonClick={() => navigate("/product/add-product")}
      />

      <section className=" bg-white mt-10 px-5 py-10 shadow-md rounded-md">
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
          className={`flex justify-between gap-4 flex-col  mt-3 items-start sm:flex-row sm:items-center  ${
            toggle
              ? "opacity-100 max-h-[500px] transition-opacity transition-max-height duration-300 ease-in-out"
              : "opacity-0 max-h-0 overflow-hidden transition-opacity transition-max-height duration-300 ease-in-out"
          }`}
        >
          <div className="flex items-center   gap-2">
            <Input placeholder="Product" />
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

export default Products;
