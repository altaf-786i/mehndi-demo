
const ProductInfo = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-playfair mb-4">Kaveri Mehendi Powder</h1>
        <p className="text-lg mb-6">Now pamper yourself with Kaveri Mehendi powder</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <h2 className="font-bold mb-2">Kaveri Natural Powder - 100% natural & herbal product!</h2>
              <p className="text-sm leading-relaxed">
                Kaveri henna is the finest quality of henna powder manufactured from the leaves of the Lawsonia Inermis plant. This plant is grown in regions with optimal conditions for the development of the highest quality henna plants. The powder is 100% pure and natural, containing no additives or chemicals - just pure Lawsonia.
              </p>
            </div>
            
            <div className="mb-6">
              <h2 className="font-bold mb-2">When you're feeling dull, make a plan with a trusty helping hand.</h2>
              <p className="text-sm leading-relaxed">
                Hair beauty is more than visual appeal—it's about strength, shine, texture, and overall hair health. Having healthy hair minimizes hair issues like breakage, falling strands, and split ends, which can significantly affect your confidence and self-esteem.
              </p>
            </div>
            
            <div className="mb-6">
              <h2 className="font-bold mb-2">Indulge in the care of your hair using natural means to restore a vibrant allure.</h2>
              <p className="text-sm leading-relaxed">
                Balance the pH levels of your hair, restore its natural shine, and cultivate strong, long, and healthy locks. Embrace a unique addition to your hair care routine that's filled with natural ingredients.
              </p>
            </div>
            
            <div>
              <h2 className="font-bold mb-2">We have all the truth to say, duty about kaveri powder.</h2>
              <p className="text-sm leading-relaxed">
                It's full of unique properties that are delivered directly to your roots, keeping your hair healthy, nourished, strong, and silky smooth. For the first time, we have creating something good than any other natural coloring agent for hair.
              </p>
            </div>
          </div>
          
          <div>
            <img 
              src="/mehndi-powder-image.jpg" 
              alt="Kaveri Mehndi Powder" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        
        <div className="text-center mb-12">
          <p className="italic text-gray-600">"The best natural alternative of hair dye"</p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-playfair mb-4">Long-lasting & Healthy Dye - Kaveri Mehndi Powder</h2>
          <p className="mb-4 text-sm leading-relaxed">
            Finding a natural and clean solution for hair, you need to discover it's natural charm. Kaveri mehndi powder is now emerging as a major hair care solution. It is accessible worldwide with ease. So many people are converting out of their habits of using chemicals in hair dyeing. In today, we'll guide you through the benefits of henna and the best practices, making your transitioning to natural hair coloring as good as possible.
          </p>
          <p className="text-sm leading-relaxed">
            Is henna really hair dye that tints your hair? Yes, but in a more nourishing way. The main component and active element in henna is called lawsone. It binds naturally to the proteins in hair strands, similar to acidic dyes. The result is a beautiful botanical pigment that truly enhances the natural color of your hair.
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            If given a hue that closely resembles, natural-derived lawsone creates optimal results for vibrant hair color. After multiple applications, expect more brilliantly colored and richly nourished hair with a radiant sheen free from artificial chemicals.
          </p>
        </div>
        
        {/* Additional sections could be added here as needed */}
      </div>
    </section>
  );
};

export default ProductInfo;
