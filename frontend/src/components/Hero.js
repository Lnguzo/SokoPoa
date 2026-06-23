import React from 'react';

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>SokoPoa — Upload & showcase products fast</h1>
        <p>Upload product images, add details, and present a simple storefront. Built for small sellers who need a quick product catalog with image hosting.</p>
        <div className="cta-row">
          <button className="btn">Add Product</button>
          <button className="btn secondary">Learn More</button>
        </div>
        <div className="feature-list">
          <div className="feature"><div className="dot"/> <div><strong>Easy uploads</strong><div className="muted">Drag & drop or select files</div></div></div>
          <div className="feature"><div className="dot"/> <div><strong>Product catalog</strong><div className="muted">Save items to MongoDB</div></div></div>
          <div className="feature"><div className="dot"/> <div><strong>Image hosting</strong><div className="muted">Served from Express</div></div></div>
        </div>
      </div>
      <aside className="card fade-in">
        <h3>Quick stats</h3>
        <div className="muted">No products yet</div>
      </aside>
    </section>
  );
}
