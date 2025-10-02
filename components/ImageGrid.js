'use client';

import Image from 'next/image';

export default function ImageGrid() {
  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Mobile: Simple 2-column grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-square hover:scale-105 transition-transform duration-300">
            <Image src="/images/image1.jpg" alt="Vintage items" fill className="object-cover" />
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-square hover:scale-105 transition-transform duration-300">
            <Image src="/images/image2.jpg" alt="Clothing" fill className="object-cover" />
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[2/3] col-span-2 hover:scale-105 transition-transform duration-300">
            <Image src="/images/image3.jpg" alt="Phone" fill className="object-cover" />
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-square hover:scale-105 transition-transform duration-300">
            <Image src="/images/image4.jpg" alt="Baskets" fill className="object-cover" />
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-square hover:scale-105 transition-transform duration-300">
            <Image src="/images/image5.jpg" alt="Groceries" fill className="object-cover" />
          </div>
        </div>

        {/* Desktop: Complex grid layout */}
        <div className="hidden md:grid grid-cols-6 gap-3 auto-rows-[120px]">
          <div className="relative rounded-3xl overflow-hidden shadow-lg row-span-2 col-span-1 row-start-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image src="/images/image1.jpg" alt="Vintage items" fill className="object-cover" />
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg row-span-2 col-span-1 row-start-1 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image src="/images/image2.jpg" alt="Clothing" fill className="object-cover" />
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg row-span-2 col-span-1 row-start-3 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image src="/images/image4.jpg" alt="Baskets" fill className="object-cover" />
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl row-span-4 col-span-2 row-start-1 col-start-3 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image src="/images/image3.jpg" alt="Phone" fill className="object-cover" />
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg row-span-2 col-span-1 row-start-1 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image src="/images/image5.jpg" alt="Groceries" fill className="object-cover" />
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg row-span-2 col-span-1 row-start-3 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image src="/images/image6.jpg" alt="Sneakers" fill className="object-cover" />
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg row-span-2 col-span-1 row-start-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image src="/images/image1.jpg" alt="Jewelry" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}