import React from 'react';
import { LayoutDashboard, Compass, BarChart3, CheckSquare, MessageCircle, HelpCircle, LogOut } from 'lucide-react';
import { motion } from 'motion/react';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";

const navItems = [
  { icon: LayoutDashboard, label: 'Home', active: true },
  { icon: Compass, label: 'Lead Feed' },
  { icon: BarChart3, label: 'Performance' },
  { icon: CheckSquare, label: 'My Tasks' },
  { icon: MessageCircle, label: 'Messages' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 flex flex-col bg-surface-container-lowest border-r border-outline-variant py-xl-sp px-md-sp space-y-base-sp z-50">
      <div className="px-md-sp mb-xl-sp">
        <h1 className="text-[24px] font-black text-on-surface leading-tight">Global Trade Hub</h1>
        <p className="font-label-md text-on-surface-variant">Premier Seller</p>
      </div>
      
      <nav className="flex-1 space-y-xs">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-md-sp px-md-sp py-base-sp rounded-lg transition-all duration-200 ease-in-out ${
              item.active 
                ? 'bg-secondary-container text-on-secondary-container font-bold' 
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-label-md">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="pt-xl-sp border-t border-outline-variant space-y-xs">
        <motion.button 
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary text-on-primary py-3 rounded-xl font-title-md mb-md-sp cursor-pointer hover:opacity-90 transition-colors"
        >
          Upgrade Plan
        </motion.button>
        
        <a href="#" className="flex items-center gap-md-sp px-md-sp py-base-sp text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all">
          <HelpCircle className="w-5 h-5" />
          <span className="font-label-md">Help Center</span>
        </a>
        <a href="#" className="flex items-center gap-md-sp px-md-sp py-base-sp text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all">
          <LogOut className="w-5 h-5" />
          <span className="font-label-md">Log Out</span>
        </a>
      </div>
    </aside>
  );
}
