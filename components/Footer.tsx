import Link from "next/link";
import { Facebook, Instagram, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-agri-light border-t border-green-100/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold text-agri-green">
                Example<span className="text-agri-earth">Store</span>
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              This is an example e-commerce template for demonstration purposes. Customize it to build your own store.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-serif text-gray-900 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/shop" className="hover:text-agri-green transition-colors">Our Products</Link></li>
              <li><Link href="/about" className="hover:text-agri-green transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-agri-green transition-colors">Contact</Link></li>
              <li><Link href="/about" className="hover:text-agri-green transition-colors">Farming Tips</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-gray-900 font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>123 Example Street</li>
              <li>Sample City, EX 12345</li>
              <li className="pt-2">hello@example.com</li>
              <li>+1 (555) 000-0000</li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-serif text-gray-900 font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white rounded-full text-agri-green shadow-sm hover:bg-agri-green hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-agri-green shadow-sm hover:bg-agri-green hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-agri-green shadow-sm hover:bg-agri-green hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-green-200/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Example Store. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Grown with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by Kodirovdev</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
