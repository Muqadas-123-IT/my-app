import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartShopping,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Brands from "../../components/Brands/page";
import Navbar2 from "@/components/Navbar2/page";

const ProductPage = () => {
  return (

  
    <div className="bg-gray-100 min-h-screen">
       <Navbar2/>
      {/* Navbar */}
      {/* <nav className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left Side Links */}
          {/* <div className="space-x-6">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <a href="#" className="hover:text-blue-600">
              Shop
            </a>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
            <a href="#" className="hover:text-blue-600">
              Blog
            </a>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
            <a href="#" className="hover:text-blue-600">
              Pages
            </a>
          </div>
          {/* Right Side Icons */}
          {/* <div className="flex space-x-6 items-center">
            <a href="#" className="hover:text-blue-600">
              Login
            </a>
            <a href="#" className="hover:text-blue-600">
              Register
            </a>
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-700 text-lg hover:text-blue-600 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-gray-700 text-lg hover:text-blue-600 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faHeart}
              className="text-red-500 text-lg hover:scale-110 cursor-pointer"
            />
          </div>
        </div>
      </nav> */}
      {/* Product Section */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg mt-6">
        <div className="flex flex-col lg:flex-row">
          {/* Product Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/img29.png"
              alt="Yellow Sofa"
              width={500}
              height={500}
              className="rounded-l-lg object-contain"
            />
          </div>
          {/* Product Details */}
          <div className="w-full lg:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-2">Yellow Sofa</h2>
            <p className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐ 10 Reviews</p>
            <p className="text-3xl font-semibold my-4">$1,139.33</p>
            <p className="text-green-600 font-medium">Availability: In Stock</p>
            <p className="my-4 text-gray-700">
              This is a high-quality sofa with a modern design, perfect for any
              living space.
            </p>
            {/* Color Options */}
            <div className="flex gap-2 my-4">
              <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
              <div className="w-6 h-6 rounded-full bg-blue-400"></div>
              <div className="w-6 h-6 rounded-full bg-green-400"></div>
              <div className="w-6 h-6 rounded-full bg-black"></div>
            </div>
            {/* Buttons and Icons */}
            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Select Options
              </button>
              <FontAwesomeIcon
  icon={faCartShopping}
  style={{ fontSize: "32px", width: "24px", height: "24px" }}
  className="text-gray-700 cursor-pointer"
/>

<FontAwesomeIcon
  icon={faHeart}
  style={{ fontSize: "32px", width: "24px", height: "24px", color: "red" }}
  className="text-red-500 cursor-pointer"
/>




            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-center items-center space-x-4 mt-5">
  <p className="text-sm text-gray-500">Description</p>
  <p className="text-sm text-gray-500">Additional Information</p>
  <p className="text-sm text-gray-500">Reviews (0)</p>
</div>
    


<div className="p-8">
<hr className="border-t-2 border-gray-400 my-4" />
      <div className="grid grid-cols-3 gap-0 items-start">
        {/* Left Side Image Section */}
        <div className="col-span-1 flex items-start ml-60">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img
              src="images/img30.png"
              alt="Product"
              className="w-[250px] h-[400px] object-container m-0 p-0"
            />
          </div>
        </div>

        {/* Middle Text Section */}
        <div className="col-span-2 grid grid-cols-2 gap-3 ml-5">
          <div>
            <h1 className="text-lg font-bold mb-4">the quick fox jumps over</h1>
            <p className="text-gray-600 mb-4 mt-3">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-gray-600 mb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>

          {/* Right Links Section */}
          <div>
            <h1 className="text-lg font-bold mb-4">the quick fox jumps over</h1>
            <ul className="text-gray-600 space-y-2">
              <li>&gt; the quick fox jumps over the lazy dog</li>
              <li>&gt; the quick fox jumps over the lazy dog</li>
              <li>&gt; the quick fox jumps over the lazy dog</li>
              <li>&gt; the quick fox jumps over the lazy dog</li>
            </ul>
            <h1 className="text-lg font-bold mt-6">the quick fox jumps over</h1>
            <ul className="text-gray-600 space-y-2">
              <li>&gt; the quick fox jumps over the lazy dog</li>
              <li>&gt; the quick fox jumps over the lazy dog</li>
              <li>&gt; the quick fox jumps over the lazy dog</li>
              <li>&gt; the quick fox jumps over the lazy dog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>





      {/* Bestseller Section */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg mt-20 mb-20">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">BESTSELLER PRODUCTS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "img32.png",
              "img33.png",
              "img34.png",
              "img35.png",
              "img36.png",
              "img38.png",
              "img39.png",
              "img36.png",
             

            ].map((img, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md"
              >
                {/* Product Image */}
                <div className="aspect-square w-full relative">
                  <Image
                    src={`/images/${img}`}
                    alt={`Product ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
                {/* Product Text */}
                <p className="mt-2 text-blue-600 font-semibold text-center">
                  Graphic Design
                </p>
                <p className="text-gray-600 text-sm text-center">
                  English Department
                </p>
                {/* Social Media Icons */}
                <div className="flex gap-3 mt-2">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-blue-600 text-lg hover:scale-110 transition-transform"
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-pink-500 text-lg hover:scale-110 transition-transform"
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-blue-400 text-lg hover:scale-110 transition-transform"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
    
      </div>
      <div>  <Brands/></div>
      </div>
      );
    
}

export default ProductPage;
