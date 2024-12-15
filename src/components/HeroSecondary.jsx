import React from 'react';

const HeroSecondary = () => {
  return (
    <div className="min-h-screen bg-cream p-8 md:p-16">
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
  );
};

export default HeroSecondary;