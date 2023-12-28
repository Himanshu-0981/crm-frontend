import React, { useState } from "react";
import { Button, Input, PageHeader, PageWrapper } from "../../../components";
import { IoIosArrowBack } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import Radio from "../../../components/Radio";
import { useNavigate } from "react-router-dom";

const AddLegalUser = () => {
  const [isActive, setIsActive] = useState(false);
  const handleRadioChange = (value) => setIsActive(value);

  const navigate = useNavigate();
  const goBack = () => navigate("/legal-users");
  return (
    <PageWrapper>
      <PageHeader
        title={"Manage Users"}
        slugTitle1={"Users"}
        slugTitle2={"add  users"}
        buttonTitle={"Back To  User List"}
        buttonIcon={<IoIosArrowBack />}
        handleButtonClick={goBack}
      />
      <section className="font-open-sans  bg-white mt-10 px-5 py-10 shadow-md rounded-md">
        <h1 className="text-lg font-montserrat text-blue-700">User Info</h1>
        <div className="w-full bg-blue-700 h-[1px] mt-2 mb-5"></div>

        <div>
          <div className="flex items-center mt-5">
            <p className="w-32 text-sm text-gray-700">Full Name </p>
            <Input placeholder={"Enter Full Name"} type={"text"} />
          </div>
          <div className="flex items-center mt-5">
            <p className="w-32 text-sm text-gray-700">Email </p>
            <Input placeholder={"Enter Email"} type={"text"} />
          </div>
          <div className="flex items-center mt-5">
            <p className="w-32 text-sm text-gray-700">Mobile </p>
            <Input placeholder={"Enter Mobile Number"} type={"text"} />
          </div>
          <div className="flex items-center mt-5">
            <p className="w-32 text-sm text-gray-700">Branch </p>
            <Input placeholder={"Enter Branch Name"} type={"text"} />
          </div>
          <div className="flex items-center mt-5">
            <p className="w-32 text-sm text-gray-700">Designation </p>
            <Input placeholder={"Enter Designation"} type={"text"} />
          </div>
          <div className="flex items-center mt-5">
            <p className="w-32 text-sm text-gray-700">Password </p>
            <Input placeholder={"Enter Password"} type={"password"} />
          </div>
          <div className="flex items-center mt-5">
            <p className="w-32 text-sm text-gray-700">Confirm Password </p>
            <Input placeholder={"Enter Confirm Password"} type={"password"} />
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

export default AddLegalUser;
