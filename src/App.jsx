import { useState } from 'react';
import image6 from './assets/image6.jpeg';
import image2 from './assets/image2.jpeg';
import image3 from './assets/image3.jpeg';
import image4 from './assets/image4.jpeg';
import image5 from './assets/image5.jpeg';
export default function JewelleryShopWebsite() {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const goldPrice24K = '₹158595';
  const goldPrice22K = '₹144861';
  const silverPrice = '₹279';
  const lastUpdated = 'Updated just now';
  const collections = [
    {
  title: 'Gold Collection',
  image: image6,
  description: 'Elegant gold necklaces, bangles, rings, and bridal sets.',
  items: [
    'Gold Rings',
    'Bridal Necklaces',
    'Gold Bangles',
    'Traditional Earrings',
    'Pendant Sets',
    'Daily Wear Jewellery',
  ],
  gallery: [
    image2,
    image6,
    image5,
    image4,
    image3,
  ],
  context:
    'Our gold collection showcases timeless craftsmanship with elegant necklace sets, bridal jewellery, and handcrafted traditional designs made for weddings, festivals, and memorable celebrations.',
},
    {
      title: 'Silver Collection',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
      description: 'Modern silver jewellery for daily wear and gifting.',
      items: ['Silver Rings', 'Silver Chains', 'Bracelets', 'Silver Anklets', 'Gift Articles', 'Daily Wear Sets'],
    },
    {
      title: 'Bridal Collection',
      image: 'https://images.unsplash.com/photo-1627293509201-cd0c780043e6?q=80&w=1200&auto=format&fit=crop',
      description: 'Traditional bridal jewellery sets crafted for weddings and grand occasions.',
      items: ['Kundan Sets', 'Bridal Chokers', 'Heavy Necklaces', 'Wedding Bangles', 'Designer Earrings', 'Reception Jewellery'],
    },
    {
      title: 'Bangles & Bracelets',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1200&auto=format&fit=crop',
      description: 'Stylish bangles and bracelets perfect for festive and daily wear.',
      items: ['Gold Bangles', 'Diamond Bracelets', 'Silver Kada', 'Designer Bracelets', 'Couple Bracelets', 'Kids Bangles'],
    },
    {
      title: 'Necklace Collection',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
      description: 'Designer necklaces crafted with premium gold and diamonds.',
      items: ['Long Necklaces', 'Diamond Necklaces', 'Temple Necklaces', 'Modern Chokers', 'Pearl Sets', 'Wedding Necklaces'],
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9966a19e/images/hi-res/5138182AZABAP1_1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <nav className="relative z-10 flex items-center justify-between px-8 py-6 text-white">
          <h1 className="text-3xl font-bold tracking-wide">Kadamb Jewellers</h1>

          <div className="hidden gap-8 text-sm md:flex">
            <a href="#collections" className="hover:text-yellow-300 transition">Collections</a>
            <a href="#about" className="hover:text-yellow-300 transition">About</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 flex h-[75vh] items-center justify-center px-6 text-center text-white">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-300">
              Luxury Jewellery Collection
            </p>

            <h2 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Timeless Elegance
            </h2>

            <p className="mb-8 text-lg text-stone-200 md:text-xl">
              Discover handcrafted gold, diamond, and silver jewellery designed for every special occasion.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#collections"
                className="rounded-2xl bg-yellow-500 px-8 py-4 text-lg font-semibold text-black shadow-lg transition hover:scale-105"
              >
                Explore Collection
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-black"
              >
                Visit Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Live Gold & Silver Prices */}
      <section className="bg-gradient-to-r from-yellow-100 via-white to-stone-100 px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-700">
              Live Market Rates
            </p>
            <h3 className="mt-3 text-4xl font-bold text-stone-900">
              Today's Gold & Silver Prices
            </h3>
            <p className="mt-4 text-stone-600">
              Stay updated with the latest jewellery market prices.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-2xl border border-yellow-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-yellow-600">
                    Gold Price
                  </p>
                  <h4 className="mt-3 text-5xl font-bold text-stone-900">
                    {goldPrice24K}
                  </h4>
                  <div className="mt-3 space-y-2">
                    <p className="text-stone-500">24K Gold • Per 10 grams</p>
                    <div className="rounded-2xl bg-yellow-50 px-4 py-3">
                      <p className="text-sm font-medium text-yellow-700">22K Gold</p>
                      <p className="mt-1 text-2xl font-bold text-stone-900">
                        {goldPrice22K}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-full bg-yellow-100 p-5 text-4xl">
                  🪙
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between rounded-2xl bg-yellow-50 px-5 py-4">
                <span className="font-medium text-stone-700">Market Status</span>
                <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                  Live
                </span>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-2xl border border-stone-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                    Silver Price
                  </p>
                  <h4 className="mt-3 text-5xl font-bold text-stone-900">
                    {silverPrice}
                  </h4>
                  <p className="mt-2 text-stone-500">Per gram</p>
                </div>

                <div className="rounded-full bg-stone-100 p-5 text-4xl">
                  ✨
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between rounded-2xl bg-stone-100 px-5 py-4">
                <span className="font-medium text-stone-700">Last Updated</span>
                <span className="text-sm font-semibold text-stone-800">
                  {lastUpdated}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-stone-500">
            * Prices are indicative and may vary according to market conditions.
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="px-6 py-20 md:px-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-600">
            Our Collections
          </p>
          <h3 className="mt-3 text-4xl font-bold">Jewellery Crafted With Passion</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h4 className="mb-3 text-2xl font-semibold">{item.title}</h4>
                <p className="text-stone-600">{item.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                    Rings
                  </span>
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-sm font-medium text-stone-700">
                    Necklaces
                  </span>
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                    Earrings
                  </span>
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-sm font-medium text-stone-700">
                    Bracelets
                  </span>
                </div>

                <button
                  onClick={() => setSelectedCollection(item)}
                  className="mt-6 w-full rounded-2xl bg-stone-900 px-5 py-3 font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
                >
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedCollection && (
        <section className="bg-stone-100 px-6 py-20 md:px-16">
          <div className="mx-auto max-w-6xl rounded-3xl bg-white p-10 shadow-2xl">
            <div className="grid gap-10 md:grid-cols-2">
              <img
                src={selectedCollection.image}
                alt={selectedCollection.title}
                className="h-full rounded-3xl object-cover shadow-xl"
              />

              <div>
                <div className="flex items-center justify-between">
                  <div>
                    
                    <h3 className="mt-3 text-5xl font-bold text-stone-900">
                      {selectedCollection.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedCollection(null)}
                    className="rounded-full bg-stone-200 px-4 py-2 text-sm font-semibold hover:bg-stone-300"
                  >
                    Close
                  </button>
                </div>

                <p className="mt-6 text-lg text-stone-600">
                  {selectedCollection.description}
                </p>

                <p className="mt-8 rounded-2xl bg-yellow-50 p-5 text-lg leading-relaxed text-stone-700">
                  {selectedCollection.context}
                </p>

                {selectedCollection.gallery && (
                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {selectedCollection.gallery.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt="Gold Jewellery"
                        className="h-64 w-full rounded-3xl object-cover shadow-lg transition hover:scale-[1.02]"
                      />
                    ))}
                  </div>
                )}

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {selectedCollection.items.map((product) => (
                    <div
                      key={product}
                      className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 font-medium text-stone-800 shadow-sm"
                    >
                      ✨ {product}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section id="about" className="bg-stone-900 px-6 py-20 text-white md:px-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img
            src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1ea424dd/images/hi-res/5110692ZWAAA00_1.jpg"
            alt="Jewellery showroom"
            className="rounded-3xl shadow-2xl"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              About Us
            </p>

            <h3 className="mt-4 text-4xl font-bold leading-tight">
              Bringing Luxury & Tradition Together
            </h3>

            <p className="mt-6 text-lg text-stone-300">
              At Kadamb Jewellers, we create jewellery that celebrates tradition, elegance, and craftsmanship. Every piece is designed with precision and passion to make your moments unforgettable.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5">
                <h4 className="text-3xl font-bold text-yellow-400">12+</h4>
                <p className="mt-2 text-stone-300">Years of Experience</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <h4 className="text-3xl font-bold text-yellow-400">5000+</h4>
                <p className="mt-2 text-stone-300">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-2xl">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-600">
                Contact Us
              </p>

              <h3 className="mt-4 text-4xl font-bold">
                Visit Our Jewellery Store
              </h3>

              <p className="mt-6 text-stone-600">
                We would love to help you choose the perfect jewellery for weddings, gifting, and special occasions.
              </p>

              <div className="mt-8 space-y-4 text-lg">
                <p>📍 Kadamb Jewellers, Station Road, Dhasa, Botad - 364710</p>
                <div className="space-y-2">
                  <p>📞 +91 8000001285</p>
                  <p>📞 +91 7436066660</p>
                </div>
                <p>✉️ info@kadambjewellers.com</p>
              </div>
            </div>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-stone-300 px-5 py-4 outline-none focus:border-yellow-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-2xl border border-stone-300 px-5 py-4 outline-none focus:border-yellow-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full rounded-2xl border border-stone-300 px-5 py-4 outline-none focus:border-yellow-500"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-yellow-500 px-6 py-4 text-lg font-semibold text-black transition hover:scale-[1.02]"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black px-6 py-8 text-center text-stone-400">
        <p>© 2026 Kadamb Jewellers. All rights reserved.</p>
      </footer>
    </div>
  );
}
