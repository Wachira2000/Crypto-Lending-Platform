import React, { useState } from 'react';
import { ArrowLeft, Wallet2, Shield, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function GetStarted() {
  const [step, setStep] = useState(1);
  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = () => {
    // Wallet connection logic would go here
    setWalletConnected(true);
  };

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((number) => (
              <div key={number} className="flex-1">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= number ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {number}
                  </div>
                  {number < 3 && (
                    <div className={`flex-1 h-1 mx-2 ${
                      step > number ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
                <div className="text-sm mt-2">
                  {number === 1 && 'Connect Wallet'}
                  {number === 2 && 'Verify Identity'}
                  {number === 3 && 'Complete Application'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {step === 1 && (
            <div>
              <div className="text-center mb-8">
                <Wallet2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Connect Your Wallet</h2>
                <p className="text-gray-600">
                  Connect your cryptocurrency wallet to begin the loan application process
                </p>
              </div>

              <button
                onClick={connectWallet}
                className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                  walletConnected 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
              </button>

              <div className="mt-6 bg-blue-50 rounded-md p-4">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Secure Connection</h3>
                    <p className="mt-1 text-sm text-blue-600">
                      We use industry-standard security protocols to ensure your wallet connection is safe and private
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Verify Your Identity</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Government ID Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Application</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount (USD)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Term
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option>3 months</option>
                    <option>6 months</option>
                    <option>12 months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Purpose of Loan
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 rounded-md p-4">
                <div className="flex">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
                    <p className="mt-1 text-sm text-yellow-600">
                      Please review all information carefully before submitting. You'll be asked to sign a smart contract agreement in the next step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
            )}
            <button
              onClick={handleContinue}
              disabled={step === 1 && !walletConnected}
              className={`px-6 py-2 rounded-md text-white font-medium ${
                step === 1 && !walletConnected
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {step === 3 ? 'Submit Application' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}