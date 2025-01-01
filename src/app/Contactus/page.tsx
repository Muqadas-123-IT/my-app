import Image from 'next/image';
import ContactUs2 from '../Contactus2/page';
import Navbar from '../../components/Navbar/page';
import Navbar2 from '../../components/Navbar2/page';

const Contactus = () => {
  return (
    <div>
      <Navbar2/>
    <div className="min-h-screen flex ml-10">
      {/* Left Section (Text Material) */}
      <div className="relative mt-30">
      <div className="w-1/2 p-6 mt-40 ml-40 flex flex-col justify-center leading-relaxed">
  <h1 className="text-6xl font-bold text-gray-800 leading-relaxed whitespace-nowrap">
    Get in touch <span className="block">today!</span>
  </h1>
        <p className="text-lg text-gray-600 leading-loose whitespace-nowrap">
          We know how large objects will act, <span className="block">but things on a small scale can be unpredictable.</span> 
        </p>
        <div className="space-y-2">
          <p className="text-lg font-semibold leading-loose whitespace-nowrap">
            Phone: <span className="text-blue-600">+451 215 215</span>
          </p>
          <p className="text-lg font-semibold">Fax: +451 215 215</p>
        </div>
        <div className="flex space-x-6 text-2xl text-gray-500 leading-loose">
          <a href="#" className="hover:text-blue-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-600  leading-loose">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-blue-600 leading-loose">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-blue-600 leading-loose">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      </div>

      {/* Right Section (Background Image) */}
      <div className="relative w-full h-[742px] flex justify-center items-center mr-40">
  <Image
    src="/Images/lastpic.png"
    alt="Contact Background"
    layout="fill"
    objectFit="container"
    className="rounded-lg"
    quality={100}
  />

      </div>


      
    </div>

<ContactUs2/>
</div>

  );
};

export default Contactus;
