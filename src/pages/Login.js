import { MdAlternateEmail } from "react-icons/md";
import { MdVpnKey } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { bg } from "../assets/images";
import { logo } from "../assets/images";
import { Button, Form } from "../components";

function Login() {
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
            <p className="w-full xs:w-fit">Login with CRM</p>
            <p className=" border-[0.1px] border-gray-300 w-24"></p>
          </div>

          <form className="mt-7">
            <Form
              type="email"
              placeholder="Your CRM Email"
              icon={<MdAlternateEmail />}
              className="mt-2"
            />
            <Form
              type="password"
              placeholder="Your CRM Password"
              icon={<MdVpnKey />}
              className="mt-2"
            />

            <section className="flex flex-col xs:flex-row items-center justify-between text-sm text-gray-600 mt-3">
              <div className="flex items-center gap-1">
                <input type="checkbox" />
                <p>Remember me </p>
              </div>
              <div>
                <p className="text-color_blue">Forget Password ?</p>
              </div>
            </section>

            <Button
              title="Login"
              className={
                "w-full p-3 rounded-md  bg-color_blue text-white text-xl mt-3 xs:mt-10 hover:bg-blue-700 duration-150 "
              }
            />
            <section className="flex flex-col xs:flex-row items-center justify-between text-sm text-gray-600 mt-5 xs:mt-10">
              <div className="flex items-center gap-1">
                <p className="text-color_blue">Recover password </p>
              </div>
              <div className="flex items-center gap-1">
                <p>New to CRM?</p>
                <p
                  className="text-color_blue cursor-pointer"
                  onClick={() => navigate("/signup")}
                >
                  {" "}
                  Sign Up
                </p>
              </div>
            </section>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;
