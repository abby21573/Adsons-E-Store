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
    description: string;
    image: string;
    imageUrl?: string;
    category: "clothes" | "electronics" | "stationeries" | "utensils" | "fashion" | "home" | "sports";
    tag?: string;
    rating: number;
    inStock: boolean;
}
