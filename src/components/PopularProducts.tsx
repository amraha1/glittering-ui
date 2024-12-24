
import React from 'react';
import { Button } from './ui/button';

const PopularProducts = () => {
  const products = [
    {
      id: 1,
      name: "Light up the Fingers with our Ring",
      price: "£25.99",
      image: "/lovable-uploads/finer.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Smile and wear our Ring Bracelet",
      price: "£85.99",
      image: "/lovable-uploads/image8.jpg",
      rating: 4
    },
    {
      id: 3,
      name: "Bright, Bold, Beautiful Necklets",
      price: "£75.99",
      image: "/lovable-uploads/neclets.jpg",
      rating: 5
    },
    {
      id: 4,
      name: "A necklace made to touch your soul",
      price: "£55.99",
      image: "/lovable-uploads/neclets.jpg",
      rating: 3
    },
    {
      id: 5,
      name: "First class craftsmanship For Ring",
      price: "£25.99",
      image: "/lovable-uploads/earing.jpg",
      rating: 4
    },
    {
      id: 6,
      name: "Fashion and styled Lock It",
      price: "£75.99",
      image: "/lovable-uploads/image10.jpg",
      rating: 5
    }
  ];
  type ProductCardProps = {
    name: string;
    price: string;
    image: string;
    rating: number;
  };
  
  const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, rating }) => {
       return (
      <div className="max-w-sm  p-4 rounded-lg">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4">
          <img 
            src={image}
            alt="Elegant necklace on model"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-serif text-textDark mb-2">{name}</h2>
        <div className="flex items-center mb-3">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 fill-[#88553A]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-xl font-serif text-[#88553A] mb-4">£{price}</p>
        <a 
          className="w-full  hover:bg-accent/90 text-[#706F6E]"
        >
          Add to cart
        </a>
      </div>
    );
  };
  
  return (
    <div className="bg-jewelry-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-jewelry-text uppercase tracking-wider mb-2">JEWELRY</p>
          <h2 className="text-3xl font-serif text-jewelry-text mb-4">Most popular</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <ProductCard name={product.name} price={product.price} image={product.image} rating={product.rating} />
              {/* <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-jewelry-text font-serif text-lg mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-jewelry-text font-medium">{product.price}</span>
                <div className="flex gap-1">
                  {[...Array(product.rating)].map((_, i) => (
                    <span key={i} className="text-jewelry-accent">★</span>
                  ))}
                </div>
              </div>
              <button className="w-full mt-4 py-2 px-4 bg-jewelry-text text-white hover:bg-jewelry-accent transition-colors rounded-sm text-sm">
                Add to cart
              </button> */}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-jewelry-accent text-white px-8 py-3 rounded-full hover:bg-jewelry-text transition-colors">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;