import React, { useState } from "react";
import { Button, Input, PageHeader, PageWrapper } from "../../../components";
import { IoIosArrowBack } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import Radio from "../../../components/Radio";
import { useNavigate } from "react-router-dom";

const AddCity = () => {
  const indianStates = {
    andamanAndNicobarIslands: "Andaman and Nicobar Islands",
    andhraPradesh: "Andhra Pradesh",
    arunachalPradesh: "Arunachal Pradesh",
    assam: "Assam",
    bihar: "Bihar",
    chandigarh: "Chandigarh",
    chhattisgarh: "Chhattisgarh",
    dadraAndNagarHaveliAndDamanAndDiu:
      "Dadra and Nagar Haveli and Daman and Diu",
    delhi: "Delhi",
    goa: "Goa",
    gujarat: "Gujarat",
    haryana: "Haryana",
    himachalPradesh: "Himachal Pradesh",
    jharkhand: "Jharkhand",
    karnataka: "Karnataka",
    kerala: "Kerala",
    lakshadweep: "Lakshadweep",
    madhyaPradesh: "Madhya Pradesh",
    maharashtra: "Maharashtra",
    manipur: "Manipur",
    meghalaya: "Meghalaya",
    mizoram: "Mizoram",
    nagaland: "Nagaland",
    odisha: "Odisha",
    puducherry: "Puducherry",
    punjab: "Punjab",
    rajasthan: "Rajasthan",
    sikkim: "Sikkim",
    tamilNadu: "Tamil Nadu",
    telangana: "Telangana",
    tripura: "Tripura",
    uttarPradesh: "Uttar Pradesh",
    uttarakhand: "Uttarakhand",
    westBengal: "West Bengal",
  };
  const [selectedState, setSelectedState] = useState("");
  const [isActive, setIsActive] = useState(false);
  const handleChange = (event) => setSelectedState(event.target.value);
  const handleRadioChange = (value) => setIsActive(value);

  const navigate = useNavigate();
  const goBack = () => navigate("/city");
  return (
    <PageWrapper>
      <PageHeader
        title={"Manage City"}
        slugTitle1={"City"}
        slugTitle2={"add city"}
        buttonTitle={"Back To City List"}
        buttonIcon={<IoIosArrowBack />}
        handleButtonClick={goBack}
      />
      <section className="font-open-sans  bg-white mt-10 px-5 py-10 shadow-md rounded-md">
        <h1 className="text-lg font-montserrat text-blue-700">City Info</h1>
        <div className="w-full bg-blue-700 h-[1px] mt-2 mb-5"></div>

        <div>
          <div className="flex  items-center">
            <p className="w-32 text-sm text-gray-700">Select State</p>
            <select
              className=" w-full outline-none border-[0.2px] border-gray-400 focus:border-blue-600 rounded-md text-sm text-gray-500 p-3"
              value={selectedState}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              {Object.entries(indianStates).map(([key, value]) => (
                <option key={key} value={key} className="">
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center mt-5">
            <p className="w-32 text-sm text-gray-700">Select City </p>
            <Input placeholder={"Enter City Name"} type={"text"} />
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

export default AddCity;
