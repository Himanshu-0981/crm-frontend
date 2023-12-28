import React, { useState } from "react";
import { Button, Input, PageHeader, PageWrapper } from "../../../components";
import { IoIosArrowBack } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import Radio from "../../../components/Radio";
import { useNavigate } from "react-router-dom";

const AddCountry = () => {
  const [isActive, setIsActive] = useState(false);
  const handleRadioChange = (value) => setIsActive(value);

  const navigate = useNavigate();
  const goBack = () => navigate("/country");
  return (
    <PageWrapper>
      <PageHeader
        title={"Manage Country"}
        slugTitle1={"Country"}
        slugTitle2={"add country"}
        buttonTitle={"Back To Country List"}
        buttonIcon={<IoIosArrowBack />}
        handleButtonClick={goBack}
      />
      <section className="font-open-sans  bg-white mt-10 px-5 py-10 shadow-md rounded-md">
        <h1 className="text-lg font-montserrat text-blue-700">Country Info</h1>
        <div className="w-full bg-blue-700 h-[1px] mt-2 mb-5"></div>

        <div>
          <div className="flex items-center mt-5">
            <p className="w-32 text-sm text-gray-700">Country </p>
            <Input placeholder={"Enter Country Name"} type={"text"} />
          </div>
          <div className="flex items-center mt-5">
            <p className="w-32 text-sm text-gray-700">Country Code </p>
            <Input placeholder={"Enter Country Code"} type={"text"} />
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

export default AddCountry;
