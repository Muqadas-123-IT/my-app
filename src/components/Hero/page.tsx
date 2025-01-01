import React from 'react';

const Hero = () => {
  return (
    <div className="relative lg:h-[800px] lg:w-full bg-center h-auto bg-[url('/images/hero.png')] bg-no-repeat  md:h-[600px] sm:h-[400px] xs:h-[300px]">
    <div className="lg:w-[1044px] w-full max-w-full text-white lg:h-[427px] h-auto flex flex-col items-center justify-center lg:items-start lg:justify-start mx-auto p-4 lg:pt-[150px]">
      <h5 className="text-[16px] font-[700] text-center lg:text-left">SUMMER SALE 2020</h5>
      <p className="text-[40px] lg:text-[58px] font-[700] mt-5 text-center lg:text-left">
        NEW COLLECTION
      </p>
      <h4 className="mt-5 text-[20px] lg:text-[20px] font-[700] text-center lg:text-left">
        We know how large objects will act, but things on a small scale.
      </h4>
      <button className="mt-7 w-[221px] text-white bg-[#2DC071] h-[63px] font-[700] sm:self-center lg:self-start">
        SHOP NOW
      </button>
    </div>
  </div>
  



  );
}

export default Hero;
