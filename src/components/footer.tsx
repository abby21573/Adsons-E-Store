const Footer = () => {
  return (
    // Force full viewport width – escape any parent container
    <footer className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 dark:from-gray-950 dark:via-indigo-900 dark:to-gray-950 text-white">
      {/* Decorative top accent – spans full width */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lilac-400 via-purple-500 to-fuchsia-500" />

      {/* Inner content – responsive horizontal padding, keeps text from touching edges */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text text-transparent">
              ✨ Adsons
            </h3>
            <p className="mt-3 text-sm text-gray-300 dark:text-gray-400 max-w-md">
              Your premium destination for modern essentials. Quality products, fast delivery, and a delightful shopping experience.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-300 dark:hover:text-amber-400 transition"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-300 dark:hover:text-amber-400 transition"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-300 dark:hover:text-amber-400 transition"
                aria-label="Discord"
              >
                Discord
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-amber-200 dark:text-amber-300">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300 dark:text-gray-400">
              <li>
                <a href="/products" className="hover:text-amber-300 dark:hover:text-amber-400 transition">
                  All Products
                </a>
              </li>
              <li>
                <a href="/new-arrivals" className="hover:text-amber-300 dark:hover:text-amber-400 transition">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="/sale" className="hover:text-amber-300 dark:hover:text-amber-400 transition">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-amber-200 dark:text-amber-300">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300 dark:text-gray-400">
              <li>
                <a href="/faq" className="hover:text-amber-300 dark:hover:text-amber-400 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:text-amber-300 dark:hover:text-amber-400 transition">
                  Shipping
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-amber-300 dark:hover:text-amber-400 transition">
                  Returns
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar – centered text with top border */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Adsons — All rights reserved. Built with React + TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;