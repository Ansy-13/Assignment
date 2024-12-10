import React from 'react'

function Page() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100 p-6 gap-y-6 sm:gap-x-2">
    {/* Left Side: General Information */}
    <div className="flex-1 sm:mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center sm:text-left">
        General Information
      </h2>
      <div className="space-y-4 max-w-md mx-auto sm:mx-0">
        <div>
          <h3 className="font-semibold text-gray-700">What is the return policy?</h3>
          <p className="text-gray-600">
            Our return policy allows returns within 30 days of purchase. The item must be unused and in its original packaging.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700">How can I track my order?</h3>
          <p className="text-gray-600">
            You can track your order using the tracking number provided in your email after the order is shipped.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700">Do you offer international shipping?</h3>
          <p className="text-gray-600">
            Yes, we ship internationally. Shipping charges and delivery time may vary based on your location.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700">What payment methods are accepted?</h3>
          <p className="text-gray-600">
            We accept credit cards, debit cards, PayPal, and other major online payment methods.
          </p>
        </div>
      </div>
    </div>
  
    {/* Right Side: Ask Me a Question Card */}
    <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 max-w-sm w-full sm:mt-10">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Ask Me a Question</h2>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full bg-gray-100 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full bg-gray-100 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        placeholder="Type your message here..."
        className="w-full bg-gray-100 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={4}
      ></textarea>
      <button
        className="w-full bg-pink-500 text-white rounded-md p-3 hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </div>
  </div>
  
  

  )
}

export default Page