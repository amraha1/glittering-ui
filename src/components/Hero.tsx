const Hero = () => {
  return (
    <div className="bg-jewelry-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-lg text-jewelry-accent uppercase tracking-wider">Shine Bright</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-jewelry-text leading-tight">
              Good Jewelry for the Best Occasion
            </h1>
            <p className="text-gray-600 max-w-lg">
              Discover our curated collection of timeless pieces that make every moment special. 
              From elegant earrings to stunning rings, find the perfect jewelry to complement your style.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center">
                <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                  <img
                    src="/lovable-uploads/imag1.png"
                    alt="Circle Earrings"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-jewelry-text">Circle Earrings</h3>
              </div>
              <div className="text-center">
                <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                  <img
                    src="/lovable-uploads/image5.jpg"
                    alt="Beautiful Rings"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-jewelry-text">Beautiful Rings</h3>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full pt-[125%] rounded-full overflow-hidden">
              <img
                src="/lovable-uploads/image3.jpg"
                alt="Featured Jewelry"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;