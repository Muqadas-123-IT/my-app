'use client'
import React, { useState, useEffect } from 'react';
import sanityClient from '@sanity/client';
import Image from 'next/image';

// Sanity client configuration
const sanity = sanityClient({
  projectId: '8c7mn33z', // Your Sanity project ID
  dataset: 'production', // Dataset name
  token: 'skpTD8sHmtiQZjVFeDyZ4mnt7kdz6sY3DRzUuzLNmTv1F3z1sFMwgvqtXMm3OPOecMn05V1QjI01KM6YQiEwWtF8pRfwsdvFDetOzcT6MLiM000qdhA4BCywsXpYspvj4w4n7jMCDoICqeZuB6LnsMGRgYP8Mgxz52OzyhpW4DOhC4ZBn3nY', // Optional token for private access
  useCdn: true,
  apiVersion: '2023-01-01',
});

// Product interface definition
interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{
          _id,
          title,
          description,
          price,
          discountPercentage,
          "imageUrl": productImage.asset->url,
          tags
        }`;

        const data: Product[] = await sanity.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been successfully added to your cart!`);
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-green-950 mt-4 mb-4">Products From API's Data</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md transform hover:scale-105 transition-transform duration-300"
/>
           
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-red-700 mt-2 text-sm">{product.description.slice(0, 100)}...</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-red-600 font-bold">${product.price}</p>
                {product.discountPercentage > 0 && (
                  <p className="text-sm text-gray-400">{product.discountPercentage}% OFF</p>
                )}
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-4">
              {product.tags.map((tag, index) => (
                <span key={index} className="text-xs text-red-950/100 dark:text-rose-900/100 bg-sky-200/100 rounded-full px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <button
              className= " flex justify-center items-center  bg-indigo-500 hover:bg-fuchsia-500 text-white   font-bold py-2 px-4 rounded-md mt-4"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-blue-500 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold items-center flex justify-center text-green-950 mb-4">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md mb-2">
                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="text-sm text-green-800">${item.price.toFixed(2)}</p>
                </div>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="w-full h-48 object-container rounded-md  transform hover:scale-105 transition-transform duration-300"
/>
               
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
