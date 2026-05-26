import { Product } from "@/type";
interface Props {
    onAddToCart: (product: Product, qty: number) => void;
    onBack: () => void;
    getProductById: (id: number) => Product | undefined;
}
declare const ProductDetail: ({ onAddToCart, onBack, getProductById }: Props) => import("react/jsx-runtime").JSX.Element;
export default ProductDetail;
