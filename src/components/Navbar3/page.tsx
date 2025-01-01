// Navbar component with Tailwind CSS
export default function Navbar3 () {
    return (
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        {/* Logo */}
        <div className="text-lg font-bold text-gray-800">Bandage</div>
  
        {/* Navigation Links */}
        <ul className="hidden space-x-8 text-sm font-medium text-gray-600 md:flex">
          <li className="hover:text-gray-900">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-gray-900">
            <a href="/Products">Product</a>
          </li>
          <li className="hover:text-gray-900">
            <a href="/PricingPage">Pricing</a>
          </li>
          <li className="hover:text-gray-900">
            <a href="/Contactus">Contact</a>
          </li>
        </ul>
  
        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-500 hover:underline"
          >
            Login
          </a>
          <a
            href="/Pricing"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Become a member →
          </a>
        </div>
      </nav>
    );
  }
  