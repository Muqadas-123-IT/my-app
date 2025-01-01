import React from "react";
import Brands from "../../components/Brands/page";
import Image from "next/image";
import { Facebook, Instagram , Linkedin,Twitter } from "lucide-react";
import PricingFAQ from "../PricingFAQ/page";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full bg-white shadow">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Bandage</h1>
          <nav className="flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="/Products" className="text-gray-600 hover:text-gray-900">
              Product
            </a>
            <a href="/PricingPage" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="/Contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </nav>
          <div className="flex space-x-4">
            <button className="text-blue-600 font-medium">Login</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Become a member
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="w-full">
        <div className="text-center py-16 bg-gray-50">
          <p className="text-sm text-gray-500 uppercase">Pricing</p>
          <h1 className="text-4xl font-extrabold text-gray-800 mt-2">
            Simple Pricing
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center items-center py-8">
          <div className="bg-gray-200  flex items-center rounded-full focus:ring-blue-800">
            <button className="px-6 py-3 bg-white rounded-full text-gray-800 font-semibold">
              Monthly
            </button>
            <button className="px-6 py-3 text-gray-600">Yearly</button>
          </div>
          <p className="text-sm text-blue-950 ml-4 bg-blue-400 rounded-full p-5">Save 25%</p>
        </div>

        {/* Pricing Cards */}
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-lg font-bold text-gray-800">FREE</h3>
            <p className="text-sm text-gray-600 mt-2">
              Organize across all apps by hand
            </p>
            <p className="text-4xl font-extrabold mt-6">$0</p>
            <p className="text-sm text-gray-600 mt-1">Per Month</p>
            <hr className="my-4" />
            <p className="text-sm text-green-600">Unlimited product updates</p>
          </div>

          {/* Standard Plan */}
          <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 text-center transform transition h-[400px] duration-300 hover:scale-110 hover:shadow-2xl">
            <h3 className="text-lg font-bold">STANDARD</h3>
            <p className="text-sm mt-2">
              Organize across all apps by hand
            </p>
            <p className="text-4xl font-extrabold mt-6">$9.99</p>
            <p className="text-sm mt-1">Per Month</p>
            <hr className="my-4 border-blue-400" />
            <p className="text-sm">Unlimited product updates</p>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-lg font-bold text-gray-800">PREMIUM</h3>
            <p className="text-sm text-gray-600 mt-2">
              Organize across all apps by hand
            </p>
            <p className="text-4xl font-extrabold mt-6">$19.99</p>
            <p className="text-sm text-gray-600 mt-1">Per Month</p>
            <hr className="my-4" />
            <p className="text-sm text-green-600">Unlimited product updates</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-100 py-6 text-center">
        <p className="text-gray-600">Trusted By Over 4000 Big Companies</p>
      </footer>

      <Brands/>

      
      <div className=" text-center pt-24">
<h1 className="font-bold text-[40px]">Pricing FAQs
</h1>
<p className="font-semibold text-[#737373]">Problems trying to resolve the conflict between <br />
the two major realms of Classical physics</p>
      </div>
<div className="w-full h-[535px] flex item-center justify-center mt-20">
      <div className="w-[1056px] h-[535px] grid grid-cols-1 md:grid-cols-2 ">
        <div className="w-[432px]">
          <h1 className="flex font-bold text-[18px] "><span className="mt-2 pr-3"><Image
                        src={"/images/left-arr.png"}
                        height={10}
                        width={10}
                        alt="icon"
                        className="w-[10px] h-[15px]"
                      /></span>the quick fox jumps over the lazy dog</h1>
          <p className=" text-[12px] text-[#737373]">Met minim ollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.</p>
        </div>

        <div className="w-[432px]">
        <h1 className="flex font-bold text-[18px] "><span className="mt-2 pr-3"><Image
                        src={"/images/left-arr.png"}
                        height={10}
                        width={10}
                        alt="icon"
                        className="w-[10px] h-[15px]"
                      /></span>the quick fox jumps over the lazy dog</h1>
          <p className=" text-[12px] text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.</p>
        </div>

        <div className="w-[432px]">
        <h1 className="flex font-bold text-[18px] "><span className="mt-2 pr-3"><Image
                        src={"/images/left-arr.png"}
                        height={10}
                        width={10}
                        alt="icon"
                        className="w-[10px] h-[15px]"
                      /></span>the quick fox jumps over the lazy dog</h1>
          <p className=" text-[12px] text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.</p>
        </div>

        <div className="w-[432px]">
        <h1 className="flex font-bold text-[18px] "><span className="mt-2 pr-3"><Image
                        src={"/images/left-arr.png"}
                        height={10}
                        width={10}
                        alt="icon"
                        className="w-[10px] h-[15px]"
                      /></span>the quick fox jumps over the lazy dog</h1>
          <p className=" text-[12px] text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.</p>
        </div>

        <div className="w-[432px]">
        <h1 className="flex font-bold text-[18px] "><span className="mt-2 pr-3"><Image
                        src={"/images/left-arr.png"}
                        height={10}
                        width={10}
                        alt="icon"
                        className="w-[10px] h-[15px]"
                      /></span>the quick fox jumps over the lazy dog</h1>
          <p className=" text-[12px] text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.</p>
        </div>

        <div className="w-[432px]">
        <h1 className="flex font-bold text-[18px] "><span className="mt-2 pr-3"><Image
                        src={"/images/left-arr.png"}
                        height={10}
                        width={10}
                        alt="icon"
                        className="w-[10px] h-[15px]"
                      /></span>the quick fox jumps over the lazy dog</h1>
          <p className=" text-[12px] text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.</p>
        </div>

         





      </div>

      </div>
      <div className="text-center mt-20 mb-20">
<h1 className="text-[40px] font-[700]">Start your 14 days free trial</h1>
<p className=" text-[16px] font-[700] text-[#737373] mt-5">Met minim Mollie non desert Alamo est sit cliquey dolor <br />
do met sent. RELIT official consequent.</p>
<button className="mt-7 w-[221px] rounded-md text-white bg-blue-500 h-[63px] font-[700] sm:self-center lg:self-start">
      try it Now
    </button>
    <div className="flex justify-center items-center gap-7 mt-10">
                  <Facebook size={24} />
                  <Instagram size={24} />
                  <Twitter size={24} />
                  <Linkedin size={24} />
                </div>
           </div>
           <PricingFAQ/>
    </div>

    
  );
};

export default PricingPage;
