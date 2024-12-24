import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="mx-[10%] grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 ">
      <div className="rounded-lg overflow-hidden">
        <img 
          src="/lovable-uploads/imag1.png"
          alt="Jewelry model"
          style={{borderStartEndRadius:'40%', borderStartStartRadius:'45%', borderRadius:'45% 45% 0 0'}}
          className="w-full h-[600px] object-cover "
        />
      </div>
      <div className="space-y-6 px-4 md:px-8">
        <p className="text-sm uppercase tracking-wider font-extrabold text-[#9F7760]">UNIQUE, AS YOU</p>
        <h1 className="text-4xl md:text-5xl font-serif text-textDark">
          Brilliance for your shine
        </h1>
        <p className="text-textDark/70 text-lg">
          Quisque accumsan facilisiselefend. Integer ultricies leo eros, non molestie
          lorem posuere eget. Fusce eget laculis lorem. Phasellus ante metus,
          sodales pulvinar lectus in, pellentesque congue tortor
        </p>
        <Button 
          className="bg-[#8B7355] hover:bg-[#8B7355]/90 text-white rounded-full px-8"
        >
          Shop now
        </Button>
      </div>
    </div>
  );
};

export default Hero;