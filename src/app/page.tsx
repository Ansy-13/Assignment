
import React from 'react'
import Navbar from './components/header'
import Hero from './components/hero'
import Featured from './components/featured'
import BestSelling from './components/bestSelling'
import LatestProduct from './components/latestProduct'
import Shoppex from './components/shoppex'
import Trending from './components/trending'
import Topproduct from './components/topproduct'



function page() {
  return (
   <div>
 
   <Hero/>
   <Featured/>
   <LatestProduct/>
   <Shoppex/>
   <Trending/>
   <Topproduct/>
   {/* <BestSelling/> */}
   </div>
  )
}

export default page