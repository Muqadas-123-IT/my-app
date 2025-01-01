import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Brands from "../../components/Brands/page";
import Navbar from "../../components/Navbar/page";
import Navbar2 from "../../components/Navbar2/page";
import Navbar3 from "@/components/Navbar3/page";

const About = () => {
  return (
    <div>
      <Navbar3/>
      <div className="lg:h-[800px] bg-center h-auto bg-[url('/images/about.png')] bg-no-repeat md:h-[600px] sm:h-[400px] xs:h-[300px]">
        <div className="lg:w-[1044px] w-full max-w-full lg:h-[427px] h-auto flex flex-col items-center justify-center lg:items-start lg:justify-start mx-auto p-4 lg:pt-[250px]">
          <h5 className="text-[16px] font-[700] text-center lg:text-left tracking-wide">
            ABOUT COMPANY
          </h5>
          <p className="text-[40px] tracking-widest lg:text-[58px] font-[700] mt-5 text-center lg:text-left">
            ABOUT US
          </p>
          <h4 className="mt-5 text-[20px] font-[500] text-center lg:text-left text-[#737373] tracking-wide">
            We know how large objects will <br />
            act, but things on a small scale.
          </h4>
          <button className="mt-7 w-[221px] text-white bg-[#23A6F0] h-[63px] font-[700] sm:self-center lg:self-start lg:p-5">
            Get Quote Now
          </button>
        </div>
      </div>

      {/* about second section */}

      <div className="w-full flex items-center mt-10 p-4 justify-center">
        <div className="max-w-screen-lg">
          <div>
            <p className="text-[#E74040] text-[14px] font-[400]">Problem trying</p>
          </div>
          <div className="flex flex-col md:flex-row mt-5 gap-8">
            <p className="text-[24px] font-[700]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </p>
            <p className="text-[14px] font-[400] text-[#737373]">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </div>

      {/* reviews section */}

      <div className="w-full flex items-center p-4 justify-center lg:mt-16">
        <div className="max-w-screen-lg text-center grid grid-cols-1  md:grid-cols-4 gap-8">
          <div>
            <h1 className="text-[38px] lg:text-[58px] font-[700]">115K</h1>
            <p className="text-[14px] font-[400] text-[#737373]">Happy Customers</p>
          </div>
          <div>
            <h1 className="text-[38px] lg:text-[58px] font-[700]">1150K</h1>
            <p className="text-[14px] font-[400] text-[#737373]">Happy Customers</p>
          </div>
          <div>
            <h1 className="text-[38px] lg:text-[58px] font-[700]">15</h1>
            <p className="text-[14px] font-[400] text-[#737373]">Happy Customers</p>
          </div>
          <div>
            <h1 className="text-[38px] lg:text-[58px] font-[700]">100+</h1>
            <p className="text-[14px] font-[400] text-[#737373]">Happy Customers</p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center p-4 justify-center lg:mt-16">
        <div className="max-w-screen-lg">
          <div>
            <Image
              src="/images/Video card.png"
              width={300}
              height={300}
              alt="crd"
              className="w-full h-auto lg:w-[1000px] lg:h-[540px]"
            />
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}

      <div className="w-full p-4 text-center">
        <h1 className="text-[36px] font-bold">Meet Our Team</h1>
        <p className="text-[16px] text-[#737373]">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-4 max-w-screen-lg">
          {[1, 2, 3].map((member) => (
            <div
              key={member}
              className="h-[383px] w-[316px] flex flex-col items-center text-center"
            >
              <Image
                src={`/images/user${member}.png`}
                width={200}
                height={100}
                alt="team-member"
                className="lg:h-[231px] lg:w-[316px]"
              />
              <div>
                <p className="text-[16px] font-bold pb-3 pt-3">Username</p>
                <p className="text-[14px] text-[#737373] font-bold pb-3">Profession</p>
                <div className="flex justify-center items-center gap-3 text-[#23A6F0]">
                  <Facebook size={24} />
                  <Instagram size={24} />
                  <Twitter size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Big Companies Section */}

      <div className="w-full text-center p-4 lg:mt-20">
        <h1 className="text-[20px] lg:text-[36px] font-bold">Big Companies Are Here</h1>
        <p className="text-[16px] text-[#737373]">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <Brands/>
    </div>
  );
};








export default About;










// pages/about.tsx
// import { Facebook, Instagram, Twitter } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// const About = () => {
//   return (
      
//     <div>
      


// <div>
//       <div className=" lg:h-[800px] lg:w-full bg-center h-auto bg-[url('/images/about.png')] bg-no-repeat  md:h-[600px] sm:h-[400px] xs:h-[300px]">
//         <div className="lg:w-[1044px] w-full max-w-full  lg:h-[427px] h-auto flex flex-col items-center justify-center lg:items-start lg:justify-start mx-auto p-4 lg:pt-[250px]">
//           <h5 className="text-[16px] font-[700] text-center lg:text-left tracking-wide">
//             ABOUT COMPANY
//           </h5>
//           <p className="text-[40px] tracking-widest lg:text-[58px] font-[700] mt-5 text-center lg:text-left">
//             ABOUT US
//           </p>
//           <h4 className="mt-5 text-[20px] lg:text-[20px] font-[500] text-center lg:text-left text-[#737373] tracking-wide">
//             We know how large objects will <br />
//             act, but things on a small scale.
//           </h4>
//           <button className="mt-7 w-[221px] text-white bg-[#23A6F0] h-[63px]  font-[700] sm:self-center lg:self-start lg:p-5">
//             Get Quote Now
//           </button>
//         </div>
//       </div>

//       {/* about second section */}

//       <div className="w-full lg:h-[300px] h-auto flex items-center mt-10 p-4 justify-center">
//         <div className="w-[1000px] lg:h-[200px] h-auto ">
//           <div>
//             <p className="text-[#E74040] text-[14px] font-[400]">
//               Problem trying
//             </p>
//           </div>
//           <div className="flex md:flex-row flex-col mt-5 gap-8">
//             <p className="lg:w-[400px] text-[24px] font-[700]">
//               Met minim Mollie non desert Alamo est sit cliquey dolor do met
//               sent.
//             </p>
//             <p className="lg:w-[550px] text-[14px] font-[400] text-[#737373]">
//               Problems trying to resolve the conflict between the two major
//               realms of Classical physics: Newtonian mechanics{" "}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* reviews section */}

//       <div className="w-full lg:h-[250px] h-auto flex items-center p-4 justify-center">
//         <div className="w-[1100px] lg:h-[110px] h-auto text-center md:flex">
//           <div className="w-[260px]">
//             <h1 className="text-[58px] font-[700]">115K</h1>
//             <p className="text-[14px] font-[400] text-[#737373]">
//               Happy Customers
//             </p>
//           </div>
//           <div className="w-[260px]">
//             <h1 className="text-[58px] font-[700]">1150K</h1>
//             <p className="text-[14px] font-[400] text-[#737373]">
//               Happy Customers
//             </p>
//           </div>
//           <div className="w-[260px]">
//             <h1 className="text-[58px] font-[700]">15</h1>
//             <p className="text-[14px] font-[400] text-[#737373]">
//               Happy Customers
//             </p>
//           </div>
//           <div className="w-[260px]">
//             <h1 className="text-[58px] font-[700]">100+</h1>
//             <p className="text-[14px] font-[400] text-[#737373]">
//               Happy Customers
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="w-full lg:h-[664px] h-auto flex items-center p-4 justify-center">
//         <div className="w-[1000px] ">
//           <div>
//             <Image
//               src={"/images/Video card.png"}
//               width={300}
//               height={300}
//               alt="crd"
//               className="lg:w-[1000px] lg:h-[540px]"
//             />
//           </div>
//         </div>
//       </div>

//      <div>
//       <h1 className="heading1"> Meet Our Team</h1>
//       <p className="heading2">Problems trying to resolve the conflict between 
//       the two major realms of Classical physics: Newtonian mechanics </p>
//      </div>

//      <div className="flex items-center justify-center h-[382px] w-[1100px] ">
//       <div className="h-[331px] w-[316px]">
//         <Image 
//         src={"/images/img52.png"}
//         width={200}
//         height={100}
//         alt="al"
//         className="h-[231px] w-[316px]"
//         />
//         <div className=" mt-4 " >
//           <p className="pb-3 text-[16px] text-center font-[700]">User Name</p>
//           <p className="pb-3 text-[14px] text-center font-[500] text-[#737373]">Proffession</p>
//           <div className="flex gap-3 text-center items-center justify-center "> <Facebook />
//           <Instagram />
//           <Twitter />

//           </div>
//           <div>




//           <div className="h-[331px] w-[316px]">
//         <Image 
//         src={"/images/img52.png"}
//         width={200}
//         height={100}
//         alt="al"
//         className="h-[231px] w-[316px]"
//         />
//         <div className=" mt-4 " >
//           <p className="pb-3 text-[16px] text-center font-[700]">User Name</p>
//           <p className="pb-3 text-[14px] text-center font-[500] text-[#737373]">Proffession</p>
//           <div className="flex gap-3 text-center items-center justify-center "> <Facebook />
//           <Instagram />
//           <Twitter />

//           </div>
//           </div>
//           </div>
          

//           </div>
//         </div>
//       </div>
//       </div>
//      </div>
//     </div>
 
    
    
//   )}
//   export default About
