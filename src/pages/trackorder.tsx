// pages/trackorder.tsx
import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DefaultLayout from "@/layouts/default";
import { Product } from "@/type";

interface OrderItem {
  product: Product;
  quantity: number;
}

interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: string;
  date: string;
}

export default function TrackOrder() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);
  const [searchId, setSearchId] = useState(id || "");
  const [notFound, setNotFound] = useState(false);

  const loadOrder = useCallback((orderId: string) => {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const found = orders.find((o: Order) => o.id === orderId);
    if (found) {
      setOrder(found);
      setNotFound(false);
    } else {
      setOrder(null);
      setNotFound(true);
    }
  }, []);

  useEffect(() => {
    if (id) loadOrder(id);
  }, [id, loadOrder]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchId.trim()) {
      loadOrder(searchId);
      navigate(`/track-order/${searchId}`, { replace: true });
    }
  };

  const statusSteps = [
    { key: "Processing", label: "Order Confirmed", icon: "✅", color: "bg-yellow-500", textColor: "text-yellow-700 dark:text-yellow-300" },
    { key: "Shipped", label: "Shipped", icon: "📦", color: "bg-blue-500", textColor: "text-blue-700 dark:text-blue-300" },
    { key: "Out for Delivery", label: "Out for Delivery", icon: "🚚", color: "bg-orange-500", textColor: "text-orange-700 dark:text-orange-300" },
    { key: "Delivered", label: "Delivered", icon: "🏠", color: "bg-green-500", textColor: "text-green-700 dark:text-green-300" },
  ];

  const currentStepIndex = order ? statusSteps.findIndex((step) => step.key === order.status) : -1;

  return (
    <DefaultLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Track Your Delivery 🚀
        </h1>

        <form onSubmit={handleSearch} className="flex gap-3 mb-10">
          <input
            type="text"
            placeholder="Enter Order ID (e.g., ORD-1234567890)"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border-2 border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 focus:ring-4 focus:ring-fuchsia-400 focus:outline-none font-medium"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            Track Now →
          </button>
        </form>

        {notFound && (
          <div className="text-center p-8 bg-red-100 dark:bg-red-900/40 border-2 border-red-400 rounded-2xl">
            <p className="text-red-700 dark:text-red-300 font-bold text-lg">❌ Order not found. Please check your ID.</p>
          </div>
        )}

        {order && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border-2 border-purple-100 dark:border-purple-900">
            <div className="p-6 border-b-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <h2 className="text-2xl font-black">Order #{order.id}</h2>
                <span
                  className={`px-4 py-1 rounded-full font-bold shadow-md ${
                    order.status === "Processing"
                      ? "bg-yellow-100 text-yellow-800"
                      : order.status === "Shipped"
                      ? "bg-blue-100 text-blue-800"
                      : order.status === "Out for Delivery"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-1">
                📅 {new Date(order.date).toLocaleDateString()}
              </p>
            </div>

            {/* Tracking timeline - BOLDER */}
            <div className="p-6 border-b border-purple-100 dark:border-purple-900">
              <h3 className="font-black text-xl mb-4 text-purple-800 dark:text-purple-300">📦 Delivery Progress</h3>
              <div className="relative">
                {statusSteps.map((step, idx) => {
                  const isPast = idx <= currentStepIndex;
                  return (
                    <div key={step.key} className="flex items-start gap-4 mb-8 last:mb-0">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-md ${
                          isPast ? `${step.color} text-white` : "bg-gray-300 dark:bg-gray-700 text-gray-500"
                        }`}
                      >
                        {isPast ? "✓" : step.icon}
                      </div>
                      <div className="flex-1">
                        <p
                          className={`font-bold text-lg ${
                            isPast ? step.textColor : "text-gray-400 dark:text-gray-500"
                          }`}
                        >
                          {step.label}
                        </p>
                        {idx === currentStepIndex && (
                          <p className="text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-400 mt-1 animate-pulse">
                            ⏳ Current status
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Order summary */}
            <div className="p-6">
              <h3 className="font-black text-xl mb-4 text-purple-800 dark:text-purple-300">🛍️ Items in this order</h3>
              <ul className="space-y-3">
                {order.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center border-b border-purple-100 dark:border-purple-800 pb-2"
                  >
                    <span className="font-medium">
                      {item.product.name} <span className="text-gray-500">x {item.quantity}</span>
                    </span>
                    <span className="font-bold text-fuchsia-600 dark:text-fuchsia-400">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 text-right">
                <span className="text-gray-600 dark:text-gray-400">Total </span>
                <span className="text-2xl font-black bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                  ${order.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}