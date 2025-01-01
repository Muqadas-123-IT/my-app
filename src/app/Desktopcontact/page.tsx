import Image from "next/image";

const Desktopcontact = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold">Bandage</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Product</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Pricing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
        <div className="space-x-4">
          <button className="text-gray-600 hover:text-blue-500">Login</button>
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Become a member</button>
        </div>
      </header>

      {/* Contact Section */}
      <section className="text-center py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">Get in touch today!</h2>
        <p className="text-gray-600 mb-6">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex flex-col items-center space-y-2">
          <p>Phone: +451 215 215</p>
          <p>Fax: +451 215 215</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">Facebook</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Instagram</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">LinkedIn</a>
          </div>
        </div>
        <div className="mt-6">
          <Image
            src="/cap2.png"
            alt="Family shopping"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
      </section>

      {/* Office Section */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-center text-2xl font-bold mb-6">We help small businesses with big ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="text-center">
            <div className="p-4 bg-white shadow-md rounded">
              <h3 className="font-bold">Get Support</h3>
              <p className="text-gray-600">georgia.yoursupport@example.com</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit Request</button>
            </div>
          </div>
          <div className="text-center">
            <div className="p-4 bg-white shadow-md rounded">
              <h3 className="font-bold">Visit Us</h3>
              <p className="text-gray-600">Our Location</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Get Directions</button>
            </div>
          </div>
          <div className="text-center">
            <div className="p-4 bg-white shadow-md rounded">
              <h3 className="font-bold">Email Us</h3>
              <p className="text-gray-600">contact@example.com</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send Email</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-6 text-center">
        <p>Let’s Talk: Try it free now!</p>
      </footer>
    </div>
  );
};

export default Desktopcontact;