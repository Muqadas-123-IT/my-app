import React from 'react'
import Image from 'next/image'
const Fourth = () => {
  return (
    // <div className='bg-[#23856D] h-[711px]'>
    // <Image src="images/row.png" alt='logo' height={300} width={400}/>
    // </div>
    <div className="bg-[#23856D] w-full lg:h-[711px]  flex items-center justify-center">
  <Image 
    src="/images/four.png" 
    alt="logo" 
    height={300} 
    width={400} 
    className="object-cover w-full pl-20 md:w-[700px] lg:w-[1000px]"
  />
</div>
  ) 
}

export default Fourth
