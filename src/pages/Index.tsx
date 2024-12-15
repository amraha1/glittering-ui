import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import ProductFeature from "../components/ProductFeature";
import PopularProducts from "../components/PopularProducts";

const Index = () => {
  return (
    <div className="min-h-screen bg-jewelry-background">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <ProductFeature />
      <PopularProducts />
    </div>
  );
};

export default Index;