'use client';

import DefaultLayout from "@/layouts/default";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

// ✅ Real static icons for pricing plans
const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    price: 29,
    period: "month",
    description: "Perfect for individuals getting started",
    features: [
      "Up to 5 products",
      "Basic analytics",
      "Email support",
      "48-hour response time",
      "Standard security"
    ],
    notIncluded: ["Advanced analytics", "Priority support", "Custom branding"],
    popular: false,
    buttonText: "Get Started",
    color: "from-blue-500 to-cyan-500",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"  // Basic / star icon
  },
  {
    id: "pro",
    name: "Pro",
    price: 79,
    period: "month",
    description: "Best for growing businesses",
    features: [
      "Up to 50 products",
      "Advanced analytics",
      "Priority email & chat support",
      "12-hour response time",
      "Enhanced security",
      "Custom reporting",
      "API access"
    ],
    notIncluded: ["Custom branding"],
    popular: true,
    buttonText: "Start Free Trial",
    color: "from-purple-600 to-pink-600",
    icon: "https://cdn-icons-png.flaticon.com/512/1903/1903301.png"  // Pro / rocket icon
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 199,
    period: "month",
    description: "For large scale operations",
    features: [
      "Unlimited products",
      "Real-time analytics",
      "24/7 dedicated support",
      "1-hour response time",
      "Maximum security",
      "Custom branding",
      "SLA guarantee",
      "Onboarding specialist"
    ],
    notIncluded: [],
    popular: false,
    buttonText: "Contact Sales",
    color: "from-orange-500 to-red-500",
    icon: "https://cdn-icons-png.flaticon.com/512/2997/2997608.png"  // Enterprise / building icon
  }
];

const faqs = [
  { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade anytime. Changes take effect immediately." },
  { q: "Is there a free trial?", a: "Pro plan includes a 14-day free trial. No credit card required." },
  { q: "What payment methods do you accept?", a: "All major credit cards, PayPal, and bank transfers for Enterprise." },
  { q: "Is there a setup fee?", a: "No setup fees for any plan. You only pay the monthly subscription." },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"month" | "year">("month");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = path;
    }
  };

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    setTimeout(() => {
      alert(`You selected ${planId} plan. (Demo action)`);
      setSelectedPlan(null);
    }, 500);
  };

  const getDisplayPrice = (price: number) => {
    if (billingPeriod === "year") {
      return (price * 12 * 0.9).toFixed(0);
    }
    return price;
  };

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse delay-1000" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-purple-100 max-w-2xl mx-auto"
          >
            Choose the plan that fits your needs. No hidden fees.
          </motion.p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-4 p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            <button
              onClick={() => setBillingPeriod("month")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingPeriod === "month"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("year")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingPeriod === "year"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Yearly <span className="text-xs text-green-500 ml-1">Save 10%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className={`relative rounded-2xl overflow-hidden transition-all ${
                  plan.popular
                    ? "shadow-2xl ring-2 ring-purple-500 scale-105 md:scale-105 z-10"
                    : "shadow-lg hover:shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="bg-white dark:bg-gray-900 p-6 h-full flex flex-col">
                  <div className="text-center">
                    {/* ✅ Real image instead of emoji */}
                    <img
                      src={plan.icon}
                      alt={plan.name}
                      className="w-16 h-16 mx-auto mb-3 object-contain"
                    />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{plan.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">{plan.description}</p>
                  </div>
                  <div className="text-center mt-6">
                    <span className="text-5xl font-extrabold text-gray-800 dark:text-white">
                      ${getDisplayPrice(plan.price)}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400"> / {billingPeriod}</span>
                    {billingPeriod === "year" && (
                      <p className="text-xs text-green-600 mt-1">Save 10% annually</p>
                    )}
                  </div>

                  <div className="mt-8 flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <span className="text-green-500">✓</span> {feature}
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, idx) => (
                        <li key={`not-${idx}`} className="flex items-center gap-2 text-gray-400 line-through">
                          <span className="text-gray-400">✗</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelectPlan(plan.id)}
                    disabled={selectedPlan === plan.id}
                    className={`mt-8 w-full py-3 rounded-full font-semibold transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md hover:shadow-lg"
                        : "bg-gray-100 dark:bg-gray-800 text-purple-600 border border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                    }`}
                  >
                    {selectedPlan === plan.id ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      plan.buttonText
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Compare All Features
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="p-4 text-gray-600 dark:text-gray-400">Feature</th>
                  {pricingPlans.map(plan => (
                    <th key={plan.id} className="p-4 text-center font-bold text-gray-800 dark:text-white">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Products limit", basic: "5", pro: "50", enterprise: "Unlimited" },
                  { name: "Analytics", basic: "Basic", pro: "Advanced", enterprise: "Real-time" },
                  { name: "Support response", basic: "48h", pro: "12h", enterprise: "1h (24/7)" },
                  { name: "API access", basic: "✗", pro: "✓", enterprise: "✓" },
                  { name: "Custom branding", basic: "✗", pro: "✗", enterprise: "✓" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-4 font-medium text-gray-800 dark:text-white">{row.name}</td>
                    <td className="p-4 text-center text-gray-600 dark:text-gray-400">{row.basic}</td>
                    <td className="p-4 text-center text-gray-600 dark:text-gray-400">{row.pro}</td>
                    <td className="p-4 text-center text-gray-600 dark:text-gray-400">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-gray-800 dark:text-white">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Get Started?</h2>
            <p className="mt-4 text-purple-100">Join thousands of satisfied customers using Adsons.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateTo("/products")}
              className="mt-6 px-8 py-3 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:shadow-xl"
            >
              Start Shopping →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </DefaultLayout>
  );
}