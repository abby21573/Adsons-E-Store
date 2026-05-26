import { Product } from "@/type";

export const products = [
  // Clothes
  {
    id: 6,
    name: "White Hilled Shoes",
    price: 29.99,
    description: "Comfortable white shoes with a hill design...",
    imageUrl: "https://picsum.photos/id/21/400/300",
    category: "clothes"
  },
  {
    id: 8,
    name: "Canvas Tote Bag",
    price: 17.99,
    description: "Durable 100% organic cotton tote...",
    imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400",
    category: "clothes"
  },

  // Electronics
  {
    id: 9,
    name: "Bass+ Wireless Headphones",
    price: 79.99,
    description: "Over‑ear headphones with deep bass...",
    imageUrl: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "electronics"
  },
  {
    id: 10,
    name: "Humidifier",
    price: 49.99,
    description: "Quiet, 2.5L tank humidifier...",
    imageUrl: "https://picsum.photos/id/26/400/300",
    category: "electronics"
  },

  // Stationeries
  {
    id: 7,
    name: "The TypeScript Handbook",
    price: 39.99,
    description: "Master TypeScript with this comprehensive guide...",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
    category: "stationeries"
  },
  {
    id: 11,
    name: "Happy Sip Smiley Face Mug",
    price: 12.99,
    description: "Ceramic 12oz mug with a cheerful smiley face design...",
    imageUrl: "https://picsum.photos/id/88/400/300",
    category: "stationeries"
  },

  // Utensils
  {
    id: 1,
    name: "Stainless Steel Water Bottle",
    price: 19.99,
    description: "Keep your drinks cold for 24 hours or hot for 12 hours with this insulated water bottle.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
    category: "utensils"
  },
  {
    id: 2,
    name: "Bamboo Cutting Board",
    price: 24.99,
    description: "Eco-friendly bamboo cutting board with juice groove. Perfect for all your chopping needs.",
    imageUrl: "https://images.unsplash.com/photo-1514516870929-1c0e9bfcf8c7?w=400",
    category: "utensils"
  },
  {
    id: 3,
    name: "Non-Stick Frying Pan",
    price: 34.99,
    description: "Durable non-stick frying pan with heat-resistant handle. Ideal for cooking eggs, pancakes, and more.",
    imageUrl: "https://images.unsplash.com/photo-1514516870929-1c0e9bfcf8c7?w=400",
    category: "utensils"
  },
  {
    id: 4,
    name: "Silicone Spatula Set",
    price: 14.99,
    description: "Set of 3 heat-resistant silicone spatulas. Perfect for mixing, scraping, and cooking.",
    imageUrl: "https://images.unsplash.com/photo-1514516870929-1c0e9bfcf8c7?w=400",
    category: "utensils"
  },
  {
    id: 5,
    name: "Glass Mixing Bowls",
    price: 29.99,
    description: "Set of 3 glass mixing bowls with lids. Great for prepping, mixing, and storing food.",
    imageUrl: "https://images.unsplash.com/photo-1514516870929-1c0e9bfcf8c7?w=400",
    category: "utensils"
  }
] as unknown as Product[];