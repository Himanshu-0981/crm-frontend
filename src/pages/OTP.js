import { MdOutlineSecurity } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { bg } from "../assets/images";
import { logo } from "../assets/images";
import { Button, Form } from "../components";

function OTP() {
  const navigate = useNavigate();
  return (
    <>
      <main className="font-open-sans">
        <img src={bg} alt="bg" className="w-full h-screen relative" />
        <section className=" bg-white w-full xs:w-[26rem] h-[32rem] absolute top-1/2 left-1/2 px-10 py-5 transform -translate-x-1/2 -translate-y-1/2">
          <div className="mt-5 w-full bg-color_blue flex justify-center flex-col items-center">
            <img src={logo} alt="logo" className=" w-60 p-3" />
          </div>
          <div className=" mt-5 flex justify-center items-center gap-5 text-sm text-gray-500">
            <p className=" border-[0.1px] border-gray-300 w-24"></p>
            <p className="w-full xs:w-fit">Verify with OTP</p>
            <p className=" border-[0.1px] border-gray-300 w-24"></p>
          </div>

          <div className="mt-10 text-gray-600 flex justify-center text-center">
            <h1>OTP has been send to your given email address </h1>
          </div>

          <form className="mt-7">
            <Form
              type="text"
              placeholder="Enter Your OTP"
              icon={<MdOutlineSecurity />}
              className="mt-2"
            />

            <Button
              title="Verify"
              className={
                "w-full p-3 rounded-md  bg-color_blue text-white text-xl mt-3 xs:mt-10 hover:bg-blue-700 duration-150 "
              }
            />
          </form>
        </section>
      </main>
    </>
  );
}

export default OTP;
