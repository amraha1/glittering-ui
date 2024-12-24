import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-jewelry-background">
      <div style={{background:'#CFC5B8'}} className="bg-[#CFC5B8]-text text-[#696968] text-sm py-2">
        <p className="text-center">Black Friday | Hundreds of brands, up to 50% off!</p>
      </div>
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif text-jewelry-text">
            <a href="/" className="flex items-center">
              <span className="font-normal">jewellry</span>
              <span className="font-bold">Wear</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-jewelry-text hover:text-jewelry-accent transition-colors">Home</a>
            <a href="/pages" className="text-jewelry-text hover:text-jewelry-accent transition-colors">Pages</a>
            <a href="/portfolio" className="text-jewelry-text hover:text-jewelry-accent transition-colors">Portfolio</a>
            <a href="/blog" className="text-jewelry-text hover:text-jewelry-accent transition-colors">Blog</a>
            <a href="/shop" className="text-jewelry-text hover:text-jewelry-accent transition-colors">Shop</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:text-jewelry-accent transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 hover:text-jewelry-accent transition-colors">
              <User size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-jewelry-text"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-jewelry-background border-t border-jewelry-light p-4 z-50">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-jewelry-text hover:text-jewelry-accent transition-colors">Home</a>
              <a href="/pages" className="text-jewelry-text hover:text-jewelry-accent transition-colors">Pages</a>
              <a href="/portfolio" className="text-jewelry-text hover:text-jewelry-accent transition-colors">Portfolio</a>
              <a href="/blog" className="text-jewelry-text hover:text-jewelry-accent transition-colors">Blog</a>
              <a href="/shop" className="text-jewelry-text hover:text-jewelry-accent transition-colors">Shop</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;