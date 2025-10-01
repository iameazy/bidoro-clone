export default function Waitlist() {
    return (
      <section className="py-20 px-4 bg-[#F5F5E8]">
        <div className="max-w-4xl mx-auto">
          
          {/* Card with lighter background */}
          <div className="bg-[#FAFAF5] rounded-[3rem] p-12 md:p-16 shadow-lg">
            
            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-bold text-center text-[#1C341A] mb-6">
              Join waitlist
            </h2>
  
            {/* Subheading */}
            <p className="text-2xl md:text-3xl text-center text-gray-800 mb-4">
              Be First to Experience <span className="font-bold">Bidoro</span>
            </p>
  
            {/* Description */}
            <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
              Get early access, exclusive perks, and be part of a new era of trust-based commerce.
            </p>
  
            {/* Form */}
            <form className="space-y-6">
              
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1C341A] text-lg"
                />
              </div>
  
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="JohnDoe@gmail.com"
                  className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1C341A] text-lg"
                />
              </div>
  
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1C341A] text-white py-4 rounded-full text-lg font-medium hover:bg-[#2A4A28] transition-colors"
              >
                Join waitlist
              </button>
  
            </form>
  
          </div>
  
        </div>
      </section>
    );
  }