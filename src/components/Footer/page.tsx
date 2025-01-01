// const Footer = () => {
//     return (
//       <footer className="bg-gray-100 py-10">
//         <div className="container mx-auto px-4">
//           {/* Top Section */}
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">Bandage</h1>
//             </div>
//             <div className="flex space-x-4 mt-4 md:mt-0">
//               <a href="#" className="text-gray-600 hover:text-gray-900">
//                 <i className="fab fa-facebook"></i>
//               </a>
//               <a href="#" className="text-gray-600 hover:text-gray-900">
//                 <i className="fab fa-instagram"></i>
//               </a>
//               <a href="#" className="text-gray-600 hover:text-gray-900">
//                 <i className="fab fa-twitter"></i>
//               </a>
//             </div>
//           </div>

import { Facebook, Instagram, Twitter } from "lucide-react";

  
//           {/* Middle Section */}
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-8 text-gray-600">
//             {/* Column 1 */}
//             <div>
//               <h3 className="font-bold text-gray-800">Company Info</h3>
//               <ul className="mt-4 space-y-2">
//                 <li><a href="#" className="hover:text-gray-900">About Us</a></li>
//                 <li><a href="#" className="hover:text-gray-900">Carrier</a></li>
//                 <li><a href="#" className="hover:text-gray-900">We are hiring</a></li>
//                 <li><a href="#" className="hover:text-gray-900">Blog</a></li>
//               </ul>
//             </div>
//             {/* Column 2 */}
//             <div>
//               <h3 className="font-bold text-gray-800">Legal</h3>
//               <ul className="mt-4 space-y-2">
//                 <li><a href="#" className="hover:text-gray-900">About Us</a></li>
//                 <li><a href="#" className="hover:text-gray-900">Carrier</a></li>
//                 <li><a href="#" className="hover:text-gray-900">We are hiring</a></li>
//                 <li><a href="#" className="hover:text-gray-900">Blog</a></li>
//               </ul>
//             </div>
//             {/* Column 3 */}
//             <div>
//               <h3 className="font-bold text-gray-800">Features</h3>
//               <ul className="mt-4 space-y-2">
//                 <li><a href="#" className="hover:text-gray-900">Business Marketing</a></li>
//                 <li><a href="#" className="hover:text-gray-900">User Analytics</a></li>
//                 <li><a href="#" className="hover:text-gray-900">Live Chat</a></li>
//                 <li><a href="#" className="hover:text-gray-900">Unlimited Support</a></li>
//               </ul>
//             </div>
//             {/* Column 4 */}
//             <div>
//               <h3 className="font-bold text-gray-800">Resources</h3>
//               <ul className="mt-4 space-y-2">
//                 <li><a href="#" className="hover:text-gray-900">iOS & Android</a></li>
//                 <li><a href="#" className="hover:text-gray-900">Watch a Demo</a></li>
//                 <li><a href="#" className="hover:text-gray-900">Customers</a></li>
//                 <li><a href="#" className="hover:text-gray-900">API</a></li>
//               </ul>
//             </div>
//             {/* Column 5 */}
//             <div>
//               <h3 className="font-bold text-gray-800">Get in Touch</h3>
//               <div className="mt-4">
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <button className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
//                   Subscribe
//                 </button>
//               </div>
//               <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor amit.</p>
//             </div>
//           </div>
  
//           {/* Bottom Section */}
//           <div className="mt-8 text-center text-gray-500 text-sm">
//             Made With Love By Finland All Rights Reserved
//           </div>
//         </div>
//       </footer>
//     );
//   };
  
//   export default Footer;
const Footer = () => {
    return (
      <footer className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Brand Name */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Bandage</h1>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook/> {/* Facebook Icon */}
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram/> {/* Instagram Icon */}
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
               <Twitter/> {/* Twitter Icon */}
              </a>
            </div>
          </div>
  
          {/* Middle Section */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-8 text-gray-600">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold text-gray-800">Company Info</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Carrier</a></li>
                <li><a href="#" className="hover:text-gray-900">We are hiring</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-gray-800">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Carrier</a></li>
                <li><a href="#" className="hover:text-gray-900">We are hiring</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="font-bold text-gray-800">Features</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-gray-900">Business Marketing</a></li>
                <li><a href="#" className="hover:text-gray-900">User Analytics</a></li>
                <li><a href="#" className="hover:text-gray-900">Live Chat</a></li>
                <li><a href="#" className="hover:text-gray-900">Unlimited Support</a></li>
              </ul>
            </div>
            {/* Column 4 */}
            <div>
              <h3 className="font-bold text-gray-800">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-gray-900">iOS & Android</a></li>
                <li><a href="#" className="hover:text-gray-900">Watch a Demo</a></li>
                <li><a href="#" className="hover:text-gray-900">Customers</a></li>
                <li><a href="#" className="hover:text-gray-900">API</a></li>
              </ul>
            </div>
            {/* Column 5 */}
            <div>
              <h3 className="font-bold text-gray-800">Get in Touch</h3>
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor amit.</p>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-10">
            <p className="text-center text-sm text-gray-500">
              Made With Love By Finland All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  