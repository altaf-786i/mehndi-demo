import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-kaveri-green h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/banner.jpg" 
          alt="Mehndi Model" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Optional: Add overlay for better text contrast if needed */}
      <div className="absolute inset-0"></div>
    </div>
  );
};

export default Hero;
