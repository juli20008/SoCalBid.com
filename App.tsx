import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfoGrid } from './components/InfoGrid';
import { AuctionPlaceholder } from './components/AuctionPlaceholder';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <InfoGrid />
        <AuctionPlaceholder />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;