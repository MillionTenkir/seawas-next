"use client";
import React from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberInput = () => {
  return (
    <div>
      <PhoneInput
        country={"et"}
        // className="border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-1/2"
        // value={this.state.phone}
        // onChange={(phone) => this.setState({ phone })}
      />
    </div>
  );
};

export default PhoneNumberInput;
