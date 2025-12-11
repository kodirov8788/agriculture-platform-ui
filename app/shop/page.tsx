"use client";

import { useState, Suspense } from "react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ProductCard";
import { Search } from "lucide-react";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
          Our Harvest Shop
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse our curated selection of organic seeds, tools, and fertilizers.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={clsx(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                selectedCategory === category
                  ? "bg-agri-green text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-auto min-w-[300px]">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-card border-none bg-gray-50 focus:bg-white focus:ring-2 focus:ring-agri-green/20 transition-all outline-none"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-gray-500 text-lg">No products found for your search.</p>
          <button 
            onClick={() => {setSelectedCategory("All"); setSearchQuery("");}}
            className="mt-4 text-agri-green font-bold hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}
