import React, { useState, ref } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { contactInfo } from "../../cardComponets/ReduxComponents/slice";
import EmailValidator from "../Validator/EmailValidator";
import MobileNumberValidator from "../Validator/NumberValidator";

function Sing_Up() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confiremPass, setConfirempass] = useState("");

  console.log(password);
  console.log(confiremPass);
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const fire = (e) => {
    e.preventDefault();

    // firening Redux tool kit dispatcher

    dispatch(
      contactInfo({
        Mobile: mobile,
        Email: email,
      })
    );

    // Now here is the main opration of validator
    let numberValidatior = false;
    numberValidatior = new MobileNumberValidator(mobile);
    console.log(numberValidatior);

    if (numberValidatior.isValid == true) {
      setError("");
    } else {
      setError("Invalid mobile number. Please enter a valid number.");
    }

    const emailValidator = new EmailValidator(email)
    if (emailValidator.validateEmail()) {
      setError2("");
    } else {
      setError2("Invalid email Id. Please enter a valid email Id ");
    }
  };
  console.log("data", email, mobile);
  return (
    <form className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-blue-600">
          <Link to="/*"> piSports</Link>
        </h2>
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-md hover:ring-2 hover:ring-orange-500 hover:outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Mobile
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-md hover:ring-2 hover:ring-orange-500 hover:outline-none"
              placeholder="Enter your Mobile Number"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </div>

          {error && <p className="text-red-600 mb-4">{error}</p>}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-md hover:ring-2 hover:ring-orange-500 hover:outline-none"
              placeholder="Enter your email"
              onChange={(e) => {
                 setEmail(e.target.value);
              }}
            />
          </div>
          {error2 && <p className="text-red-600 mb-4">{error2}</p>}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-md hover:ring-2 hover:ring-orange-500 hover:outline-none"
              placeholder="Enter your password"
              onChange={(e) => {
                const password = e.target.value;
                if (password.length >= 8) {
                  setPassword(password);
                }
              }}
            />
            {password.length < 8 ? (
              <p className="text-red-700">
                Password length must have more than 7 char
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Confirem Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-md hover:ring-2 hover:ring-orange-500 hover:outline-none"
              placeholder="Enter your password"
              onChange={(e) => setConfirempass(e.target.value)}
            />
            {password !== confiremPass ? (
              <p className="text-red-700">Password Dosen't Match </p>
            ) : (
              ""
            )}
          </div>
          <Link to="/Registraton">
            <button
              // disabled={
              //   mobile.length != 10 || email.length < 7 || password.length < 8
              //     ? true
              //     : false
              // }
              onClick={fire}
              type="submit"
              className="w-full px-4 py-2 mt-4 font-semibold text-white bg-orange-600 rounded-md hover:bg-orange-700"
            >
              Sign Up
            </button>
          </Link>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/SingIn" className="text-indigo-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Sing_Up;
