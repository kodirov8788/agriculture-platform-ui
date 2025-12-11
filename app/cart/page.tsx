"use client";

import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function CartPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
          Your Cart
        </h1>
        <p className="text-gray-600">
          Your shopping cart is currently empty.
        </p>
      </div>

      <div className="max-w-md mx-auto bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center">
        <div className="w-20 h-20 bg-agri-light rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 text-agri-green" />
        </div>
        
        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
          Nothing Here Yet
        </h2>
        
        <p className="text-gray-500 mb-8">
          Looks like you haven&apos;t added any items to your cart. Browse our products and start your organic farming journey!
        </p>
        
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-agri-green text-white px-8 py-4 rounded-btn font-bold hover:bg-agri-dark transition-all shadow-lg"
        >
          Browse Products
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Coming Soon Notice */}
      <div className="mt-12 text-center">
        <div className="inline-block bg-agri-earth/10 px-6 py-3 rounded-full">
          <p className="text-agri-earth font-medium text-sm">
            🚀 Full cart functionality coming soon!
          </p>
        </div>
      </div>
    </div>
  );
}
