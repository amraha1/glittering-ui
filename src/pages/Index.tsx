import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-jewelry-background">
      <Navbar />
      <Hero />
      <ProductShowcase />
    </div>
  );
};

export default Index;