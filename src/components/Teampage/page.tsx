import React from "react";

const TeamPage = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-xl font-bold">Bandage</div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Product
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Pricing
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </nav>
        <div className="space-x-4">
          <button className="text-gray-700 hover:text-blue-500">Login</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Become a member
          </button>
        </div>
      </header>

      {/* Banner Section */}
      <section className="text-center py-16 bg-gray-50">
        <h1 className="text-4xl font-semibold mb-4">Innovation tailored for you</h1>
        <p className="text-gray-500">Home / Team</p>
      </section>

      {/* Image Section (With Adjusted Gap and Proportions) */}
      <section className="grid grid-cols-2 gap-4 m-6">
        {/* Large Image */}
        <div className="flex justify-center items-center">
          <img
            src="images/img44.png"
            alt="Large"
            className="w-full h-[530px] max-h-[520px] object-container"
          />
        </div>

        {/* Four Small Images */}
        <div className="grid grid-rows-2 grid-cols-2 gap-4">
          <img
            src="images/img45.png"
            alt="Small 1"
            className="w-full h-[250px] object-cover"
          />
          <img
            src="images/img46.png"
            alt="Small 2"
            className="w-full h-[250px] object-cover"
          />
          <img
            src="images/img47.png"
            alt="Small 3"
            className="w-full h-[250px] object-cover"
          />
          <img
            src="images/img48.png"
            alt="Small 4"
            className="w-full h-[250px] object-cover"
          />
        </div>
      </section>

      {/* Meet Our Team Section (Square Photos + Icons) */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-3 gap-6 px-8">
          {/* Team Member Card */}
          {Array.from({ length: 9 }).map((_, index) => (
            <div className="text-center" key={index}>
              <img
                src={`images/img5${index + 1}.png`}
                alt={`Team Member ${index + 1}`}
                className="w-48 h-48 mx-auto object-cover border-2 border-gray-200"
              />
              <h3 className="mt-4 text-xl font-semibold">Username</h3>
              <p className="text-gray-500">Profession</p>
              {/* Social Icons */}
              <div className="flex justify-center space-x-6 mt-3">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 text-xl"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 text-xl"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 text-xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
