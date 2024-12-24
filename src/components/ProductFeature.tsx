const ProductFeature = () => {
  return (
    <div className="bg-jewelry-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full pt-[100%] rounded-full overflow-hidden">
              <img
                src="/lovable-uploads/earing2.png"
                alt="Elegant Jewelry"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-jewelry-accent uppercase tracking-wider">DAZZLE YOURSELF</p>
            <h2 className="text-4xl md:text-5xl font-serif text-jewelry-text leading-tight">
              Adore with the ethnicity
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus, dolor nec placerat scelerisque, urna libero lacinia nisi, viverra augue turpis eget dui. Suspendisse pellentesque iaculis venenatis.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-jewelry-accent"></span>
                <span className="text-gray-600">Donec feugiat ipsum sed enim ullamcorper</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-jewelry-accent"></span>
                <span className="text-gray-600">Nullam fermentum vel odio ac congue</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-jewelry-accent"></span>
                <span className="text-gray-600">Praesent tincidunt ante auctor tellus dictum</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-jewelry-accent"></span>
                <span className="text-gray-600">Suspendisse posuere vel massa quis sodales</span>
              </li>
            </ul>

            <button className="bg-jewelry-text text-white px-8 py-3 rounded-full hover:bg-jewelry-accent transition-colors">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;