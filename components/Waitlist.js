export default function Waitlist() {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#F5F5E8]">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-[#FAFAF5] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-lg">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#1C341A] mb-4 md:mb-6">
            Join waitlist
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl text-center text-gray-800 mb-3 md:mb-4">
            Be First to Experience <span className="font-bold">Bidoro</span>
          </p>

          <p className="text-center text-gray-700 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Get early access, exclusive perks, and be part of a new era of trust-based commerce.
          </p>

          <form className="space-y-4 md:space-y-6">
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1C341A] text-base md:text-lg"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="JohnDoe@gmail.com"
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1C341A] text-base md:text-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1C341A] text-white py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#2A4A28] transition-colors"
            >
              Join waitlist
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}