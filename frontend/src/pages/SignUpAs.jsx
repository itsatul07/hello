import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/react.svg"; // Replace with your illustration

const SignupAs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 font-quicksand">
      {/* Signup Card */}
      <div className="flex flex-col lg:flex-row items-center bg-white shadow-2xl rounded-3xl w-[90%] sm:w-[80%] lg:w-[65%] max-w-[900px] overflow-hidden">
        {/* Left Image Section */}
        <div className="hidden lg:flex w-1/2 h-full">
          <img
            src={image}
            alt="Signup Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-green-600 mb-6">
            Register As
          </h1>

          <div className="flex flex-col w-full items-center space-y-3">
            {[
              "Admin",
              "Community Member",
              "Resident",
              "Guest",
              "Shopkeeper",
              "Security",
            ].map((role) => (
              <Link
                key={role}
                to="/signup"
                state={{ role }}
                className="w-full text-center border border-green-300 text-green-600 hover:bg-green-100 py-2 px-4 rounded-lg transition duration-200 shadow-sm hover:shadow-md"
              >
                {`Register as ${role}`}
              </Link>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Already registered?{" "}
            <Link to="/" className="text-green-600 underline hover:text-green-800">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupAs;
