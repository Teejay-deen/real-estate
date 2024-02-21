import React, { useState } from "react";
import { Link } from "react-router-dom";
import onBoard1 from "../assets/images/onboard1.png";
import Logo from "../assets/images/logo_white.png";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{ backgroundImage: `url(${onBoard1})`}}
      className="w-full h-full bg-no-repeat bg-cover bg-center"
    >
      <div className="flex justify-between">
        {" "}
        <img src={Logo} alt="" />
      </div>
      <div className="p-7 justify-end max-w-lg mx-auto shadow-lg bg-white rounded-lg">
        <h1 className="text-3xl text-center font-semibold my-7">Sign up</h1>
        <span className=" my-7 font-semibold mt-2 text-center">
          Fill in the information below to get started
        </span>
        <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First name"
            id="fName"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last name"
            id="lName"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            id="email"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="Password"
            placeholder="Confirm Password"
            id="cPassword"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />
          <div>
            <input type="checkbox" />
            <span className="p-2">
              I have read and agree to the{" "}
              <Link to="/privacy-policies">
                <span className="text-blue-500 cursor-pointer">
                  privacy policy{" "}
                </span>
              </Link>
              and{" "}
              <Link to="/term-of-services">
                <span className="text-blue-500 cursor-pointer">
                  terms of service
                </span>
              </Link>
            </span>
          </div>
          <button className="bg-slate-700 p-3 mt-3 text-white rounded-lg uppercase hover:opacity-90">
            Sign Up
          </button>
        </form>
        <div className="mt-3 flex gap-2">
          <p>Have an account?</p>
          <Link to="/sign-in">
            <span className="text-blue-700">Sign in </span>
          </Link>
        </div>
      </div>
      //{" "}
    </div>
  );
};

export default SignUp;
