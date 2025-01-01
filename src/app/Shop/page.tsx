import React from "react";
import Image from "next/image";
import Brands from "../../components/Brands/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar2 from "@/components/Navbar2/page";

const products = [
  {
    id: 1,
    image: "/images/img1.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 2,
    image: "/images/img2.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 3,
    image: "/images/111.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 4,
    image: "/images/img4.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 5,
    image: "/images/img20.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 6,
    image: "/images/img21.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 7,
    image: "/images/img22.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 8,
    image: "/images/img23.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },  {
    id: 9,
    image: "/images/img24.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 10,
    image: "/images/img25.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 11,
    image: "/images/img26.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 12,
    image: "/images/img27.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  
  
];




const Shop = () => {



  return (
    <div>
      <Navbar2/>
      <div className="w-full h-[92px] flex justify-center items-center">
        <div className="w-[1000px] h-[42px] flex items-center justify-between ">
          <div>
            <h1 className="text-[24px] font-[700] ">Shop</h1>
          </div>
          <div className="flex gap-5">
            <h1 className="text-[14px] ">Home</h1>
            <Image
              src="/images/right errow.png"
              height={10}
              width={10}
              alt="icon"
            />
            <h1 className="text-[14px] text-[#BDBDBD] ">Shop</h1>
          </div>
        </div>
      </div>

      <div className="w-full h-[271px] flex justify-center items-center mb-10">
        <div className="flex  gap-2">
          <Image
            src="/images/shop1.png"
            alt="Product"
            width={200}
            height={200}
          />
          <Image
            src="/images/shop2.png"
            alt="Product"
            width={200}
            height={200}
          />
          <Image
            src="/images/shop3.png"
            alt="Product"
            width={200}
            height={200}
          />
          <Image
            src="/images/shop4.png"
            alt="Product"
            width={200}
            height={200}
          />
          <Image
            src="/images/shop5.png"
            alt="Product"
            width={200}
            height={200}
          />
        </div>
      </div> 

      <div className="w-full lg:h-[98px] p-2 flex justify-center items-center mt-20 mb-20 ">
        <div className="w-[1000px] h-[50px] flex justify-between items-center">
        <div>
          <h1 className="text-[14px]  ">Showing all 12 results</h1>
        </div>
        <div className="flex gap-8">
          <h1 className="text-[14px]  ">Views:</h1>
          <Image src="/images/dots.png" alt="Product" width={20} height={20} />
          <Image src="/images/bar.png" alt="Product" width={20} height={20} />
        </div>
        <div className="flex gap-5">
          <div className="border rounded-lg bg-[#DDDDDD] w-[120px] flex p-4 gap-2">
            <h1 className="text-[14px]  ">Popularity</h1>
            <Image
              src="/images/down arrow.png"
              alt="Product"
              width={10}
              height={5}
              className="w-4 h-3 mt-1 "
            />
          </div>
          <div className="border rounded-lg bg-[#23A6F0] w-[120px] flex p-4 gap-2">
            <h1 className="text-[14px] text-white text-center ">Filter</h1>
            </div>
          </div>
        </div>
      </div>

<Brands/>

      <div className='flex justify-center items-cente mt-20 mb-20'>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 lg:w-[1000px] justify-center items-center">
          {products.map((product) => (
            <Card key={product.id} className="">
              {/* Ensure the image div fits the size of the image */}
              <div className="w-full h-auto flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-auto h-auto max-w-full max-h-[450px] object-cover"
                />
              </div>
              <CardContent>
                <CardHeader>
                  <CardTitle className=" text-center whitespace-nowrap">{product.title}</CardTitle>
                  <p className="text-sm text-muted-foreground text-center pt-4">{product.department}</p>
                </CardHeader>
                <div className="flex items-center justify-center ">
                  <p className="text-gray-500 line-through">${product.price}</p>
                  <p className="ml-2 text-green-500 font-bold">${product.discountPrice}</p>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
