export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  tag?: string;
  rating: number;
  inStock: boolean;
  description: string;
  imageUrl?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface IconSvgProps {
  size?: number;
  color?: string;
}

