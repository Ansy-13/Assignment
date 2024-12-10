"use client"
import Image from 'next/image';
import React, { useState } from 'react';

export default function ContactForm() {
    const [message, setMessage] = useState("");

    // Function that will be called when the button is clicked
    const handleLogin = () => {
        console.log("Button clicked!");
        setMessage("Thank you for sending us a message!");
    }

    return(
<div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
  {/* Login Card */}
  <div className="p-8 shadow-lg border border-gray-200 bg-white rounded-lg max-w-sm w-full">
    <h1 className="text-center font-bold text-2xl text-gray-800">Login</h1>
    <p className="text-[10px] text-center">Please login using your account details below</p>

    <input
      type="email"
      placeholder="Email address"
      className="w-full bg-gray-100 rounded-md p-3 mt-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input
      type="password"
      placeholder="Password"
      className="w-full bg-gray-100 rounded-md p-3 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <p className="text-[12px] mt-2 text-right">Forget Password?</p>

    <button
      onClick={handleLogin}
      className="w-full bg-pink-500 text-white rounded-md p-3 mt-6 hover:bg-blue-600 transition-colors"
    >
      Sign in
    </button>

    <div className="mt-4 text-center">
      <p className="text-sm text-gray-600">
        Dont have an account?{" "}
        <a
          href="#"
          className="text-blue-500 hover:underline"
        >
          Create An Account
        </a>
      </p>
    </div>
  </div>

  {/* Image below the card */}
  <div className="mt-12">
    <Image
      src="/pic.png"
      alt="This is an image"
      width={400} // Adjusted size
      height={400} // Adjusted size
      className="object-contain"
    />
  </div>
</div>



      
    )
}
