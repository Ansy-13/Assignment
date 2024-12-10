import React from 'react'
import Image from 'next/image'

function Topproduct() {
  return (
    <main>
        <div className='text-center  mt-10 font-bold text-2xl text-blue-800'>
            Top Products
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <Image src={"/top1.png"} alt='this is a branded chair' width={500} height={500}/>
            <Image src={"/top1.png"} alt='this is a branded chair' width={500} height={500}/>
            <Image src={"/top1.png"} alt='this is a branded chair' width={500} height={500}/>
            <Image src={"/top1.png"} alt='this is a branded chair' width={500} height={500}/>
        </div>
    </main>
  )
}

export default Topproduct