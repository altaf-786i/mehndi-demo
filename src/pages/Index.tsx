
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductInfo from "@/components/ProductInfo";
import ProductFeatures from "@/components/ProductFeatures";
import HowToUse from "@/components/HowToUse";
import WhyChoose from "@/components/WhyChoose";
import RelatedProducts from "@/components/RelatedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductInfo />
        <ProductFeatures />
        <WhyChoose />
        <HowToUse />
        <RelatedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
