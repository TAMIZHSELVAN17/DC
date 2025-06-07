import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dell PG Living Space',
      price: '₹5,000',
      location: 'Anna Nagar, Chennai',
      rating: '5 ⭐',
      features: ['24x7 Power Backup', 'Wi-Fi', 'AC Rooms'],
      img: 'https://1000logos.net/wp-content/uploads/2016/10/Dell-Logo.png',
    },
    {
      id: 2,
      name: 'Lenovo Ladies Hostel',
      price: '₹7,500',
      location: 'T. Nagar, Chennai',
      rating: '4.8 ⭐',
      features: ['Hygienic Food', 'Wi-Fi', 'Security'],
      img: 'https://1000logos.net/wp-content/uploads/2017/03/Lenovo-logo.png',
    },
    {
      id: 3,
      name: 'ASUS Girls Living Space',
      price: '₹6,800',
      location: 'Velachery, Chennai',
      rating: '4.9 ⭐',
      features: ['CCTV', 'Laundry', 'Study Hall'],
      img: 'https://1000logos.net/wp-content/uploads/2017/03/Asus-logo.png',
    },
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
  };

  return (
    <div className="w-full py-10 flex flex-col justify-center items-center bg-gray-100">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Top Brand-Partnered PGs</h2>
      <div className="w-[95%] max-w-5xl">
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative w-full h-[220px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-xl overflow-hidden shadow-md bg-white"
            >
              <img
                src={t.img}
                alt={`Image of ${t.name}`}
                className="w-full h-full object-contain p-6"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 text-sm p-4 backdrop-blur-sm">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-gray-700">
                  {t.location} • {t.price} • {t.rating}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const BranchSlider = () => {
  const branches = [
    { id: 1, name: 'Katpadi', img: 'https://via.placeholder.com/600x400?text=Katpadi' },
    { id: 2, name: 'Vellore', img: 'https://via.placeholder.com/600x400?text=Vellore' },
    { id: 3, name: 'Gudiyatham', img: 'https://via.placeholder.com/600x400?text=Gudiyatham' },
    { id: 4, name: 'Arcot', img: 'https://via.placeholder.com/600x400?text=Arcot' },
    { id: 5, name: 'Ambur', img: 'https://via.placeholder.com/600x400?text=Ambur' },
    { id: 6, name: 'Ranipet', img: 'https://via.placeholder.com/600x400?text=Ranipet' },
    { id: 7, name: 'Walajapet', img: 'https://via.placeholder.com/600x400?text=Walajapet' },
    { id: 8, name: 'Sankaranpalayam', img: 'https://via.placeholder.com/600x400?text=Sankaranpalayam' },
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
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-12 w-full flex flex-col items-center bg-white">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Our Branches</h2>
      <div className="w-[95%] max-w-6xl">
        <Slider {...settings}>
          {branches.map((branch) => (
            <div key={branch.id} className="px-2">
              <div className="rounded-xl overflow-hidden shadow-md bg-white">
                <img
                  src={branch.img}
                  alt={branch.name}
                  className="w-full h-[200px] object-cover"
                />
                <p className="text-center font-medium text-gray-700 py-2">{branch.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Testimonials />
      <BranchSlider />
    </>
  );
};

export default Home;
