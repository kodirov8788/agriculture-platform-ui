export interface Product {
  id: string;
  name: string;
  category: "Seeds" | "Tools" | "Fertilizer";
  price: number;
  description: string;
  image: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Example Product 1",
    category: "Seeds",
    price: 4.50,
    description: "This is an example product description. Replace with your own content.",
    image: "https://placehold.co/400x300/2D5016/FFFFFF?text=Product+1",
    featured: true,
  },
  {
    id: "2",
    name: "Example Product 2",
    category: "Fertilizer",
    price: 12.00,
    description: "This is an example product description. Replace with your own content.",
    image: "https://placehold.co/400x300/4A7C23/FFFFFF?text=Product+2",
    featured: false,
  },
  {
    id: "3",
    name: "Example Product 3",
    category: "Tools",
    price: 15.99,
    description: "This is an example product description. Replace with your own content.",
    image: "https://placehold.co/400x300/6B8E23/FFFFFF?text=Product+3",
    featured: true,
  },
  {
    id: "4",
    name: "Example Product 4",
    category: "Seeds",
    price: 5.00,
    description: "This is an example product description. Replace with your own content.",
    image: "https://placehold.co/400x300/556B2F/FFFFFF?text=Product+4",
    featured: true,
  },
  {
    id: "5",
    name: "Example Product 5",
    category: "Fertilizer",
    price: 18.50,
    description: "This is an example product description. Replace with your own content.",
    image: "https://placehold.co/400x300/2D5016/FFFFFF?text=Product+5",
    featured: true,
  },
  {
    id: "6",
    name: "Example Product 6",
    category: "Tools",
    price: 24.95,
    description: "This is an example product description. Replace with your own content.",
    image: "https://placehold.co/400x300/4A7C23/FFFFFF?text=Product+6",
    featured: false,
  },
  {
    id: "7",
    name: "Example Product 7",
    category: "Seeds",
    price: 3.50,
    description: "This is an example product description. Replace with your own content.",
    image: "https://placehold.co/400x300/6B8E23/FFFFFF?text=Product+7",
    featured: false,
  },
  {
    id: "8",
    name: "Example Product 8",
    category: "Tools",
    price: 29.99,
    description: "This is an example product description. Replace with your own content.",
    image: "https://placehold.co/400x300/556B2F/FFFFFF?text=Product+8",
    featured: false,
  },
  {
    id: "9",
    name: "Example Product 9",
    category: "Fertilizer",
    price: 9.99,
    description: "This is an example product description. Replace with your own content.",
    image: "https://placehold.co/400x300/2D5016/FFFFFF?text=Product+9",
    featured: false,
  },
  {
    id: "10",
    name: "Example Product 10",
    category: "Seeds",
    price: 4.00,
    description: "This is an example product description. Replace with your own content.",
    image: "https://placehold.co/400x300/4A7C23/FFFFFF?text=Product+10",
    featured: true,
  },
];

