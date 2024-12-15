import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 bg-cream">
      <div className="rounded-lg overflow-hidden">
        <img 
          src="/lovable-uploads/a4d7174a-9814-4a16-b526-fd8b6fad0949.png"
          alt="Jewelry model"
          className="w-full h-[500px] object-cover"
        />
      </div>
      <div className="space-y-6 px-4 md:px-8">
        <p className="text-sm uppercase tracking-wider text-textDark/60">UNIQUE, AS YOU</p>
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