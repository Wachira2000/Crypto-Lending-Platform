import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export function LoanCalculator() {
  const [collateral, setCollateral] = useState('');
  const [term, setTerm] = useState('6');
  const [schedule, setSchedule] = useState('monthly');

  const calculateLoan = (collateralAmount: number) => {
    // Simple LTV calculation (75% of collateral value)
    return collateralAmount * 0.75;
  };

  const handleCollateralChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCollateral(value);
  };

  const loanAmount = collateral ? calculateLoan(parseFloat(collateral)) : 0;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Calculator className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">Loan Calculator</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Collateral Amount (ETH)
          </label>
          <input
            type="number"
            value={collateral}
            onChange={handleCollateralChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="0.00"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Loan Term
          </label>
          <select
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="3">3 months</option>
            <option value="6">6 months</option>
            <option value="12">12 months</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Repayment Schedule
          </label>
          <select
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-medium text-gray-900">Loan Summary</h3>
          <div className="mt-2 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Available Loan Amount</span>
              <span className="font-medium">${loanAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">APR</span>
              <span className="font-medium">12%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">LTV Ratio</span>
              <span className="font-medium">75%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}