import React from 'react';

export const Newsletter: React.FC = () => {
  return (
    <section id="get-notifications" className="bg-blue-800 py-16 text-white border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Sign Up to Our VIP List</h2>
          <p className="text-blue-200 text-lg">
            Be the first to receive notifications of deliveries of new products! Remember, we get limited quantities of each item and they go fast!
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col">
            <input 
              type="email" 
              placeholder="Email Address*" 
              required
              className="px-4 py-4 rounded border-2 border-transparent focus:border-teal-400 focus:outline-none text-gray-900 bg-white"
            />
          </div>
          <div className="flex flex-col">
            <input 
              type="text" 
              placeholder="First Name" 
              className="px-4 py-4 rounded border-2 border-transparent focus:border-teal-400 focus:outline-none text-gray-900 bg-white"
            />
          </div>
          <div className="flex flex-col">
            <button 
              type="submit"
              className="px-4 py-4 rounded bg-teal-600 hover:bg-teal-500 text-white font-bold uppercase tracking-wider border-2 border-teal-600 transition-colors shadow-lg"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};