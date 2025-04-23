import React from "react";

const RelatedProducts = () => {
  const products = [
    {
      name: "Natural Henna Powder",
      image: "/mehndi-powder-pack.jpg",
      description: "100% Pure & Natural Henna Powder for Hair & Body Art"
    },
    {
      name: "Henna Cones",
      image: "/mehndi-cone-pack.jpg",
      description: "Ready to Use Natural Henna Cones for Instant Application"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-playfair text-center mb-8">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm group">
              <div className="relative h-48 overflow-hidden rounded-md">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="font-medium text-lg mb-2 mt-4">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
