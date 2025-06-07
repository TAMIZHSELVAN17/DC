import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import b1 from '../assets/acer-banner.png';
import b2 from '../assets/asus-banner.png';
import b3 from '../assets/dell_bannerjpg.png';
import b4 from '../assets/hp-banner.png';
import b5 from '../assets/Lenovo_banner.png';

// our brands
import A from '../assets/our brand/acer.jpg';
import D from '../assets/our brand/dell-logo.jpg';
import h from '../assets/our brand/hp-logo.png';
import l from '../assets/our brand/lenova.png';
import Asus from '../assets/our brand/asus.jpg';

const BranchSlider = () => {
  const branches = [
    { id: 1, img: D, name: 'Dell' },
    { id: 2, img: A, name: 'Acer' },
    { id: 3, img: Asus, name: 'Asus' },
    { id: 4, img: l, name: 'Lenovo' },
    { id: 5, img: h, name: 'HP' }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };
  

  return (
    <div className="py-12 w-full flex flex-col items-center bg-white" aria-label="Our Brands Section">
      <h1 className="text-4xl font-bold text-blue-800 pb-2">OUR BRANDS</h1>
      <p className="text-gray-600 text-center pb-6 max-w-xl">
        Explore the most trusted computer brands we proudly offer.
      </p>
      <div className="w-[95%] max-w-6xl">
        <Slider {...settings}>
          {branches.map((branch) => (
            <div key={branch.id} className="px-2">
              <div className="overflow-hidden shadow-md bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
                <img
                  src={branch.img}
                  alt={`${branch.name} Logo`}
                 
                  className="h-48 w-96 object-fill"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const BannerSlider = () => {
  const banners = [
    { id: 1, img: b1, name: 'Acer Banner' },
    { id: 2, img: b2, name: 'Asus Banner' },
    { id: 3, img: b3, name: 'Dell Banner' },
    { id: 4, img: b4, name: 'HP Banner' },
    { id: 5, img: b5, name: 'Lenovo Banner' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="w-full py-10 flex flex-col justify-center items-center" aria-label="Brand Banners Section">
      <div className="w-full max-w-7xl sm:px-6 lg:px-8">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="w-full aspect-[28/9] overflow-hidden shadow-md bg-white "
            >
              <img
                src={banner.img}
                alt={banner.name}
                
                className="w-full h-full object-fill"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <BranchSlider />
    </div>
  );
};

export default Home;
