import React from 'react';
import { ArrowLeft, Wallet2, Lock, DollarSign, LineChart, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LearnMore() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Understanding Crypto-Backed Loans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how you can leverage your cryptocurrency holdings without selling them
          </p>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Wallet2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Deposit Collateral</h3>
              <p className="text-gray-600">
                Transfer your cryptocurrency to our secure smart contract as collateral
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2. Get Approved</h3>
              <p className="text-gray-600">
                Instant approval with no credit checks required
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">3. Receive Funds</h3>
              <p className="text-gray-600">
                Get your loan disbursed in stablecoins or fiat currency
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Crypto-Backed Loans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <LineChart className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-2">Keep Your Market Position</h3>
                <p className="text-gray-600">
                  Maintain your crypto holdings while accessing liquidity. Benefit from any market upside during your loan term.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-2">Quick Processing</h3>
                <p className="text-gray-600">
                  Get your loan approved and disbursed within minutes, not days like traditional loans.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-2">Secure & Transparent</h3>
                <p className="text-gray-600">
                  Smart contracts ensure your collateral is safely stored and automatically released upon repayment.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-2">Competitive Rates</h3>
                <p className="text-gray-600">
                  Enjoy lower interest rates compared to traditional unsecured loans and credit cards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Terms Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Loan-to-Value (LTV)</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Up to 75% for major cryptocurrencies</li>
                <li>• Up to 65% for selected altcoins</li>
                <li>• Flexible collateral options</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Interest Rates</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Starting from 12% APR</li>
                <li>• No hidden fees</li>
                <li>• Transparent pricing</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Loan Duration</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 3 to 12 months terms</li>
                <li>• Flexible repayment options</li>
                <li>• No early repayment fees</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/get-started"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}