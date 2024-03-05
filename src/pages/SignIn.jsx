import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className='className="p-7 max-w-lg mx-auto '>
      <h1 className="text-3xl text-center font-semibold my-7">Sign in</h1>
      <span className=" my-7 font-semibold mt-2 text-center">
        Fill in the information below to get started
      </span>

      <form action="" className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Email/Username"
          id="fName"
          className="border p-3 rounded-lg"
        />
        <input
          type="text"
          placeholder="Password"
          id="Password"
          className="border p-3 rounded-lg"
        />
        <Link to="/forgot-password">
        <span className="flex justify-end text-blue-500 cursor-pointer">Forgot Password</span>
        </Link>
        <Link to="/Home" className="bg-slate-700 p-3 mt-1 text-center text-white rounded-lg hover:opacity-90">
          <button>
            CONTINUE
          </button>
        </Link>
      <span className="text-center mt-3">Don't have an account? <Link to="/sign-up"><span className="text-blue-600">Sign Up</span></Link></span>
      </form>
    </div>
  );
};

export default SignIn;
