'use client';

import Image from 'next/image';

export default function Features() {
  return (
    <section className="py-12 md:py-20 px-4 bg-white border-2 border-[#1C341A] rounded-[2rem] md:rounded-[3rem] mx-2 md:mx-4 my-6 md:my-8 animate-float">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left side - Features */}
          <div className="space-y-8 md:space-y-16 order-2 lg:order-1">
            
            {/* Feature 1 - Buy Smarter */}
            <div className="relative hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="inline-block bg-[#D4FF6B] px-4 md:px-6 py-2 md:py-3 -rotate-2 mb-3 md:mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-black">Buy Smarter</h3>
              </div>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                Discover budget-friendly deals, unique handmade goods, and second-hand treasures — all verified and trusted.
              </p>
            </div>

            {/* Feature 2 - Sell Clutter */}
            <div className="relative hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="inline-block bg-[#E8D4FF] px-4 md:px-6 py-2 md:py-3 rotate-1 mb-3 md:mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-black">Sell Clutter</h3>
              </div>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                Turn unused items into extra income with AI-backed listing tools and secure escrow payments.
              </p>
            </div>

            {/* Feature 3 - Support Local */}
            <div className="relative hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="inline-block bg-[#D4FF6B] px-4 md:px-6 py-2 md:py-3 -rotate-2 mb-3 md:mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-black">Support Local</h3>
              </div>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                Showcase local craftsmanship and connect with a community that values quality, authenticity, and fairness.
              </p>
            </div>

          </div>

          {/* Right side - Image with stars */}
          <div className="relative order-1 lg:order-2">
            {/* Star decorations - hidden on mobile */}
            <div className="hidden md:block absolute top-[15%] left-[10%] text-4xl md:text-6xl text-[#FFE066] z-10 animate-float">★</div>
            <div className="hidden md:block absolute top-[40%] right-[15%] text-3xl md:text-5xl text-[#FFE066] z-10 animate-float-delay">★</div>
            <div className="hidden md:block absolute bottom-[20%] left-[20%] text-2xl md:text-4xl text-[#FFE066] z-10 animate-float-delay-2">★</div>
            
            {/* Main image */}
            <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/shopping-woman.jpg" 
                alt="Woman with shopping bags" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}