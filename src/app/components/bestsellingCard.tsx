import React from 'react'
import Image from 'next/image'

function BestsellingCard({src , alt ,title , description , price} : {
    src:string , alt:string ,title:string , description:string , price:number
    
}) {
  return (
    <div className="max-w-screen overflow-hidden">
  <div className="max-w-[350px] h-[35rem] p-2 mx-auto shadow-md rounded-xl group mt-48">
    {/* Image */}
    <div className="block h-[23rem] rounded overflow-hidden">
      <Image alt="kuch bhi" width={800} height={800} src={src}  className='w-full h-full object-cover'/>
    </div>

    {/* Heading directly below the image */}
    <div className="mt-4 text-center">
      <h2 className="text-lg font-semibold tracking-tight text-black line-clamp-1">
        {title}
      </h2>
      <p className="mt-2 text-sm font-semibold tracking-tight text-black line-clamp-1">
        {description}
      </p>
      <p className="mt-10 text-sm font-semibold tracking-tight text-black line-clamp-1">
        ${price}
      </p>
    </div>
  </div>
</div>


  
  )
}

export default BestsellingCard