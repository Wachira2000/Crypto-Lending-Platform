import React, { useState } from 'react';
import { Wallet2, Menu, X } from 'lucide-react';
import { ConnectWallet } from "@thirdweb-dev/react";
import { Link } from 'react-router-dom';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Wallet2 className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">CryptoLend</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium">Products</button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                <Link to="/crypto-loans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Crypto Loans</Link>
                <Link to="/interest-rates" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Interest Rates</Link>
                <Link to="/asset-coverage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Asset Coverage</Link>
              </div>
            </div>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <Link to="/resources" className="text-gray-700 hover:text-blue-600 font-medium">Resources</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
          </nav>

          {/* Connect Wallet Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ConnectWallet 
              theme="light"
              btnTitle="Connect Wallet"
              modalTitle="Connect Your Wallet"
              modalSize="wide"
              welcomeScreen={{
                title: "Connect to CryptoLend",
                subtitle: "Connect your wallet to access crypto-backed loans"
              }}
              modalTitleIconUrl="/vite.svg"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                Home
              </Link>
              <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                Products
              </Link>
              <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                About
              </Link>
              <Link to="/resources" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                Resources
              </Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                Contact
              </Link>
              <div className="mt-4">
                <ConnectWallet 
                  theme="light"
                  btnTitle="Connect Wallet"
                  modalTitle="Connect Your Wallet"
                  modalSize="wide"
                  welcomeScreen={{
                    title: "Connect to CryptoLend",
                    subtitle: "Connect your wallet to access crypto-backed loans"
                  }}
                  modalTitleIconUrl="/vite.svg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}