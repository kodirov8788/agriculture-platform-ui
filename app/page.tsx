import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Leaf, Sun, Truck, CheckCircle2 } from "lucide-react";

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080/2D5016/FFFFFF?text=Hero+Image"
            alt="Example Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-agri-earth/90 text-white text-sm font-bold tracking-wide mb-4 animate-fade-in-up">
            WELCOME TO EXAMPLE STORE
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Example Store <br />
            <span className="text-agri-light italic">Template Demo</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed shadow-black drop-shadow-md">
            This is an example e-commerce template. Replace this content with your own brand messaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop?category=Seeds"
              className="bg-agri-green text-white px-8 py-4 rounded-btn font-bold text-lg hover:bg-agri-dark transition-all hover:scale-105 shadow-lg"
            >
              For Farmers
            </Link>
            <Link
              href="/shop"
              className="bg-white/10 backdrop-blur-md border border-white text-white px-8 py-4 rounded-btn font-bold text-lg hover:bg-white hover:text-agri-green transition-all hover:scale-105 shadow-lg"
            >
              Start Gardening
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats (As per analysis) */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
              <div>
                <h3 className="text-3xl font-bold text-agri-green">100%</h3>
                <p className="text-gray-500 text-sm mt-1">Organic Certified</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-agri-earth">50+</h3>
                <p className="text-gray-500 text-sm mt-1">Partner Farms</p>
              </div>
               <div>
                <h3 className="text-3xl font-bold text-agri-green">24h</h3>
                <p className="text-gray-500 text-sm mt-1">Fast Delivery</p>
              </div>
               <div>
                <h3 className="text-3xl font-bold text-agri-earth">5k+</h3>
                <p className="text-gray-500 text-sm mt-1">Happy Growers</p>
              </div>
           </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-agri-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Harvest
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular picks for this season. Hand-selected for quality and yield.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-block border-b-2 border-agri-earth text-agri-earth font-bold hover:text-agri-green hover:border-agri-green transition-colors pb-1"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            <div className="p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-agri-green">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">100% Organic</h3>
              <p className="text-gray-600">
                Certified organic seeds and fertilizers. No GMOs, no harmful chemicals. Just pure nature.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-orange-50 hover:bg-orange-100 transition-colors">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-agri-earth">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">
                Our tools are made from recycled materials and sustainable wood sources.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-blue-600">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                We know farming relies on timing. We ship same-day for orders before 2 PM.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
