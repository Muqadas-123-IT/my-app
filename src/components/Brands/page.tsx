import Image from 'next/image'
import React from 'react'

const Brands = () => {
  return (
    <div className='w-full mt-14 flex justify-center items-center mb-20 '>
        <div className='w-[1200] flex md:flex-row flex-col gap-20 justify-center items-center'>
            <Image src="/images/icon1.png"
            height={70}
            width={120}
             alt="icon"
             className="w-[180px] h-[72px]"
             />
             <Image src="/images/icon2.png"
            height={50}
            width={50}
             alt="icon"
             className="w-[76px] h-[72px]"
             />
                <Image src="/images/icon3.png"
            height={50}
            width={50}
             alt="icon"
             className="w-[76px] h-[72px]"
             />
   <Image src="/images/icon4.png"
            height={50}
            width={50}
             alt="icon"
             className="w-[76px] h-[72px]"
             />
                <Image src="/images/icon5.png"
            height={50}
            width={50}
             alt="icon"
             className="w-[76px] h-[72px]"
             />
   <Image src="/images/icon6.png"
            height={50}
            width={50}
             alt="icon"
             className="w-[76px] h-[72px]"
             />
        </div>
      
    </div>
  )
}

export default Brands
