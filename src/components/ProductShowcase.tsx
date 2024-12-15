const ProductShowcase = () => {
  return (
    <div className="bg-jewelry-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-jewelry-accent uppercase tracking-wider mb-2">SHINE THE DREAMS</p>
          <h2 className="text-4xl md:text-5xl font-serif text-jewelry-text mb-4">Style with precious simplicity</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus, dolor nec placerat scelerisque, urna libero lacinia nisi viverra augue turpis eget dui.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-6">
              <img
                src="/lovable-uploads/d526693c-534b-4cfa-963b-87ad74946292.png"
                alt="Neck Locket"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <h3 className="font-serif text-xl text-jewelry-text mb-3">Neck Locket</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus, dolor nec placerat scelerisque, urna libero lacinia nisi.
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-6">
              <img
                src="/lovable-uploads/d526693c-534b-4cfa-963b-87ad74946292.png"
                alt="Earrings"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <h3 className="font-serif text-xl text-jewelry-text mb-3">Earrings</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus, dolor nec placerat scelerisque, urna libero lacinia nisi.
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-6">
              <img
                src="/lovable-uploads/d526693c-534b-4cfa-963b-87ad74946292.png"
                alt="Wrist Breslet"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <h3 className="font-serif text-xl text-jewelry-text mb-3">Wrist Breslet</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus, dolor nec placerat scelerisque, urna libero lacinia nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;