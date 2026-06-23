import React from 'react';
import '../styles/design-system.css';

export default function Header(){
  return (
    <header className="site-header fade-in">
      <div className="brand">
        <div className="logo" />
        <div>
          <div style={{fontWeight:700}}>SokoPoa</div>
          <div className="muted" style={{fontSize:'12px'}}>Simple product uploads</div>
        </div>
      </div>
      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#products">Products</a>
        <a href="#contact" className="primary">Get Started</a>
      </nav>
    </header>
  );
}
