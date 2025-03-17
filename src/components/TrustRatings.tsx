import React from 'react';
import { Star, StarHalf, ThumbsUp, Award, Shield } from 'lucide-react';

export function TrustRatings() {
  const stats = [
    { label: 'Average Rating', value: '4.9/5' },
    { label: 'Total Reviews', value: '2,847' },
    { label: 'Verified Users', value: '10K+' }
  ];

  const recentReviews = [
    {
      id: 1,
      author: "Michael R.",
      rating: 5,
      date: "2 days ago",
      verified: true,
      content: "Outstanding service! Got my crypto-backed loan approved within minutes. The rates are competitive and the platform is incredibly user-friendly.",
      location: "United States"
    },
    {
      id: 2,
      author: "Sophie L.",
      rating: 5,
      date: "1 week ago",
      verified: true,
      content: "CryptoLend has been a game-changer for my crypto investments. Their customer support is exceptional and the whole process is transparent.",
      location: "United Kingdom"
    },
    {
      id: 3,
      author: "David K.",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      content: "Best crypto lending platform I've used. The smart contract implementation gives me peace of mind, and the rates are very competitive.",
      location: "Canada"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />);
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        stars.push(<StarHalf key={i} className="h-5 w-5 text-yellow-400 fill-current" />);
      } else {
        stars.push(<Star key={i} className="h-5 w-5 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Award className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Thousands
          </h2>
          <div className="flex justify-center items-center mt-4 space-x-1">
            {renderStars(4.9)}
            <span className="ml-2 text-lg font-semibold text-gray-900">4.9 out of 5</span>
          </div>
          <p className="mt-2 text-lg text-gray-600">
            Based on 2,847 verified reviews on Trustpilot
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentReviews.map((review) => (
            <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-gray-600 mb-4">{review.content}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">{review.author}</div>
                  <div className="text-sm text-gray-500">{review.location}</div>
                </div>
                {review.verified && (
                  <div className="flex items-center text-green-600">
                    <Shield className="h-4 w-4 mr-1" />
                    <span className="text-sm">Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
            <ThumbsUp className="h-5 w-5" />
            <span className="font-medium">Excellent</span>
            <span className="text-green-600">|</span>
            <span>Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
}