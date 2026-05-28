import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // hamburger & close icons
import { Link } from 'react-router-dom'; // if you use React Router

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Replace these with your actual routes/links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Cart', path: '/cart' },
  ];

  return (
    <>
      {/* Navbar background & container */}
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Header text */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-gray-800">
                Your Store Name
              </Link>
            </div>

            {/* Hamburger button (always visible) */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-gray-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Optional: you can keep a minimal desktop right area (e.g., cart icon) */}
            <div className="hidden md:flex items-center space-x-4">
              {/* If you want a cart icon visible on desktop, add it here */}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay / drawer (always from hamburger) */}
      {/* This appears when isOpen = true */}
      <div
        className={`fixed top-16 left-0 w-full bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col p-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Optional: overlay backdrop when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;