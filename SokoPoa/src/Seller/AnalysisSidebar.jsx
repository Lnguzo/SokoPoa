import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function AnalysisSidebar() {
  return (
    <aside className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
      {/* Promotional Card */}
      <div className="relative rounded-xl overflow-hidden bg-inverse-surface text-inverse-on-surface p-lg-sp h-64 flex flex-col justify-end shadow-md">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXrz11osh9MKOEljJEYPszSGRLesNjVK2wEhG2iA7ksjc94czBsTgvPfIf15_No27UT6mV59cZ6oWW8oRtqDCqzwh0S0odfugmOk2BN-4KcAWoXU69rPXOTBc4DeQNPVGObPodP2CmUDIIh9qY22OjtHmv5n-VUJDSmxGlP3Rxg1qWNZq0Frd070uZmYR5v35NHlAwDhZtk3kxEIYVdI-WwJBs5AkiukhuBp2CFGNf-4yDRPt7mB6uEpjpgDaNobpOCwGeTk0Iiw" 
          alt="Market Analysis" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10">
          <div className="bg-primary px-2 py-1 rounded inline-block mb-3">
            <span className="font-label-md text-[10px] uppercase font-bold text-on-primary">New Insight</span>
          </div>
          <h3 className="font-headline-md font-bold mb-1 leading-tight">Q4 Market Trends Report</h3>
          <p className="font-body-md text-outline-variant mb-4">Unlock deep competitive analysis and sector pricing benchmarks.</p>
          <button className="bg-surface-container-lowest text-on-surface px-6 py-2.5 rounded-xl font-label-md font-bold w-full hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm">
            Download PDF
          </button>
        </div>
      </div>

      {/* Sector Index Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg-sp">
        <h4 className="font-title-md text-on-surface mb-4">Sector Index</h4>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-label-md text-on-surface-variant">Manufacturing</span>
              <span className="font-data-tabular text-tertiary-container">+4.2%</span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: '78%' }}></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-label-md text-on-surface-variant">Logistics</span>
              <span className="font-data-tabular text-error">-0.8%</span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full opacity-60 transition-all duration-1000" style={{ width: '45%' }}></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-label-md text-on-surface-variant">Raw Materials</span>
              <span className="font-data-tabular text-tertiary-container">+2.1%</span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full opacity-80 transition-all duration-1000" style={{ width: '62%' }}></div>
            </div>
          </div>
        </div>
        <button className="mt-6 w-full border border-outline-variant py-2.5 rounded-xl font-label-md hover:bg-surface-container-low transition-colors font-semibold">
          Detailed Performance Review
        </button>
      </div>

      {/* Pro Badge Section */}
      <div className="bg-primary-fixed text-on-primary-fixed rounded-xl p-lg-sp border border-primary-fixed-dim">
        <div className="flex items-center gap-3 mb-3">
          <ShieldCheck className="w-8 h-8 fill-primary stroke-on-primary-fixed" />
          <span className="font-title-md">Verified Pro Seller</span>
        </div>
        <p className="font-body-md mb-4 leading-relaxed opacity-90">
          You are currently in the top 5% of sellers in the logistics category. Maintain your rating to keep exclusive benefits.
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {['TOP RATED', 'FAST SHIPPER', 'ACCURATE'].map(tag => (
            <span key={tag} className="flex-shrink-0 bg-on-primary-fixed text-primary-fixed px-2 py-1 rounded font-label-md text-[10px] font-bold tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
