import React from 'react';
import { Hammer, Truck, Package, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";

const requests = [
  {
    icon: Hammer,
    title: 'Industrial CNC Machining Lead',
    price: '$12,500 - $15,000',
    location: 'Chicago, IL',
    expires: '4h',
    description: 'Looking for a precision manufacturing partner for a short-run production of aluminum alloy components. Specifications require ISO 9001 certification.'
  },
  {
    icon: Truck,
    title: 'Regional Logistics Fulfillment',
    price: '$4,200 - $5,500',
    location: 'Milwaukee, WI',
    expires: '12h',
    description: 'Urgent requirement for recurring weekly transport of perishable goods between regional distribution centers. Temperature-controlled vehicles required.'
  },
  {
    icon: Package,
    title: 'Bulk Raw Material Sourcing',
    price: '$22,000 - $30,000',
    location: 'Gary, IN',
    expires: '2d',
    description: 'High-volume supply contract for industrial polymers. Seeking multi-year partnership with scalable delivery capabilities.'
  }
];

export default function NearbyRequests() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col h-full">
      <div className="px-lg-sp py-md-sp border-b border-outline-variant flex justify-between items-center bg-white">
        <h3 className="font-title-md text-on-surface">Nearby Requests</h3>
        <div className="flex gap-2">
          <span className="bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-full font-label-md border border-outline-variant">Filters: All</span>
          <span className="bg-primary text-on-primary px-3 py-1 rounded-full font-label-md cursor-pointer hover:bg-primary/90">Live Feed</span>
        </div>
      </div>

      <div className="divide-y divide-outline-variant">
        {requests.map((request, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-lg-sp hover:bg-surface-container-low transition-colors group cursor-pointer flex gap-lg-sp"
          >
            <div className="w-16 h-16 bg-surface-container rounded-xl flex items-center justify-center flex-shrink-0">
              <request.icon className="w-8 h-8 text-primary" />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-title-md text-on-surface">{request.title}</h4>
                <span className="font-data-tabular text-primary">{request.price}</span>
              </div>
              <div className="flex items-center gap-md-sp text-on-surface-variant mb-2">
                <span className="flex items-center gap-1 font-label-md">
                  <MapPin className="w-3.5 h-3.5" />
                  {request.location}
                </span>
                <span className="flex items-center gap-1 font-label-md">
                  <Clock className="w-3.5 h-3.5" />
                  Expires in {request.expires}
                </span>
              </div>
              <p className="font-body-md text-on-surface-variant line-clamp-2">
                {request.description}
              </p>
            </div>
            
            <div className="flex flex-col justify-center">
              <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-xl font-label-md font-bold hover:bg-primary hover:text-on-primary transition-colors">
                Submit Bid
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="p-4 text-center border-t border-outline-variant bg-surface-container-low mt-auto">
        <button className="font-label-md text-primary font-bold hover:underline">
          View All Active Requests (142)
        </button>
      </div>
    </div>
  );
}
