'use client';

import Image from 'next/image';

export default function ImageGrid() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-6 gap-3 auto-rows-[120px]">
          
          {/* Far left - Vintage market (shorter) */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg row-span-2 col-span-1 row-start-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image src="/images/image1.jpg" alt="Vintage items" fill className="object-cover" />
          </div>
          
          {/* Second column top - Clothing */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg row-span-2 col-span-1 row-start-1 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image src="/images/image2.jpg" alt="Clothing" fill className="object-cover" />
          </div>
          
          {/* Second column bottom - Wooden baskets */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg row-span-2 col-span-1 row-start-3 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image src="/images/image4.jpg" alt="Baskets" fill className="object-cover" />
          </div>
          
          {/* CENTER - Phone (large focal point) */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl row-span-4 col-span-2 row-start-1 col-start-3 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image src="/images/image3.jpg" alt="Phone" fill className="object-cover" />
          </div>
          
          {/* Fourth column top - Groceries */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg row-span-2 col-span-1 row-start-1 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image src="/images/image5.jpg" alt="Groceries" fill className="object-cover" />
          </div>
          
          {/* Fourth column bottom - Sneakers */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg row-span-2 col-span-1 row-start-3 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image src="/images/image6.jpg" alt="Sneakers" fill className="object-cover" />
          </div>
          
          {/* Far right - Jewelry (shorter) */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg row-span-2 col-span-1 row-start-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image src="/images/image1.jpg" alt="Jewelry" fill className="object-cover" />
          </div>
          
        </div>
      </div>
    </section>
  );
}