import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen mx-auto bg-cream">
      {/* Existing Hero Section */}
      <div className="p-8 md:p-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Left Column */}
            <div className="relative">
              <img 
                src="/lovable-uploads/3bc97b98-5448-4b0b-93cc-a887385fa6bc.png" 
                alt="Earring closeup"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
              />
              <div className="mt-4 p-4">
                <p className="text-textDark/80 italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white/50 p-8 rounded-lg">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                  Be dazzled by your soul stone
                </h2>
                <p className="text-textDark/80">
                  It's always better when it's natural. Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <img 
                  src="/lovable-uploads/3bc97b98-5448-4b0b-93cc-a887385fa6bc.png" 
                  alt="Ring detail"
                  className="w-full h-[200px] object-cover rounded-lg"
                />
                <img 
                  src="/lovable-uploads/3bc97b98-5448-4b0b-93cc-a887385fa6bc.png" 
                  alt="Bracelet detail"
                  className="w-full h-[200px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div  className="max-w-2xl mx-auto text-center py-16">
            <div className="text-4xl font-serif text-textDark/80 mb-8">
              "
            </div>
            <p className="text-lg text-textDark/70 italic mb-8">
              Mauris faucibus ante quis arcu pellentesque congue. In faucibus ipsum libero hendrerit 
              euismod. Vivend quis mauris consequat, sollicitudin arcu ac, mattis neque. Aenean porta ligula 
              condimentum id sapien quis, dictior.
            </p>
            <div className="flex items-center justify-center gap-3">
              <img 
                src="/lovable-uploads/8b8f9502-45c8-4671-9ad1-259e2e99f9da.png" 
                alt="James Smith"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-medium text-textDark">James Smith</p>
                <p className="text-sm text-textDark/60">MANAGER</p>
              </div>
            </div>
          </div>

          {/* Recent Blog Section */}
          <div className="py-16">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wider text-textDark/60 mb-2">OUR BLOG</p>
              <h2 className="text-3xl font-serif text-textDark">Recent from jewear</h2>
              <p className="text-textDark/60 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus, dolor nec
                gravida sollicitudin, amet lacinia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Blog Card 1 */}
              <div className="group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src="/lovable-uploads/3bc97b98-5448-4b0b-93cc-a887385fa6bc.png"
                    alt="Never miss the moments"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-textDark/60 mb-2">JEWELRY</p>
                <h3 className="text-xl font-serif mb-3">Never miss the moments</h3>
                <p className="text-textDark/70 text-sm">
                  Sed quia fugit graliquam eo, eos sapiente exercius sed
                  ipsum sapien dolor sit amet, Lorem ipsum dolor sit
                  amet, consetetur sadipscing elit, sed diam nonumy.
                </p>
              </div>

              {/* Blog Card 2 */}
              <div className="group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src="/lovable-uploads/3bc97b98-5448-4b0b-93cc-a887385fa6bc.png"
                    alt="Style by yourself collection"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-textDark/60 mb-2">WATCH</p>
                <h3 className="text-xl font-serif mb-3">Style by yourself collection</h3>
                <p className="text-textDark/70 text-sm">
                  Sed quia fugit graliquam eo, eos sapiente exercius sed
                  ipsum sapien dolor sit amet, Lorem ipsum dolor sit
                  amet, consetetur sadipscing elit, sed diam nonumy.
                </p>
              </div>

              {/* Blog Card 3 */}
              <div className="group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src="/lovable-uploads/3bc97b98-5448-4b0b-93cc-a887385fa6bc.png"
                    alt="Our unique keys to gold"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-textDark/60 mb-2">EARRING</p>
                <h3 className="text-xl font-serif mb-3">Our unique keys to gold</h3>
                <p className="text-textDark/70 text-sm">
                  Sed quia fugit graliquam eo, eos sapiente exercius sed
                  ipsum sapien dolor sit amet, Lorem ipsum dolor sit
                  amet, consetetur sadipscing elit, sed diam nonumy.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-[#8B7355] text-white rounded-full hover:bg-[#8B7355]/90 transition-colors">
                View more
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bg-white/50 p-8 rounded-lg">
            <h3 className="text-2xl font-serif mb-4">
              Something shiny, everything you
            </h3>
            <p className="text-textDark/80 max-w-xl">
              Delectus accusamus incididuntamet, aliquip dolore ea 
              ipsum cupidatat ipsum exercitation. Fugiat sunt 
              mollit lorem. Proident sint minim, voluptate pulvinar 
              sit eu in adipisicing congue lorem.
            </p>
            <button className="mt-6 px-8 py-3 bg-textDark text-white rounded-full 
                           hover:bg-textDark/90 transition-colors">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;