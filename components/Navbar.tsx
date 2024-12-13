"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const currentPage = pathName.replace("/", "");
  const session = true;
  return (
    <div className="px-5 py-5 bg-white shadow-sm font-work-sans border-b border-blue-200">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={160} height={40} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session ? (
            <>
              <Link href="/">
                <p
                  className={`${
                    currentPage == ""
                      ? "text-blue-600 font-semibold"
                      : "text-gray-900"
                  } text-lg text-center font-work-sans`}
                >
                  Home
                </p>
              </Link>
              <Link href="/handhuuraas">
                <span
                  className={`${
                    currentPage == "handhuuraas"
                      ? "text-blue-600 font-semibold"
                      : "text-gray-900"
                  } text-lg text-center font-work-sans`}
                >
                  Handhuuraas
                </span>
              </Link>
              <Link href="/mentorsanddonors">
                <span
                  className={`${
                    currentPage == "mentorsanddonors"
                      ? "text-blue-600 font-semibold"
                      : "text-gray-900"
                  } text-lg text-center font-work-sans`}
                >
                  Mentors & Donors
                </span>
              </Link>
              <Link href="/newsandevents">
                <span
                  className={`${
                    currentPage == "newsandevents"
                      ? "text-blue-600 font-semibold"
                      : "text-gray-900"
                  } text-lg text-center font-work-sans`}
                >
                  News and Events
                </span>
              </Link>
              <Link href="/contactus">
                <span
                  className={`${
                    currentPage == "contactus"
                      ? "text-blue-600 font-semibold"
                      : "text-gray-900"
                  } text-lg text-center font-work-sans`}
                >
                  Contact Us
                </span>
              </Link>
              {/* <form
                action={async () => {
                  // "use server";
                  // await signOut(auth);
                  console.log("The login is pressed.");
                }} 
              >*/}
              <Link
                href="/signin"
                // onClick={handleGetStarted}
                className="bg-blue-700 shadow-2xl shadow-blue-600 h-14  text-white font-light text-lg py-2 px-6 rounded-lg hover:bg-blue-950 transition duration-300 flex items-center"
              >
                Log In
              </Link>
              {/* </form> */}
            </>
          ) : (
            <>
              <Link href="/create">
                <span>Sign out</span>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
