import React from 'react';
import { Camera, AlertCircle } from 'lucide-react';

export const AuctionPlaceholder: React.FC = () => {
  return (
    <section id="auctions" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Current Auctions</h2>
          <p className="text-gray-600">Browse our latest catalog below.</p>
        </div>

        {/* 
          This is the container specifically requested for the user to place their HiBid screenshot.
          I've styled it to look like a placeholder so they know exactly where to swap the code/image.
        */}
        <div className="w-full bg-white rounded-xl shadow-lg border-4 border-dashed border-blue-200 p-8 flex flex-col items-center justify-center min-h-[600px] relative overflow-hidden group">
          
          {/* Content for the placeholder - User can remove this and put <img src="screenshot.jpg" /> */}
          <div className="text-center space-y-4 max-w-lg z-10">
             <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
               <Camera size={40} />
             </div>
             <h3 className="text-2xl font-bold text-gray-800">HiBid Auction Screenshot Area</h3>
             <p className="text-gray-500">
               Replace this container with your HiBid auction list screenshot or embed code.
               The user can simply insert an <code>&lt;img src="..." /&gt;</code> tag here.
             </p>
             <div className="flex items-center justify-center gap-2 text-sm text-teal-600 bg-teal-50 px-4 py-2 rounded-full">
                <AlertCircle size={16} />
                <span>Image placeholder ready</span>
             </div>
          </div>

          {/* Faint background pattern to make it look nice even when empty */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
             <div className="grid grid-cols-4 gap-4 h-full">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="bg-gray-400 rounded-lg h-64 w-full"></div>
                ))}
             </div>
          </div>
          
        </div>

        <div className="text-center mt-12">
            <button className="bg-blue-700 text-white font-bold py-3 px-8 rounded shadow hover:bg-blue-800 transition">
                Load More Items
            </button>
        </div>
      </div>
    </section>
  );
};