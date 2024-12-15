const PopularProducts = () => {
  const products = [
    {
      id: 1,
      name: "Light up the Fingers with our Ring",
      price: "£25.99",
      image: "/lovable-uploads/c899b648-a587-447b-98ad-479ddf86cf24.png",
      rating: 5
    },
    {
      id: 2,
      name: "Smile and wear our Ring Bracelet",
      price: "£85.99",
      image: "/lovable-uploads/c899b648-a587-447b-98ad-479ddf86cf24.png",
      rating: 4
    },
    {
      id: 3,
      name: "Bright, Bold, Beautiful Necklets",
      price: "£75.99",
      image: "/lovable-uploads/c899b648-a587-447b-98ad-479ddf86cf24.png",
      rating: 5
    },
    {
      id: 4,
      name: "A necklace made to touch your soul",
      price: "£55.99",
      image: "/lovable-uploads/c899b648-a587-447b-98ad-479ddf86cf24.png",
      rating: 3
    },
    {
      id: 5,
      name: "First class craftsmanship For Ring",
      price: "£25.99",
      image: "/lovable-uploads/c899b648-a587-447b-98ad-479ddf86cf24.png",
      rating: 4
    },
    {
      id: 6,
      name: "Fashion and styled Lock It",
      price: "£75.99",
      image: "/lovable-uploads/c899b648-a587-447b-98ad-479ddf86cf24.png",
      rating: 5
    }
  ];

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
              <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100">
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
              </button>
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