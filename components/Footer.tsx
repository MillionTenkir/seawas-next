import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 my-10 font-work-sans font-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 ml-10">
          <div className="text-left md:text-center">
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  Donors & Sponsors
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  Membership
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  Kidpreneur Work
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  Progress
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  Mentor matching
                </a>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="text-left md:text-center">
            <h4 className="font-bold mb-4">What We Do</h4>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  Donors & Sponsors management
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  Membership facilitation
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  Tracking Kidpreneurs' work progress
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  Mentor and Sponsor matching
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-left md:text-center">
            <h4 className="font-bold mb-4">LEGAL</h4>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  General Info
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  Terms of service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="text-left md:text-center">
            <h4 className="font-bold mb-4">TALK TO US</h4>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  Linkedin
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline text-gray-800">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/*  */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
