import React from 'react';
import { Facebook, Instagram, MapPin, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200" id="contact-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* About Us */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-red-700 md:text-blue-900">About Us</h3>
            <p className="text-gray-600 leading-relaxed">
              Our goal at <span className="font-bold text-blue-700">SoCalBid</span> is to provide <span className="italic font-medium text-teal-600">great quality items</span> that big brand name stores carry and sell the exact same product <span className="italic font-medium text-teal-600">at 50%-80% off their advertised online price</span>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We can do that by selling items that were discontinued, sample models, end of line or were ordered online then returned because of various reasons, wrong item shipped, customer changed mind, damaged box, minor manufacture defect, etc.
            </p>
          </div>

          {/* Hours & Location + Map */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-red-700 md:text-blue-900">Hours & Location</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                 <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                    <MapPin size={18} /> Address:
                 </h4>
                 <address className="not-italic text-gray-600 mb-6">
                    1234 Ocean Drive, Suite #100,<br/>
                    San Diego, CA 92101
                 </address>

                 <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                    <Clock size={18} /> Hours:
                 </h4>
                 <ul className="text-gray-600 space-y-1">
                   <li>Sun & Mon: Closed</li>
                   <li>Tues-Fri: 10:30am – 5:30pm</li>
                   <li>Saturday: 10:30am – 3:00pm</li>
                 </ul>
              </div>

              {/* Map Placeholder */}
              <div className="h-48 w-full bg-blue-50 rounded-lg overflow-hidden border border-blue-100 relative">
                  {/* Actual iframe map would go here */}
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" 
                    alt="Map Location" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 px-3 py-1 rounded shadow text-xs font-bold text-blue-900">
                        View larger map
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-900 text-white py-6 mt-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-200">
            © Copyright SoCalBid 2024 - Powered by React
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-teal-400 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-teal-400 transition"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Scroll to top button */}
        <button 
          onClick={scrollToTop}
          className="absolute right-8 -top-5 bg-teal-500 hover:bg-teal-600 text-white p-2 rounded shadow-lg transition-transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
            <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
};