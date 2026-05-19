import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function StatsGrid() {
  const stats = [
    { 
      label: 'Offers Sent', 
      value: '1,284', 
      trend: '+12.4%', 
      subtitle: 'Total active quotes this month',
      trendType: 'primary'
    },
    { 
      label: 'Deals Won', 
      value: '432', 
      trend: '+5.2%', 
      subtitle: 'Conversion rate: 33.6%',
      trendType: 'tertiary'
    },
    { 
      label: 'Seller Rating', 
      value: '4.85', 
      isRating: true,
      subtitle: 'Based on 2,150 buyer reviews'
    }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl-sp">
      {stats.map((stat, idx) => (
        <motion.div 
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-surface-container-lowest border border-outline-variant p-lg-sp rounded-xl flex flex-col justify-between hover:border-primary transition-colors cursor-pointer group"
        >
          <div className="flex justify-between items-start">
            <span className="font-label-md text-on-surface-variant">{stat.label}</span>
            {stat.trend && (
              <span className={`px-2 py-0.5 rounded-full font-label-md text-[11px] ${
                stat.trendType === 'primary' 
                  ? 'bg-primary-container text-on-primary-container' 
                  : 'bg-tertiary-container text-on-tertiary-container'
              }`}>
                {stat.trend}
              </span>
            )}
            {stat.isRating && (
              <div className="flex items-center text-primary">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <Star className="w-4 h-4 fill-current opacity-50" />
              </div>
            )}
          </div>
          <div className="mt-md-sp">
            <p className="font-display-lg text-on-surface">{stat.value}</p>
            <p className="font-label-md text-on-surface-variant">{stat.subtitle}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
