import React from 'react'
import { Link } from 'react-router-dom'
function Sing_In() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center login-background">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        
        <h2 className="text-2xl font-bold text-center text-blue-600"> <Link to="/*"> piSports</Link></h2>
        {/* <p className=" mt-6 text-[16px] text-black  text-center "> Login to continue</p> */}
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Email</label>
            <input
              type="email"
              className="bg-gray-200 text-black w-full px-4 py-2 mt-2 border rounded-md hovers:ring-2 hovers:ring-orange-500 hovers:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Password</label>
            <input
              type="password"
              className=" bg-gray-200 text-black  w-full px-4 py-2 mt-2 border rounded-md hovers:ring-2 hovers:ring-orange-500 hovers:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 font-bold text-white bg-orange-600 rounded-md hover:bg-orange-700">
            Log In
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account? <Link to="/SingUp" className="text-blue-600">Sign up here</Link>
        </p>
      </div>
    </div>
  )
}

export default Sing_In

  