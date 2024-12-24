import React from 'react';

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-6 py-3 text-sm font-medium transition-all duration-200",
        "hover:translate-y-[-2px]",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "secondary" &&
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        className
      )}
      {...props}
    />
  );
};
const HeroSecondary = () => {
 const BottomSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden cursor-pointer">
      {/* Background blob */}
      <div className="blob w-[600px] h-[600px] right-[-200px] top-[-200px]" />
      
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 animate-fade-up">
            <h2 className="text-[#8D5C42] uppercase tracking-wider text-md font-medium mb-4">
              Simply Shimmering
            </h2>
            <h1 className="font-serif text-md lg:text-5xl mb-6 leading-tight">
              Something shiny, everything you
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              Quisque accumsan facilisiseleifend. Integer ultricies leo eros, non molestie lorem posuere eget. Fusce eget iaculis lorem. Phasellus ante metus, sodales pulvinar lectus in.
            </p>
            <a>Get started</a>
            <div style={{ height:'1.6px',width:'15%', background:'black'}}></div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 animate-fade-in">
              <img
                src="/lovable-uploads/image5.jpg"
                alt="Elegant jewelry"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            {/* Decorative blob */}
            <div className="blob w-[400px] h-[400px] left-[-100px] bottom-[-100px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
  return (
    <div className="min-h-screen bg-[#D5CBBF] p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left Column */}
          <div className="relative">
            <img 
              src="/lovable-uploads/image4.jpg" 
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
            <div className="p-8 rounded-lg">
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
                src="/lovable-uploads/image5.jpg" 
                alt="Ring detail"
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <img 
                src="/lovable-uploads/image9.jpg" 
                alt="Bracelet detail"
                className="w-full h-[200px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <BottomSection />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 p-8 rounded-lg">
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
          <div className="relative">
            <img 
              src="/lovable-uploads/image4.jpg" 
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

        </div> */}
      </div>
    </div>
  );
};

export default HeroSecondary;