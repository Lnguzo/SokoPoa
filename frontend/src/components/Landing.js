import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ProductUpload from './ProductUpload';

export default function Landing(){
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <section className="card-grid">
        <div className="card fade-in">
          <h3>Upload images</h3>
          <p className="muted">Images are stored on the backend and served from /images.</p>
        </div>
        <div className="card fade-in">
          <h3>Products</h3>
          <p className="muted">Product entries include price, category and availability.</p>
        </div>
        <div className="card fade-in">
          <h3>Integrations</h3>
          <p className="muted">Easy to connect with payment or shipping providers.</p>
        </div>
      </section>
      <ProductUpload />
      <footer className="site-footer">Made with ♥ for quick product catalogs</footer>
    </div>
  );
}
