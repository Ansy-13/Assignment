import Image from 'next/image'
import React from 'react'

function LatestProduct() {
  return (
   <main>
    <div className='md:w-[338px] md:h-[42px] relative md:top-[200px] md:left-[650px] text-[29px] md:text-[30px] font-sans font-bold  top-36 text-center'>
        Latest Product
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-64 ml-10 md:ml-11  '>
        <Image src={"/latest.png"} alt="this is a latest product" width={500} height={500}/>
        <Image src={"/chairOne.png"} alt="this is a latest product" width={500} height={500}/>
        <Image src={"/chair5.png"} alt="this is a latest product" width={500} height={500}/>
        <Image src={"/chair3.png"} alt="this is a latest product" width={500} height={500}/>
        <Image src={"/chair4.png"} alt="this is a latest product" width={500} height={500} className='ml-2'/>
        <Image src={"/chairOne.png"} alt="this is a latest product" width={500} height={500} className='ml-4'/>
    </div>
   </main>
  )
}

export default LatestProduct