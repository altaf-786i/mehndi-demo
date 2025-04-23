const ProductFeatures = () => {
  const features = [
    {
      icon: "/feature-icon-1.png",
      title: "Provides deep red burgundy color",
      description: "Excellent quality"
    },
    {
      icon: "/feature-icon-2.png",
      title: "Strengthens hair & nourishes scalp",
      description: ""
    },
    {
      icon: "/feature-icon-3.png",
      title: "100% purely herbal ingredients grown in optimal conditions",
      description: ""
    },
    {
      icon: "/feature-icon-4.png",
      title: "It acts as a natural moisturizer for hair",
      description: ""
    },
    {
      icon: "/feature-icon-5.png",
      title: "Makes hair soft and shiny",
      description: ""
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-playfair text-center mb-8">Product Features</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <img src={feature.icon} alt={feature.title} className="w-20 h-20 mb-4" />
              <h3 className="text-sm font-medium mb-1">{feature.title}</h3>
              {feature.description && (
                <p className="text-xs text-gray-600">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <div className="flex flex-wrap justify-center gap-2 my-6">
          <span className="bg-kaveri-gold text-white text-sm py-1 px-3 rounded-full">100g</span>
          <span className="bg-gray-200 text-gray-700 text-sm py-1 px-3 rounded-full">200g</span>
          <span className="bg-gray-200 text-gray-700 text-sm py-1 px-3 rounded-full">500g</span>
          <span className="bg-gray-200 text-gray-700 text-sm py-1 px-3 rounded-full">1000g</span>
          <span className="bg-gray-200 text-gray-700 text-sm py-1 px-3 rounded-full">5kg</span>
          <span className="bg-gray-200 text-gray-700 text-sm py-1 px-3 rounded-full">25kg</span>
        </div>
        <button className="bg-kaveri-gold hover:bg-kaveri-brown text-white px-6 py-2 rounded-md">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default ProductFeatures;
