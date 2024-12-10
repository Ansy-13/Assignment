"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestsellingCard from './bestsellingCard';

function Featured() {
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
      alt: "This is a black Chair",
      title: "Yellow Color Chair",
      description: "This is a best quality Chair",
      price: 4000,
      slug: "yellow-chair",
    },
    {
      src: "/yellow.jpg",
      alt: "This is a yellow chair",
      title: "Yellow Chair",
      description: "This is a best quality Chair",
      price: 4000,
      slug: "yellow-chair-duplicate",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main>
      <div className="mt-[400px] text-center font-bold text-2xl">Featured Product</div>
      <div>
        <Slider {...settings}>
          {bestSelling.map((item, i) => (
            <BestsellingCard
              key={item.slug || i} // Adding key here
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </main>
  );
}

export default Featured;
