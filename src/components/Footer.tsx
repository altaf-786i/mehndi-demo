import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-kaveri-dark text-white pt-10 pb-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-kaveri-gold font-playfair font-medium mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-kaveri-gold">Home</Link></li>
              <li><Link to="/about" className="hover:text-kaveri-gold">About</Link></li>
              <li><Link to="/blog" className="hover:text-kaveri-gold">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-kaveri-gold">Contact</Link></li>
              <li><Link to="/career" className="hover:text-kaveri-gold">Career</Link></li>
              <li><Link to="/faq" className="hover:text-kaveri-gold">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-kaveri-gold font-playfair font-medium mb-4">USEFUL LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-kaveri-gold">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-kaveri-gold">Terms & Condition</Link></li>
              <li><Link to="/returns" className="hover:text-kaveri-gold">Return & Refund Policy</Link></li>
              <li><Link to="/shipping" className="hover:text-kaveri-gold">Shipping Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-kaveri-gold font-playfair font-medium mb-4">PRODUCTS & RANGE</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/mehndi-powder" className="hover:text-kaveri-gold">Mehndi Powder</Link></li>
              <li><Link to="/mehndi-cone" className="hover:text-kaveri-gold">Mehndi Cone</Link></li>
              <li><Link to="/henna-oil" className="hover:text-kaveri-gold">Henna Oil</Link></li>
              <li><Link to="/hair-care" className="hover:text-kaveri-gold">Hair Care</Link></li>
              <li><Link to="/skin-care" className="hover:text-kaveri-gold">Skin Care</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-kaveri-gold font-playfair font-medium mb-4">CONTACT INFO</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-2">
                <span>📍</span>
                <span>123 Main Street, City Name, Country</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex gap-2">
                <span>✉️</span>
                <span>info@kaveri.com</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-white hover:text-kaveri-gold">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-kaveri-gold">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-white hover:text-kaveri-gold">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4 text-center text-xs">
          <p>© {new Date().getFullYear()} All Rights Reserved by Vedik Group. Designed By Your Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
