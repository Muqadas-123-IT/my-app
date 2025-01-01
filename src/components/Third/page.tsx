import React from 'react'
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    id: 1,
    image: "/images/img5.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 2,
    image: "/images/img6.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 3,
    image: "/images/img7.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 4,
    image: "/images/img8.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 5,
    image: "/images/img9.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 6,
    image: "/images/img10.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 7,
    image: "/images/img11.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  {
    id: 8,
    image: "/images/img12.png",
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["#000", "#2DC071", "#F6C700", "#666666"],
  },
  
];

const Third = () => {
  return (
    
      <div className='w-full'>
      <div >
  <h1 className="heading1">
     BESTSELLER PRODUCTS
  </h1>
  <p  className="heading2" >Problems trying to resolve the conflict between </p>
  </div>

  <div className='flex justify-center items-cente mt-20'>
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
</div>)}

export default Third;