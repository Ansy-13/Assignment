import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <main className="relative top-32"> {/* Ensure space for Navbar */}
      <div className="flex items-center justify-center">
        <Image
          src="/front.png"
          alt="This is a promotional image"
          width={800}
          height={800}
          className="md:max-w-[1500px] md:max-h-[90vh] object-cover sm:w-[1500px]"
        />
      </div>
    </main>
  );
}

export default Hero;

