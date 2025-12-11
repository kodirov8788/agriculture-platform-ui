import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { MoveRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-card shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.featured && (
          <span className="absolute top-3 left-3 bg-agri-earth text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-agri-earth uppercase tracking-wider">
            {product.category}
          </span>
          <span className="font-bold text-agri-green text-lg">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        <h3 className="font-serif text-xl text-gray-900 mb-2 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>

        <Link 
          href={`/shop/${product.id}`}
          className="w-full inline-flex items-center justify-center gap-2 border-2 border-agri-green text-agri-green font-medium px-4 py-2 rounded-btn hover:bg-agri-green hover:text-white transition-colors"
        >
          View Details
          <MoveRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
