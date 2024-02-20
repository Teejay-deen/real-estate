import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className='className="p-7 max-w-lg mx-auto '>
      <h1 className="text-3xl text-center font-semibold my-7">
        Forgot Password
      </h1>
      <span className=" my-7 font-semibold mt-2 text-center">
        To initiate the password reset process, kindly input the email address
        associated with your FHandP account.
      </span>

      <form action="" className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Email/Username"
          id="fName"
          className="border p-3 rounded-lg gap-3 mt-5"
        />

        <Link
          to="/Home"
          className="bg-slate-700 p-3 mt-1 text-center text-white rounded-lg hover:opacity-90"
        >
          <button>CONTINUE</button>
        </Link>

        <Link to="/sign-in" className="text-blue-500 text-center cursor-pointer">
          <span >
            Return to Sign in
          </span>
        </Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
