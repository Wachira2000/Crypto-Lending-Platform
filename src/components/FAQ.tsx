import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-blue-600" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does crypto-backed lending work?",
      answer: "Crypto-backed lending allows you to use your cryptocurrency as collateral to secure a loan. You maintain ownership of your crypto assets while accessing immediate cash. The loan amount is typically up to 75% of your collateral's value, and you can continue benefiting from any appreciation in your crypto's value."
    },
    {
      question: "What happens if the value of my crypto collateral drops?",
      answer: "If your collateral value drops below a certain threshold (typically 85% LTV), you'll receive a margin call notification. You'll then have the option to either add more collateral or repay part of the loan to maintain the required loan-to-value ratio. We provide ample time and multiple notifications before any liquidation actions."
    },
    {
      question: "What cryptocurrencies do you accept as collateral?",
      answer: "We currently accept major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), and selected top-tier altcoins. The complete list of accepted cryptocurrencies and their respective LTV ratios can be found in your dashboard after connecting your wallet."
    },
    {
      question: "How long does it take to get approved for a loan?",
      answer: "Our loan approval process is nearly instantaneous. Once you connect your wallet and provide the required collateral, you can receive your loan within minutes. The actual disbursement time may vary depending on your chosen payout method and network conditions."
    },
    {
      question: "What are the interest rates and terms?",
      answer: "Our interest rates start from 12% APR, with the exact rate depending on your loan amount, term length, and collateral type. We offer flexible loan terms ranging from 3 to 12 months, with options for early repayment without penalties."
    },
    {
      question: "Is my crypto collateral safe?",
      answer: "Yes, your crypto collateral is secured using institutional-grade custody solutions with multi-signature security and insurance coverage. We employ industry-leading security practices and regular audits to ensure the safety of your assets."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HelpCircle className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our crypto-backed lending services
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}