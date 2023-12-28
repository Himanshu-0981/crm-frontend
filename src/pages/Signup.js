import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiUser } from "react-icons/fi";
import { MdVpnKey } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import { bg, logo } from "../assets/images";
import { Button, Form } from "../components";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: 0,
    address: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  return (
    <main className="font-open-sans ">
      <img src={bg} alt="bg" className="w-full h-screen relative" />
      <section className=" bg-white w-full xs:w-[30rem] absolute top-1/2 left-1/2 px-10 py-2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="mt-5 w-full bg-color_blue flex justify-center flex-col items-center">
          <img src={logo} alt="logo" className=" w-60 p-3" />
        </div>
        <div className=" mt-2 flex justify-center items-center gap-5 text-sm text-gray-500">
          <p className="w-full border-[0.1px] border-gray-300 "></p>
          <p className="w-full">Signup with CRM</p>
          <p className="w-full border-[0.1px] border-gray-300 "></p>
        </div>

        <form onSubmit={(event) => event.preventDefault()}>
          <Form
            handleChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            type="text"
            placeholder="Enter Your Name"
            icon={<FiUser />}
            className="mt-1"
          />
          <Form
            handleChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            type="email"
            placeholder="Enter Email"
            icon={<MdAlternateEmail />}
            className="mt-1"
          />
          <Form
            handleChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
            type="number"
            placeholder="Enter Phone number"
            icon={<FaPhoneAlt />}
            className="mt-1"
          />
          <Form
            handleChange={(e) => {
              setFormData({ ...formData, address: e.target.value });
            }}
            type="text"
            placeholder="Enter Address"
            icon={<FaRegAddressCard />}
            className="mt-1"
          />
          <Form
            handleChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
            type="password"
            placeholder="Enter Password"
            icon={<MdVpnKey />}
            className="mt-1"
          />
          <Form
            handleChange={(e) => {
              setFormData({ ...formData, confirmPassword: e.target.value });
            }}
            type="password"
            placeholder="Enter Confirm Password"
            icon={<MdVpnKey />}
            className="mt-1"
          />

          <Button
            title="Login"
            className={
              "w-full p-3 rounded-md  bg-color_blue text-white text-xl mt-2 hover:bg-blue-700 duration-150 "
            }
          />
          <section className="flex items-center justify-center text-sm text-gray-600 mt-6">
            <div className="flex items-center  gap-1">
              <p>Already have an account?</p>
              <p
                className="text-color_blue cursor-pointer"
                onClick={() => {
                  navigate("/login");
                }}
              >
                {" "}
                Signup
              </p>
            </div>
          </section>
        </form>
      </section>
    </main>
  );
}

export default Signup;
