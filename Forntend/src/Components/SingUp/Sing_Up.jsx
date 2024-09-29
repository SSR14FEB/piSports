import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { contactInfo } from "../../cardComponets/ReduxComponents/slice";
function Sing_Up() {
  const [email, setEmail]=useState('');
  const [mobile, setMobile]=useState('');
  const dispatch=useDispatch()
  const fire =()=>{
    dispatch(contactInfo({
      Mobile: mobile,
      Email: email
    }));

}
console.log("data",email,mobile)
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
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
            <label className="block text-sm font-medium text-gray-700">Mobile</label>
            <input
              type="text"
               className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-md hover:ring-2 hover:ring-orange-500 hover:outline-none"
              placeholder="Enter your Mobile Number"
              onChange={(e)=>{
                
                  setMobile(e.target.value)
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
               className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-md hover:ring-2 hover:ring-orange-500 hover:outline-none"
              placeholder="Enter your email"
              onChange={(e)=>{
             
                  setEmail(e.target.value)
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
               className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-md hover:ring-2 hover:ring-orange-500 hover:outline-none"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Confirem Password
            </label>
            <input
              type="password"
               className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-md hover:ring-2 hover:ring-orange-500 hover:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <Link to="/Registraton">
          
          <button
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
    </div>
  );
}

export default Sing_Up;
