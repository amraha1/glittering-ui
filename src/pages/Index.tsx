import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import ProductFeature from "../components/ProductFeature";
import PopularProducts from "../components/PopularProducts";
import HeroSecondary from "../components/HeroSecondary.tsx"
import HeroThird from "../components/HeroThird.tsx"
import Blog from "../components/Blog.tsx"
import Footer from "../components/Footer.tsx"
const Index = () => {
  return (
    <div className="min-h-screen bg-jewelry-background">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <ProductFeature />
      <PopularProducts />
      <HeroSecondary />
      <Blog />
      <HeroThird />
      <Footer />
    </div>
  );
};

export default Index;