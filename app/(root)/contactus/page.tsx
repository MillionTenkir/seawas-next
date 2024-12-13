import { Facebook, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <section className="px-24">
        <div>
          <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[36px] sm:leading-[64px] text-[10px] leading-[46px] mt-5 mb-2 px-20 text-center">
            Contact Us.
          </h1>
          <h1 className="font-medium text-[20px] text-gray-800 break-words text-center">
            Any question or feedbacks? Just write us a message!
          </h1>
        </div>
        <div className="divider"></div>
        <div className="flex flex-wrap gap-10 md:justify-between font-work-sans px-10">
          <div className="w-full md:w-[calc(50%-20px)] bg-gradient-to-b from-blue-900 to-blue-500 rounded-3xl">
            <h1 className="text-3xl text-white ml-10 mt-10">
              Contact Information
            </h1>
            <h1 className="text-gray-300 ml-10 mt-3">
              Say something for any inquiries
            </h1>
            <div className="mt-24 flex flex-row items-center">
              <Phone className="text-white ml-10 mr-5 text-2xl" />
              <h1 className="text-white m-5">+251910101010</h1>
            </div>
            <div className="mt-3 flex flex-row items-center">
              <Mail className="text-white ml-10 mr-5 text-2xl" />
              <h1 className="text-white m-5">demo@gmail.com</h1>
            </div>
            <div className="mt-48 flex flex-row items-center ml-6">
              <div className="flex flex-1 p-4 sm:justify-center lg:justify-start items-center">
                <Facebook className="m-2 text-white size-7" />
                <Linkedin className="m-2 text-white size-7" />
                <Twitter className="m-2 text-white size-7" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[calc(50%-20px)] shadow-lg shadow-gray-300 hover:shadow-lg hover:shadow-blue-400 rounded-3xl ">
            <form>
              <div className="grid grid-cols-2 mt-14  ml-10">
                <div className="mt-10">
                  <label className="text-gray-500">First Name</label>
                  <br />
                  <input
                    type="text"
                    className="border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-4"
                    placeholder="Abebe"
                  />
                </div>
                <div className="mt-10">
                  <label className="text-gray-500">Last Name</label>
                  <br />
                  <input
                    type="text"
                    className="border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-4"
                    placeholder="Kebede"
                  />
                </div>
                <div className="mt-10">
                  <label className="text-gray-500">Email</label>
                  <br />
                  <input
                    type="text"
                    className="border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-4"
                    placeholder="demo@gmail.com"
                  />
                </div>
                <div className="mt-10">
                  <label className="text-gray-500">Phone Number</label>
                  <br />
                  <input
                    type="text"
                    className="border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-4"
                    placeholder="+251910101010"
                  />
                </div>
              </div>
              <div className="ml-10 mt-10">
                <h1 className="text-gray-600">Select Subject?</h1>
                <div className="flex flex-row justify-evenly mt-5">
                  <label className="inline-flex items-center space-x-2">
                    <input
                      type="radio"
                      name="option"
                      defaultChecked
                      className="form-radio text-blue-600 h-5 w-5 border-gray-300"
                    />
                    <span className="text-gray-700">General Inquiry</span>
                  </label>
                  <label className="inline-flex items-center space-x-2">
                    <input
                      type="radio"
                      disabled
                      name="option"
                      className="form-radio text-blue-600 h-5 w-5 border-gray-300"
                    />
                    <span className="text-gray-700">General Inquiry</span>
                  </label>
                  <label className="inline-flex items-center space-x-2">
                    <input
                      type="radio"
                      disabled
                      name="option"
                      className="form-radio text-blue-600 h-5 w-5 border-gray-300"
                    />
                    <span className="text-gray-700">General Inquiry</span>
                  </label>
                  <label className="inline-flex items-center space-x-2">
                    <input
                      type="radio"
                      disabled
                      name="option"
                      className="form-radio text-blue-600 h-5 w-5 border-gray-300"
                    />
                    <span className="text-gray-700">General Inquiry</span>
                  </label>
                </div>
              </div>
              <div className="mt-10 ml-10">
                <label className="text-gray-500">Message</label>
                <br />
                <textarea
                  placeholder="Write your message"
                  className="border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-4 w-[90%]"
                />
              </div>
              <div className="w-full flex justify-center px-4">
                <button className="bg-blue-700 w-1/2 h-14 mt-5 text-white font-semibold rounded-lg hover:bg-blue-950 transition duration-300 mb-5">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="divider"></div>
    </>
  );
};

export default page;
