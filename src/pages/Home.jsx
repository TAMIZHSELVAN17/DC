import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import b1 from '../assets/acer-banner.png';
import b2 from '../assets/asus-banner.png';
import b3 from '../assets/dell_bannerjpg.png';
import b4 from '../assets/hp-banner.png';
import b5 from '../assets/Lenovo_banner.png';

import laptopImg from '../assets/PopularCategories/laptop.avif';
import computerImg from '../assets/PopularCategories/computer.avif';
import keyboardMouseImg from '../assets/PopularCategories/keyboard.avif';

import A from '../assets/our brand/acer.jpg';
import D from '../assets/our brand/dell-logo.jpg';
import h from '../assets/our brand/hp-logo.png';
import l from '../assets/our brand/lenova.png';
import Asus from '../assets/our brand/asus.jpg';

const fadeLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1 },
  viewport: { once: false, amount: 0.3 },
};

const fadeRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1 },
  viewport: { once: false, amount: 0.3 },
};

const BannerSlider = () => {
  const banners = [
    { id: 1, img: b1, name: 'Acer Banner' },
    { id: 2, img: b2, name: 'Asus Banner' },
    { id: 3, img: b3, name: 'Dell Banner' },
    { id: 4, img: b4, name: 'HP Banner' },
    { id: 5, img: b5, name: 'Lenovo Banner' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full h-[500px] " aria-label="Brand Banners Section">
      <Slider {...settings} className="relative overflow-hidden">
        {banners.map((banner, index) => (
          <motion.div
            key={banner.id}
            {...fadeRight}
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
          >
            <img
              src={banner.img}
              alt={banner.name}
              className="w-full h-full object-fill"
              loading="lazy"
            />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

const categories = [
  { title: 'Laptop', image: laptopImg },
  { title: 'Computer', image: computerImg },
  { title: 'Accessories', image: keyboardMouseImg },
];

const PopularCategories = () => {
  return (
    <section className="py-10 w-full" aria-label="Popular Categories Section">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-[#f67216] to-indigo-600 text-transparent bg-clip-text pb-4">
          Popular Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={category.image}
                alt={`${category.title} category image`}
                className="w-24 h-24 mx-auto mb-4 object-fill"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BranchSlider = () => {
  const branches = [
    { id: 1, img: D, path: 'https://www.dell.com/en-in' },
    { id: 2, img: A, path: 'https://www.acer.com/in-en/' },
    { id: 3, img: Asus, path: 'https://www.asus.com/in/' },
    { id: 4, img: l, path: 'https://www.lenovo.com/in/en/d/deals/' },
    { id: 5, img: h, path: 'https://www.hp.com/in-en/shop/' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-16 w-full flex flex-col items-center" aria-label="Our Brands Section">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-[#f67216] to-indigo-600 text-transparent bg-clip-text mb-4">
        Our Brands
      </h1>
      <p className="text-gray-600 text-center text-lg max-w-2xl mb-8 leading-relaxed">
        Explore the most trusted computer brands we proudly offer.
      </p>
      <div className="w-full max-w-7xl px-4">
        <Slider {...settings}>
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              {...fadeRight}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="px-3"
            >
              <a href={branch.path} target="_blank" rel="noopener noreferrer">
                <div className="bg-white rounded-xl shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-105">
                  <img
                    src={branch.img}
                    alt="Brand Logo"
                    className="h-40 w-full object-contain p-4"
                    loading="lazy"
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <main className="bg-blue-100 w-full overflow-x-hidden">
      <BannerSlider />
      <PopularCategories />
      <BranchSlider />
    </main>
  );
};

export default Home;
