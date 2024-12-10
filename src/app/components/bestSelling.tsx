import React from 'react';
import BestsellingCard from './bestsellingCard';

function BestSelling() {
  const bestSelling = [
    {
      src: "/long.jpg",
      alt: "Soft Chairs",
      title: "Curved Chairs",
      description: "This is a best quality Chair",
      price: 2000,
      slug: "curved-chair",
    },
    {
      src: "/hatchiar.jpg",
      alt: "Hat Like Chairs",
      title: "Hat Chairs",
      description: "This is a best quality Chair",
      price: 4000,
      slug: "hat-like-chair",
    },
    {
      src: "/wheeled.jpg",
      alt: "This is a wheeled Chairs",
      title: "Wheeled Chairs",
      description: "This is a best quality Chair",
      price: 4000,
      slug: "wheeled-chair",
    },
    {
      src: "/yellow.jpg",
      alt: "Yellow Comfortable Chair",
      title: "Black Chairs",
      description: "Yellow Comfortable Chair",
      price: 4000,
      slug: "black-chair",
    },
  ];

  return (
    <main>
      <div className="flex flex-wrap justify-center gap-5">
        {bestSelling.map((item, i) => (
          <BestsellingCard
            key={item.slug || i} // Prefer `item.slug` for uniqueness
            src={item.src}
            alt={item.alt}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </main>
  );
}

export default BestSelling;
