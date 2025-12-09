import React from 'react';

export const InfoGrid: React.FC = () => {
  return (
    <section className="bg-white py-20" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: How It Works */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-red-700 md:text-blue-900">How It Works</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-600 leading-relaxed marker:font-bold marker:text-blue-600">
              <li>Register online using the link below.</li>
              <li>Bid on only the items you want.</li>
              <li>Auction begins closing at 7 PM on specified nights and will go through each item.</li>
              <li>If you're the winner you'll be emailed and charged on the credit card you registered with.</li>
              <li>Pick up items during the pick up times on the top of your invoice!</li>
            </ol>
          </div>

          {/* Column 2: Details */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-red-700 md:text-blue-900">Details</h2>
            <ul className="list-disc list-outside ml-5 space-y-3 text-gray-600 leading-relaxed marker:text-teal-500">
              <li>Most items start at $1</li>
              <li>24 hr return policy if item is not working</li>
              <li>Online viewing only</li>
              <li>All items are pick up only at our Southern California location after auction closing.</li>
              <li>We are offering curbside pickups</li>
              <li>15% buyers premium and Sales Tax applies</li>
              <li>Bidding schedules vary by auction event.</li>
            </ul>
            <div className="pt-4">
              <a href="#auctions" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded transition-colors">
                Go to Auctions
              </a>
            </div>
          </div>

          {/* Column 3: Get Updates */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-red-700 md:text-blue-900">Get Updates First</h2>
            <p className="text-gray-600 leading-relaxed">
              Be the first to know about any upcoming deals or events by signing up for our VIP Notification List here.
            </p>
            <div className="pt-4">
              <a href="#get-notifications" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded transition-colors">
                Sign Up
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};