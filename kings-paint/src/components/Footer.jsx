// src/components/Footer.jsx
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CreditCard,
  Bitcoin,
  Smartphone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold">PaintPro</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted partner for premium paints and coatings. Transforming
              spaces with quality and innovation since 1995.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-primary-400 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-primary-400 text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-primary-400 text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-primary-400 text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-gray-400 hover:text-primary-400 text-sm"
                >
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/category/interior"
                  className="text-gray-400 hover:text-primary-400 text-sm"
                >
                  Interior Paints
                </Link>
              </li>
              <li>
                <Link
                  to="/products/category/exterior"
                  className="text-gray-400 hover:text-primary-400 text-sm"
                >
                  Exterior Paints
                </Link>
              </li>
              <li>
                <Link
                  to="/products/category/specialty"
                  className="text-gray-400 hover:text-primary-400 text-sm"
                >
                  Specialty Finishes
                </Link>
              </li>
              <li>
                <Link
                  to="/products/category/primers"
                  className="text-gray-400 hover:text-primary-400 text-sm"
                >
                  Primers
                </Link>
              </li>
              <li>
                <Link
                  to="/products/category/tools"
                  className="text-gray-400 hover:text-primary-400 text-sm"
                >
                  Tools & Supplies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Payment */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400 mb-4">
              <li>123 Paint Street</li>
              <li>Color City, CC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@paintpro.com</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">We Accept</h3>
            <div className="flex space-x-3 text-2xl">
              <CreditCard className="text-gray-400 hover:text-primary-400 cursor-pointer" />
              <CreditCard className="text-gray-400 hover:text-primary-400 cursor-pointer" />
              <Smartphone className="text-gray-400 hover:text-primary-400 cursor-pointer" />
              <Bitcoin className="text-gray-400 hover:text-primary-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 PaintPro. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="/privacy" className="hover:text-primary-400">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-400">
                Terms of Service
              </Link>
              <Link to="/returns" className="hover:text-primary-400">
                Returns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
