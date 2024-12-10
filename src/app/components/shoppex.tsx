import { Truck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Shoppex() {
  return (
   <main>
    <div className='text-center mt-20 text-2xl font-bold text-blue-900'>
        What Shopex Offer!
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4'>
        <Image src={"/shoppex1.png"} alt='this is a support image' width={500} height={500}/>
        <Image src={"/shoppex1.png"} alt='this is a support image' width={500} height={500}/>
        <Image src={"/shoppex1.png"} alt='this is a support image' width={500} height={500}/>
        <Image src={"/shoppex1.png"} alt='this is a support image' width={500} height={500}/>
    </div>
    <div className='w-full h-[500px] bg-purple-50 p-4'>
    <Image src={"/sofa.png"} alt="this is a an image" width={500} height={500} className='md:ml-[500px] relative top-36 h-[300px] w-[]'/>
    </div>
   </main>
  )
}

export default Shoppex