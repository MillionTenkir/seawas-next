import Image from "next/image";
import Link from "next/link";
import React from "react";
import PhoneNumberInput from "@/components/PhoneNumberInput";

const page = () => {
  return (
    <>
      <section className="font-work-sans px-20">
        <div className="flex justify-end m-10">
          <Link href="/">
            <Image
              src="/seawas-logo.png"
              alt="logo on the signin"
              width={200}
              height={30}
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="">
            <div className="flex flex-col justify-center items-center">
              <img
                src="seawas-logo.png"
                alt="logo for signin"
                className="w-3/4"
              />
              <img
                src="/SigninImage.png"
                alt="signin handhuura"
                className="w-3/4"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:items-start mt-20 rounded-3xl px-10">
            <h1 className="uppercase font-work-sans font-bold text-gray-800 sm:text-[36px] sm:leading-[64px] text-[10px] leading-[46px]">
              Login
            </h1>
            <label className="text-gray-700 text-lg mt-5">Phone Number</label>
            <br />
            <PhoneNumberInput />
            <label className="text-gray-700 text-lg mt-5">Password</label>
            <br />
            <input
              type="password"
              className="border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-1/2"
              placeholder="********"
            />
            <span className="text-gray-500 mt-4">Forget Password?</span>
            <Link
              href="/admindashboard"
              //   onClick={loginHandler}
              // type="button"
              className=" bg-blue-700 shadow-2xl shadow-blue-600 w-2/3 md:w-1/2 h-12  text-white text-[15px] font-normal py-2 px-6 rounded-lg hover:bg-blue-950 transition duration-300 mt-5"
            >
              <button className="">
                <span className="text-center">Login</span>
              </button>
            </Link>
            {/* <button className="w-2/3 md:w-1/2 h-12  text-gray-800 font-semibold py-2 px-6 rounded-lg transition duration-300 mt-3">
            Continue by Facebook
          </button>
          <button className="w-2/3 md:w-1/2 h-12  text-gray-800 font-semibold py-2 px-6 rounded-lg  transition duration-300 mt-3">
            Continue by Google
          </button> */}
            <button className="w-2/3 md:w-1/2 h-12  text-gray-700 font-normal py-2 px-6 rounded-lg  transition duration-300 mt-3">
              Didn't have an account?{" "}
              <Link href="/signup" className="text-blue-500">
                Sign Up.
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
