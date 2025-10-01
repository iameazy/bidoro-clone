import Image from 'next/image';

export default function Features() {
  return (
    <section className="py-20 px-4 bg-white border-2 border-[#1C341A] rounded-[3rem] mx-4 my-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Features */}
          <div className="space-y-16">
            
            {/* Feature 1 - Buy Smarter */}
            <div className="relative">
              <div className="inline-block bg-[#D4FF6B] px-6 py-3 -rotate-2 mb-4">
                <h3 className="text-2xl font-bold text-black">Buy Smarter</h3>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                Discover budget-friendly deals, unique handmade goods, and second-hand treasures — all verified and trusted.
              </p>
            </div>

            {/* Feature 2 - Sell Clutter */}
            <div className="relative">
              <div className="inline-block bg-[#E8D4FF] px-6 py-3 rotate-1 mb-4">
                <h3 className="text-2xl font-bold text-black">Sell Clutter</h3>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                Turn unused items into extra income with AI-backed listing tools and secure escrow payments.
              </p>
            </div>

            {/* Feature 3 - Support Local */}
            <div className="relative">
              <div className="inline-block bg-[#D4FF6B] px-6 py-3 -rotate-2 mb-4">
                <h3 className="text-2xl font-bold text-black">Support Local</h3>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                Showcase local craftsmanship and connect with a community that values quality, authenticity, and fairness.
              </p>
            </div>

          </div>

          {/* Right side - Image with stars */}
          <div className="relative">
            {/* Star decorations */}
            <div className="absolute top-[15%] left-[10%] text-6xl text-[#FFE066] z-10">★</div>
            <div className="absolute top-[40%] right-[15%] text-5xl text-[#FFE066] z-10">★</div>
            <div className="absolute bottom-[20%] left-[20%] text-4xl text-[#FFE066] z-10">★</div>
            
            {/* Main image */}
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
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