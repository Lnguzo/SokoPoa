import React from 'react';

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center w-full mt-xl-sp py-lg-sp border-t border-outline-variant bg-surface-container-lowest">
      <span className="font-title-md font-black text-on-surface">VendorPro</span>
      
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 my-4 md:my-0">
        {['Privacy Policy', 'Terms of Service', 'API Status', 'Seller Handbook'].map(link => (
          <a 
            key={link} 
            href="#" 
            className="font-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
      
      <p className="font-label-md text-on-surface-variant">© 2024 VendorPro Marketplace. All rights reserved.</p>
    </footer>
  );
}
