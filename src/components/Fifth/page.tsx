import React from 'react'
import Image from 'next/image'
// const Fifth = () => {
//   return (
//     <div className=' w-full lg:h-[711px] flex flex-col md:flex-row items-center justify-center'>
//       <div className=''>
//        <Image src={"/images/fifth.png"} height={300} width={300} alt='fift'/>
//       </div>
//       <div className="lg:w-[400px] w-full max-w-full text-black lg:h-[427px] h-auto flex flex-col items-center justify-center lg:items-start lg:justify-start mx-auto p-4 lg:pt-[150px]">
//     <h5 className="text-[16px] font-[700] text-center lg:text-left">SUMMER 2020</h5>
//     <p className="text-[30px] lg:text-[40px] font-[700] mt-5 text-center lg:text-left">
//     Part of the Neural 
//     Universe
//     </p>
//     <h4 className="mt-5 text-[20px] lg:text-[20px] font-[700] text-center lg:text-left">
//       We know how large objects will act, but things on a small scale.
//     </h4>
//     <div className='ml-4'>
//     <button className="mt-7 w-[132px] py-4 text-[12px] rounded-lg text-white bg-[#2DC071]  font-[700] sm:self-center lg:self-start">
//       BUY NOW
//     </button>
//     <button className="mt-7 w-[132px] py-4 text-[12px] rounded-lg text-white bg-[#2DC071]  font-[700] sm:self-center lg:self-start">
//       BUY NOW
//     </button>
//     </div>
//   </div>
//     </div>
//   )
// }
const Fifth = () => {
  return (
    <div className="w-full lg:h-[711px] flex flex-col md:flex-row items-center justify-center gap-8 p-4">
      {/* Image Section */}
      <div className="flex justify-center items-center">
        <Image
          src="/images/img14.png"
          height={300}
          width={300}
          alt="fift"
          className="object-contain lg:w-[632px] lg:h-[711px] "
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left max-w-lg">
        <h5 className="text-[16px] font-[700]">SUMMER 2020</h5>
        <p className="text-[30px] lg:text-[40px] font-[700] mt-5">
          Part of the Neural <br /> Universe
        </p>
        <h4 className="mt-5 text-[20px] lg:text-[20px] font-[700]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <div className="flex gap-4 mt-7">
          <button className="py-4 px-6 text-[12px] rounded-lg text-white bg-[#2DC071] font-[700]">
            BUY NOW
          </button>
          <button className="py-4 px-6 text-[12px] border border-[#2DC071] rounded-lg text-[#2DC071]  font-[700]">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fifth;

