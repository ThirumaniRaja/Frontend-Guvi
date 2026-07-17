import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ShoppingCart,
  User,
  Search,
  Menu,
  X,
  Heart,
  MapPin,
} from "lucide-react";
import { useCart } from "../store/cart";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const cartCount = useCart((state) =>
    state.items.reduce((total, item) => total + item.qty, 0)
  );

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Electronics", path: "/shop" },
    { name: "Fashion", path: "/shop" },
    { name: "Today's Deals", path: "/shop" },
  ];

  return (
    <>
      {/* Top Offer Bar */}
      <div className="bg-slate-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
          <span>🚚 Free Delivery on Orders Above $100</span>

          <div className="hidden md:flex gap-6">
            <span>Customer Support</span>
            <span>Track Order</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-black tracking-tight whitespace-nowrap"
          >
            Shop<span className="text-orange-500">.</span>
          </Link>

          {/* Search */}
          <div className="hidden lg:flex flex-1 max-w-2xl">

            <div className="relative w-full">

              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search products..."
                className="w-full h-12 rounded-full border border-gray-300 pl-12 pr-5 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

            </div>

          </div>

          {/* Location */}
          <div className="hidden xl:flex items-center gap-2 text-sm">
            <MapPin size={18} />
            <div>
              <p className="text-gray-400">Deliver to</p>
              <p className="font-semibold">India</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700 hover:text-orange-500 transition"
                }
              >
                {item.name}
              </NavLink>
            ))}

          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-5">

            <Link
              to="/wishlist"
              className="hover:text-orange-500 transition"
            >
              <Heart size={22} />
            </Link>

            <Link
              to="/auth"
              className="hover:text-orange-500 transition"
            >
              <User size={22} />
            </Link>

            <Link
              to="/cart"
              className="relative hover:text-orange-500 transition"
            >
              <ShoppingCart size={24} />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>

          </div>

        </div>

        {/* Mobile Search */}
        <div className="lg:hidden px-4 pb-4">

          <div className="relative">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              className="w-full h-11 rounded-full border pl-11"
              placeholder="Search products..."
            />

          </div>

        </div>

        {/* Mobile Menu */}
        {mobileOpen && (

          <div className="lg:hidden border-t bg-white">

            {menuItems.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-4 border-b hover:bg-gray-50"
              >
                {item.name}
              </NavLink>

            ))}

          </div>

        )}

      </header>
    </>
  );
}