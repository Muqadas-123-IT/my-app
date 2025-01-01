import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";


const Navbar = () => {
  return (
    <div>


                                                                                                                                              


      <div className="hidden md:flex bg-[#252B42] w-full h-[60px]  text-white justify-around items-center ">
        <div className="bg-[rgb(37,43,66)] text-white flex gap-5 ">
          <div className="flex">
            <Phone className="mr-3"/>
            (225) 555-0118
          </div>
          <div className="flex">
            <Mail className="mr-3" /> michelle.rivera@example.com
          </div>
        </div>

        {/* second div  */}

        <div>Follow Us and get a chance to win 80% off</div>
      

      {/* third div */}
      <div className="flex gap-2">
        <h1>Follow us :</h1>
        <div className="flex gap-3"> 
          <Instagram />
          <Youtube />
          <Facebook />
          <Twitter />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
