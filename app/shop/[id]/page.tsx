import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { MoveLeft, Check } from "lucide-react";
import { notFound } from "next/navigation";

// Generate segments for all products at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16 px-4 max-w-7xl mx-auto">
      <Link href="/shop" className="inline-flex items-center gap-2 text-gray-500 hover:text-agri-green mb-8 transition-colors">
        <MoveLeft className="w-4 h-4" />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
           <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-agri-light text-agri-green text-sm font-bold rounded-full uppercase tracking-wider">
            {product.category}
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
            {product.name}
          </h1>
          
          <p className="text-3xl font-bold text-agri-earth">
            ${product.price.toFixed(2)}
          </p>
          
          <div className="prose prose-green text-gray-600 max-w-none">
            <p>{product.description}</p>
            <p>
             Perfect for organic farming enthusiasts. This top-quality {product.category.toLowerCase()} ensures excellent results 
             for your garden or farm. Sourced responsibly and tested for purity.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100 space-y-4">
             <div className="flex items-center gap-3 text-sm text-gray-500">
                <Check className="w-4 h-4 text-green-500" />
                <span>In Stock & Ready to Ship</span>
             </div>
             <div className="flex items-center gap-3 text-sm text-gray-500">
                <Check className="w-4 h-4 text-green-500" />
                <span>Satisfaction Guaranteed</span>
             </div>
          </div>

          <div className="pt-4 flex gap-4">
             <a 
               href="https://wa.me/15550000000" // Dummy WhatsApp
               target="_blank"
               rel="noopener noreferrer"
               className="flex-1 bg-agri-green text-white text-center py-4 rounded-btn font-bold hover:bg-agri-dark transition-all shadow-lg hover:shadow-xl"
             >
               Order via WhatsApp
             </a>
             <button className="px-6 py-4 border-2 border-gray-200 rounded-btn text-gray-600 font-bold hover:border-agri-green hover:text-agri-green transition-colors">
               Add to Wishlist
             </button>
          </div>

        </div>
      </div>
    </div>
  );
}
