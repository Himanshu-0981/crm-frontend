import React, { useState } from "react";
import { Button, Input, PageHeader, PageWrapper } from "../../../components";
import { IoIosArrowBack } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import Radio from "../../../components/Radio";
import { useNavigate } from "react-router-dom";

const AddDesignation = () => {
  const [isActive, setIsActive] = useState(false);
  const handleRadioChange = (value) => setIsActive(value);

  const navigate = useNavigate();
  const goBack = () => navigate("/designation");
  return (
    <PageWrapper>
      <PageHeader
        title={"Manage Designation"}
        slugTitle1={"designation"}
        slugTitle2={"add designation"}
        buttonTitle={"Back To Designation List"}
        buttonIcon={<IoIosArrowBack />}
        handleButtonClick={goBack}
      />
      <section className="font-open-sans  bg-white mt-10 px-5 py-10 shadow-md rounded-md">
        <h1 className="text-lg font-montserrat text-blue-700">
          Designation Info
        </h1>
        <div className="w-full bg-blue-700 h-[1px] mt-2 mb-5"></div>

        <div>
          <div className="flex items-center mt-5">
            <p className="w-32 text-sm text-gray-700">Designation </p>
            <Input placeholder={"Enter Designation Name"} type={"text"} />
          </div>
          <div className="flex items-center mt-5">
            <p className="w-32 text-sm text-gray-700">Status </p>
            <Radio handleChange={handleRadioChange} value={isActive} />
          </div>
        </div>
        <div className="flex items-center gap-4 mt-5">
          <Button
            title={"Reset"}
            icon={<RxReset />}
            className={"bg-orange-400 hover:bg-orange-300 duration-150"}
          />
          <Button
            title={"Save"}
            icon={<FaSave />}
            className={"bg-blue-500 hover:bg-blue-400 duration-150"}
          />
        </div>
      </section>
    </PageWrapper>
  );
};

export default AddDesignation;
