import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createThirdwebClient, ConnectEmbed } from "thirdweb";
import { Header } from './components/Header';
import { LoanCalculator } from './components/LoanCalculator';
import { LoanApplication } from './components/LoanApplication';
import { FAQ } from './components/FAQ';
import { TrustRatings } from './components/TrustRatings';
import { GetStarted } from './pages/GetStarted';
import { LearnMore } from './pages/LearnMore';
import { Shield, Zap, Lock, ChevronRight, Twitter, Linkedin, Github, Facebook, Mail } from 'lucide-react';

const THIRDWEB_CLIENT = createThirdwebClient({
  clientId: "d2436e1a79385da12d036db9f90c56e5",
});

function HomePage() {
  return (
    <>
      <div className="relative bg-blue-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover mix-blend-multiply filter brightness-50"
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80"
            alt="Cryptocurrency background"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <ConnectEmbed client={THIRDWEB_CLIENT} />
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Unlock the Value of Your Crypto
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            Get instant access to cash without selling your cryptocurrency. Our platform offers competitive rates, flexible terms, and a seamless borrowing experience.
          </p>
          <div className="mt-10 flex space-x-4">
            <Link
              to="/get-started"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/learn-more"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About CryptoLend
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              We're revolutionizing the lending industry by bridging the gap between traditional finance and cryptocurrency assets.
            </p>
          </div>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Secure Platform</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Bank-grade security measures to protect your assets and personal information.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Instant Processing</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Get your loan approved and disbursed within minutes, not days.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Smart Contracts</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Automated and transparent loan terms enforced by blockchain technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Crypto-Backed Loans
          </h1>
          <p className="text-xl text-gray-600">
            Access liquidity without selling your crypto assets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LoanCalculator />
          <LoanApplication />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose CryptoLend?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Instant Approval
              </h3>
              <p className="text-gray-600">
                Get your loan approved and disbursed within minutes after connecting your wallet
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Competitive Rates
              </h3>
              <p className="text-gray-600">
                Enjoy low interest rates starting from 12% APR with flexible repayment options
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Secure & Transparent
              </h3>
              <p className="text-gray-600">
                Your assets are secured by smart contracts with full transparency on the blockchain
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by Crypto Investors Worldwide
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Here's what our customers have to say about their experience with CryptoLend
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-8 pb-10 px-6 bg-gray-50 rounded-lg">
                <img
                  className="h-12 w-12 rounded-full mx-auto"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                  alt="Sarah Chen"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-gray-900">Sarah Chen</h3>
                  <p className="mt-2 text-sm text-gray-500">Crypto Trader</p>
                  <p className="mt-4 text-base text-gray-600">
                    "CryptoLend made it incredibly easy to access funds without selling my ETH during the market dip. The process was smooth and transparent."
                  </p>
                </div>
              </div>

              <div className="pt-8 pb-10 px-6 bg-gray-50 rounded-lg">
                <img
                  className="h-12 w-12 rounded-full mx-auto"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                  alt="Mark Thompson"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-gray-900">Mark Thompson</h3>
                  <p className="mt-2 text-sm text-gray-500">Business Owner</p>
                  <p className="mt-4 text-base text-gray-600">
                    "The flexible repayment options and competitive rates made CryptoLend the perfect solution for my business needs."
                  </p>
                </div>
              </div>

              <div className="pt-8 pb-10 px-6 bg-gray-50 rounded-lg">
                <img
                  className="h-12 w-12 rounded-full mx-auto"
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                  alt="Emily Rodriguez"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-gray-900">Emily Rodriguez</h3>
                  <p className="mt-2 text-sm text-gray-500">Long-term Investor</p>
                  <p className="mt-4 text-base text-gray-600">
                    "I was impressed by how quickly I received my loan. The smart contract system gives me peace of mind about the security of my assets."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <TrustRatings />
      <FAQ />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CryptoLend</h3>
              <p className="text-gray-400 text-sm">
                Revolutionizing crypto-backed lending with secure, transparent, and efficient solutions.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Crypto Loans</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Interest Rates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Loan Calculator</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Asset Coverage</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 CryptoLend. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400 text-sm">contact@cryptolend.com</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;