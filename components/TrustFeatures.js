'use client';

export default function TrustFeatures() {
  return (
    <section className="py-20 px-4 bg-[#F5F5E8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center text-[#1C341A] mb-16">
          Trust Features
        </h2>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 - AI Verification */}
          <div className="bg-white rounded-3xl border-2 border-[#1C341A] p-12 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
            {/* AI Chip Icon - Only this floats */}
            <div className="w-24 h-24 mb-6 flex items-center justify-center animate-float">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <rect x="15" y="15" width="70" height="70" rx="8" stroke="#1C341A" strokeWidth="3" fill="none"/>
                <rect x="10" y="35" width="10" height="4" fill="#1C341A"/>
                <rect x="10" y="45" width="10" height="4" fill="#1C341A"/>
                <rect x="10" y="55" width="10" height="4" fill="#1C341A"/>
                <rect x="80" y="35" width="10" height="4" fill="#1C341A"/>
                <rect x="80" y="45" width="10" height="4" fill="#1C341A"/>
                <rect x="80" y="55" width="10" height="4" fill="#1C341A"/>
                <rect x="35" y="10" width="4" height="10" fill="#1C341A"/>
                <rect x="45" y="10" width="4" height="10" fill="#1C341A"/>
                <rect x="55" y="10" width="4" height="10" fill="#1C341A"/>
                <rect x="35" y="80" width="4" height="10" fill="#1C341A"/>
                <rect x="45" y="80" width="4" height="10" fill="#1C341A"/>
                <rect x="55" y="80" width="4" height="10" fill="#1C341A"/>
                <text x="50" y="62" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#1C341A">AI</text>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1C341A] mb-4">AI Verification</h3>
            <p className="text-lg text-gray-800">Protects against scams</p>
          </div>

          {/* Card 2 - Escrow Payment */}
          <div className="bg-white rounded-3xl border-2 border-[#1C341A] p-12 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
            {/* Shield with Lock Icon - Only this floats */}
            <div className="w-24 h-24 mb-6 flex items-center justify-center animate-float-delay">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                {/* Shield shape */}
                <path d="M50 10 L20 25 L20 50 C20 70 50 90 50 90 C50 90 80 70 80 50 L80 25 Z" fill="#1C341A"/>
                {/* Lock body */}
                <rect x="40" y="50" width="20" height="20" fill="white" rx="2"/>
                {/* Lock shackle */}
                <path d="M43 50 L43 43 C43 39 46 36 50 36 C54 36 57 39 57 43 L57 50" stroke="white" strokeWidth="3" fill="none"/>
                {/* Keyhole */}
                <circle cx="50" cy="58" r="3" fill="#1C341A"/>
                <rect x="48" y="58" width="4" height="6" fill="#1C341A"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1C341A] mb-4">Escrow Payment</h3>
            <p className="text-lg text-gray-800">Safe money handling until delivery</p>
          </div>

          {/* Card 3 - Shop with Confidence */}
          <div className="bg-white rounded-3xl border-2 border-[#1C341A] p-12 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
            {/* Handshake Icon - Only this floats */}
            <div className="w-24 h-24 mb-6 flex items-center justify-center animate-float-delay-2">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                {/* Left hand/arm */}
                <rect x="10" y="45" width="25" height="35" fill="#1C341A" rx="3"/>
                {/* Right hand/arm */}
                <rect x="65" y="45" width="25" height="35" fill="#1C341A" rx="3"/>
                {/* Interlocked fingers area */}
                <path d="M35 50 L45 40 L55 50 L65 40" stroke="#1C341A" strokeWidth="6" strokeLinecap="round"/>
                <path d="M35 55 L45 45 L55 55 L65 45" stroke="#1C341A" strokeWidth="6" strokeLinecap="round"/>
                {/* Connection between hands */}
                <ellipse cx="50" cy="52" rx="18" ry="12" fill="#1C341A"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1C341A] mb-4">Shop and sell with confidence</h3>
            <p className="text-lg text-gray-800">Community Trust Scores</p>
          </div>

        </div>
      </div>
    </section>
  );
}