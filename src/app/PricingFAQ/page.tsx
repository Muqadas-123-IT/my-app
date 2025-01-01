'use client';

import React from 'react';

const PricingFAQ = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Pricing FAQs</h1>
      <p className="text-center text-gray-500 mb-12">
        Problems trying to resolve the conflict between the two major realms of Classical physics
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="group flex items-start gap-4 p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-500">
                the quick fox jumps over the lazy dog
              </h3>
              <p className="text-gray-500 mt-2">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
                consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-500">
          Haven't got your answer?{' '}
          <a href="/support" className="text-blue-500 hover:underline">
            Contact our support
          </a>
        </p>
      </div>
    </div>
  );
};

export default PricingFAQ;
