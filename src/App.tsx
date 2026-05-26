import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, type ComponentType } from "react";
import IndexPage from "./pages/index";
import PricingPage from "./pages/pricing";
import BlogPage from "./pages/blog";
import AboutPage from "./pages/about";
import ProductDetail from "./pages/productdetail";
import Cart from "./pages/shoppingcart";
import ProductList from "./pages/productlisting";
import { products } from "./data/product";
import { CartItem, Product } from "./type";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  const ProductListComponent = ProductList as ComponentType<{
    products: Product[];
    onAddToCart: (product: Product, quantity?: number) => void;
    onViewDetail: (id: any) => void;
  }>;

  const CartComponent = Cart as ComponentType<{
    items: CartItem[];
    onUpdateQty: (productId: number, newQuantity: number) => void;
    onRemove: (productId: number) => void;
    onCheckout: () => void;
    onContinue: () => void;
  }>;

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(prev => prev.filter(item => item.product.id !== productId));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.product.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleCheckout = () => {
    alert("Order placed successfully!");
    setCartItems([]);
    navigate("/");
  };

  const getProductById = (id: number): Product | undefined => {
    return products.find(p => p.id === id);
  };



  return (
  
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route
          path="/productlisting"
          element={
            <ProductListComponent
              products={products}
              onAddToCart={addToCart}
              onViewDetail={(id) => navigate(`/product/${id}`)}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetail
              onAddToCart={addToCart}
              onBack={() => navigate("/productlisting")}
              getProductById={getProductById}
            />
          }
        />

        <Route
          path="/shoppingcart"
          element={
            <CartComponent
              items={cartItems}
              onUpdateQty={updateQuantity}
              onRemove={removeFromCart}
              onCheckout={handleCheckout}
              onContinue={() => navigate("/products")}
            />
          }
        />
      </Routes>    
  );
}

export default App;