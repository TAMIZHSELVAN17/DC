import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dass Computers</h3>
            <p className="text-sm text-white/90 leading-relaxed mb-4">
              Dass Computers is a trusted provider of reliable laptop and desktop solutions. Based in Katpadi, near Aazhlaiyam College, we’ve proudly served the tech needs of our community for over 15 years.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-3">
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-pink-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-sky-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">Our Branches</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li><a href="#" className="hover:underline">Laptops</a></li>
              <li><a href="#" className="hover:underline">Desktops</a></li>
              <li><a href="#" className="hover:underline">Accessories</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/80">
          © {new Date().getFullYear()} Dass Computers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
