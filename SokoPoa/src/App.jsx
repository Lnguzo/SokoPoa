
import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'motion/react';
import Header from './Seller/Header';
import StatsGrid from './Seller/StatsGrid';
import NearbyRequests from './Seller/NearbyRequest';
import AnalysisSidebar from './Seller/AnalysisSidebar';
import Footer from './Seller/Footer';
import Sidebar from './Seller/Sidebar';

export default function App() {
  return (
    <div className="flex min-h-screen bg-background text-on-surface">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-10 bg-background min-h-screen flex flex-col relative">
        <Header />
        
        <StatsGrid />
        
        <div className="grid grid-cols-12 gap-gutter flex-1">
          <section className="col-span-12 lg:col-span-8 flex flex-col">
            <NearbyRequests />
          </section>
          
          <AnalysisSidebar />
        </div>
        
        <Footer />

        {/* Floating Action Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-10 right-10 bg-primary text-on-primary p-4 rounded-full shadow-2xl flex items-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition-all z-50 cursor-pointer"
        >
          <div className="bg-white/20 p-1 rounded-full">
            <Plus className="w-6 h-6" />
          </div>
          <span className="font-title-md pr-2">Post Services</span>
        </motion.button>
      </main>
    </div>
  );
}