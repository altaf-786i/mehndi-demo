import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/products", label: "OUR PRODUCTS" },
    { to: "/contact", label: "CONTACT US" },
  ];

  return (
    <header className="bg-white py-3 px-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="mr-10">
            <img src="" alt="Vedik Mehndi" className="h-8" />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-kaveri-dark hover:text-kaveri-gold font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-kaveri-dark"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="mr-10" onClick={() => setIsMenuOpen(false)}>
              <img src="" alt="Vedik Mehndi" className="h-8" />
            </Link>
            <button
              className="text-kaveri-dark"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-kaveri-dark hover:text-kaveri-gold font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-kaveri-gold hover:bg-kaveri-brown text-white px-4 py-2 rounded-md text-sm w-full">
              BECOME DEALER
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
