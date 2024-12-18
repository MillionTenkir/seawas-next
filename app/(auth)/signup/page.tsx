import PhoneNumberInput from "@/components/PhoneNumberInput";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
          <div className="">
            <div className="flex flex-col items-center">
              <img src="/seawas-logo.png" alt="logoSignup" className="w-3/4" />
              <img
                src="/SigninImage.png"
                alt="signup handhurra"
                className="w-3/4"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:items-start px-8">
            <h1 className="uppercase font-work-sans font-bold text-gray-800 sm:text-[36px] sm:leading-[64px] text-[10px] leading-[46px]">
              Sign Up
            </h1>
            <label className="text-gray-700 text-lg">Name</label>
            <br />
            <input
              type="text"
              className="border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-1/2
            "
              placeholder="demo@gmail.com"
            />
            <label className="text-gray-700 text-lg mt-5">
              Kidprenur or Sponsor
            </label>
            <br />
            <input
              type="text"
              className="border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-1/2
            "
              placeholder="Sponsor"
            />
            <label className="text-gray-700 text-lg mt-5">Email</label>
            <br />
            <PhoneNumberInput />
            <label className="text-gray-700 text-lg mt-5">Password</label>
            <br />
            <input
              type="password"
              className="border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-1/2
            "
              placeholder="**********"
            />
            <label className="text-gray-700 text-lg mt-5">
              Confirm Password
            </label>
            <br />
            <input
              type="password"
              className="border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-1/2
            "
              placeholder="**********"
            />
            <button
              // onClick={loginHandler}
              type="button"
              className="bg-blue-700 shadow-2xl shadow-blue-600 w-2/3 md:w-1/2 h-12  text-white text-[15px] font-normal py-2 px-6 rounded-lg hover:bg-blue-950 transition duration-300 mt-5"
            >
              Sign Up
            </button>
            <span className="text-gray-700 mt-2">
              Already Have an account?{" "}
              <Link href="/signin" className="text-blue-500">
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
