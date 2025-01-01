import React from "react";

const ContactUs2 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide">Visit Our Office</p>
        <h1 className="mt-2 text-4xl font-extrabold text-gray-900">We help small businesses</h1>
        <h1 className="text-4xl font-extrabold text-gray-900">with big ideas</h1>
      </div>

      {/* Icons Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Phone Section */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-6 rounded-full">
              <img
                src="Images/phone.png"
                alt="Phone"
                className="h-[55px] w-[60px]"
              />
            </div>
          </div>
          <p className="text-gray-700">georgia.young@example.com</p>
          <p className="text-gray-700 leading-loose">georgia.young@ple.com</p>
          <h5 className="leading-loose">Get Support</h5>
          <button className="mt-4 px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-xl hover:bg-blue-100">
            Submit Request
          </button>
        </div>

        {/* Location Section */}
        <div className="text-center bg-gray-800 text-white p-8 rounded-lg">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-700 p-6 rounded-full">
              <img
                src="Images/location.png"
                alt="Location"
                className="h-[55px] w-[50px]"
              />
            </div>
          </div>
          <p>georgia.young@example.com</p>
          <p className="leading-loose">georgia.young@ple.com</p>
          <h5 className="leading-loose">Get Support</h5>
          <button className="mt-4 px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-xl hover:bg-blue-100">
            Submit Request
          </button>
        </div>

        {/* Email Section */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-6 rounded-full">
              <img
                src="Images/email.png"
                alt="Email"
                className="h-[50px] w-[72px]"
              />
            </div>
          </div>
          <p className="text-gray-700">georgia.young@example.com</p>
          <p className="text-gray-700 leading-loose">georgia.young@ple.com</p>
          <h5 className="leading-loose">Get Support</h5>
          <button className="mt-4 px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-xl hover:bg-blue-100">
            Submit Request
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-center ">
        <div className="flex justify-center mb-4">
          <img
            src="Images/arrow.png"
            alt="Arrow"
            className="w-[80px] h-[50px]  "
          />
        </div>
        <p className="text-gray-700 text-lg font-semibold">We Can't Wait To Meet You</p>
        <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Let's Talk</h2>
        <button className="mt-4 px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Try it free now
        </button>
      </div>
    </div>
  );
};

export default ContactUs2;
