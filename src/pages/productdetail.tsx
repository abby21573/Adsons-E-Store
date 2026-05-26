import { useParams } from "react-router-dom";
import { useState } from "react";
import { Product } from "@/type";
import DefaultLayout from "../layouts/default";

interface Props {
  onAddToCart: (product: Product, qty: number) => void;
  onBack: () => void;
  getProductById: (id: number) => Product | undefined;
}

const ProductDetail = ({ onAddToCart, onBack, getProductById }: Props) => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const [quantity, setQuantity] = useState(1);

  if (isNaN(productId)) {
    return (
      <DefaultLayout>
        <div className="p-8 text-center">Invalid product ID</div>
      </DefaultLayout>
    );
  }

  const product = getProductById(productId);

  if (!product) {
    return (
      <DefaultLayout>
        <div className="p-8 text-center">Product not found</div>
      </DefaultLayout>
    );
  }

  // Use imageUrl if available, otherwise fallback to image
  const imageSrc = product.imageUrl || product.image;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setQuantity(isNaN(val) || val < 1 ? 1 : val);
  };

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto p-6">
        <button
          onClick={onBack}
          className="mb-4 text-purple-600 hover:text-purple-700 hover:underline transition"
        >
          ← Back to Products
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full md:w-1/2 rounded-2xl object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://placehold.co/400x400?text=No+Image";
            }}
          />
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl text-purple-600 mt-2">${product.price.toFixed(2)}</p>
            {product.originalPrice && (
              <p className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</p>
            )}
            <p className="mt-4 text-gray-700 dark:text-gray-300">{product.description}</p>
            <div className="mt-6 flex items-center gap-4">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="border border-gray-300 dark:border-gray-700 rounded-lg w-20 p-2 text-center"
                aria-label="Quantity"
              />
              <button
                onClick={() => onAddToCart(product, quantity)}
                disabled={!product.inStock}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  product.inStock
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                aria-label={`Add ${quantity} of ${product.name} to cart`}
              >
                Add to Cart
              </button>
            </div>
            {!product.inStock && (
              <p className="text-red-500 text-sm mt-2">Out of stock</p>
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProductDetail;