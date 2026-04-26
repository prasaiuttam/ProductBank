import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ProductBankLogoWhite.png";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Get total cart item count from context
  const { totalItems } = useCart();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="bg-black px-4 md:px-20 lg:px-10 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={logo}
              alt="ProductBank"
              className="h-10 w-auto max-w-[180px] object-contain"
            />
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-md hidden md:block mx-6">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-md bg-white text-gray-900 outline-none text-sm"
          />
        </div>

        {/* Nav links + Login + Cart */}
        <div className="flex items-center gap-4">
          <ul className="flex gap-4">
            <Link to="/">
              <li className="text-white">Home</li>
            </Link>
            <Link to="/about">
              <li className="text-white">About</li>
            </Link>
            <Link to="/contact">
              <li className="text-white">Contact</li>
            </Link>
          </ul>

          <Link to="/login">
            <button className="text-white border border-white px-4 py-1 rounded-md">
              Login
            </button>
          </Link>

          {/* ---- CART ICON WITH RED BADGE ---- */}
          <Link to="/cart" className="relative">
            {/* Cart icon (shopping bag SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="white"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            {/* Red badge — only shows when cart has items */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Link>
          {/* ---- END CART ICON ---- */}

        </div>
      </div>
    </div>
  );
};

export default Navbar;