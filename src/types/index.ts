import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;      // used in product detail
  image: string;            // used in lists, cart, etc.
  imageUrl?: string;        // optional alias for backward compatibility
  category: "clothes" | "electronics" | "stationeries" | "utensils" | "fashion" | "home" | "sports";
  tag?: string;             // "Best Seller", "New", "Sale", etc.
  rating: number;           // 0-5
  inStock: boolean;
}






