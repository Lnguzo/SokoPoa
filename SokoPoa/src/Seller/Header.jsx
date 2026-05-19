import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-xl-sp">
      <div>
        <h2 className="font-headline-lg text-on-surface">Seller Dashboard</h2>
        <p className="font-body-md text-on-surface-variant text-[14px]">Welcome back, your operational overview is up to date.</p>
      </div>
      
      <div className="flex items-center gap-lg-sp">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search insights..." 
            className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:outline-none font-body-md w-64"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
        </div>
        
        <div className="flex gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
            <Bell className="w-5 h-5 text-on-surface-variant" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
            <Settings className="w-5 h-5 text-on-surface-variant" />
          </button>
          <div className="relative group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD650hqp7Nj01Oy9ez93of7AFMnFh1D7d3pGdPHQKHcBT0PRZskLxgaM8LAzsql1DbL51u1xW85-LGMQiiQH0KZeM3FKGl1rRa6AVMF_Jg0SYUOImfLW239dGf5JTaE2oLjHTxDkWULYR89oP7mV6IpxUIHCJbYDUCRmf-Qrd-TmiW7RGXwxGYAk4758ZZr82tAckkSUnpf0MVAlhn4aJlrWysdab0abGjCywu3_Ix2JnDJSfwhVy5THXh5rGIjo99kTYzXvOAFWQ" 
              alt="Profile" 
              className="w-10 h-10 rounded-full border border-outline-variant cursor-pointer group-hover:border-primary transition-colors"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
