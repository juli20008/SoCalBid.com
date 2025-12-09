import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 z-10">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Auctions: Online <br />
            <span className="text-teal-300">New, Returns</span> and <br />
            Canceled Orders
          </h1>
          <p className="text-lg lg:text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
            AUCTION INCLUDES: Electronics, tools, toys, Beauty products, pet supplies, housewares, clothing and much more!
            Join SoCalBid today.
          </p>
          <a 
            href="#auctions"
            className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded shadow-lg hover:bg-teal-50 hover:scale-105 transition-transform duration-200"
          >
            View the Auction
          </a>
        </div>

        {/* Hero Image Mockup */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end z-10">
           {/* 
             Simulating the phone/laptop mockup from the reference. 
             Using a high-quality tech placeholder.
           */}
           <div className="relative">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-teal-500 opacity-30 blur-2xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="Auction App Interface" 
                className="relative rounded-lg shadow-2xl border-4 border-white/20 max-w-full w-[500px] h-auto object-cover transform rotate-1 hover:rotate-0 transition-transform duration-500"
              />
           </div>
        </div>
      </div>
      
      {/* Decorative Wave at bottom (optional SVG) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};