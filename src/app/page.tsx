import Brands from "@/components/Brands/page";
import FeaturedPost from "@/app/FeaturePost/page";
import Fifth from "@/components/Fifth/page";
import Footer from "@/components/Footer/page";
import Fourth from "@/components/Fourth/page";
import Hero from "@/components/Hero/page";
import Navbar from "@/components/Navbar/page";
import Second1 from "@/components/Second1/page";
import Shop from "@/app/Shop/page";

import Third from "@/components/Third/page";
import Image from "next/image";
import Products from "./Products/page";
import PricingPage from "@/app/PricingPage/page";
import PricingFAQ from "@/app/PricingFAQ/page";
import TeamPage from "@/components/Teampage/page";
import Desktopcontact from "@/app/Desktopcontact/page";
import About from "@/app/About/page";
import Navbar2 from "@/components/Navbar2/page";
import Contact from "@/app/Contactus/page";
import Contactus from "@/app/Contactus/page";
import ContactUs2 from "@/app/Contactus2/page";
import Navbar3 from "@/components/Navbar3/page";
import ProductCards from "./cart/page";




export default function Home() {
  return (
    <div>
       <Navbar2/>
  
     <Hero/>
     <Second1/>
     <Third/>
     <Fourth/>
     <Fifth/>
     <FeaturedPost/>  
     <ProductCards />
   

    </div> 
    
  );
}
