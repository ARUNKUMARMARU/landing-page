import React from 'react';
import './Seo.css';

const SEOPage = () => {
  return (

    <div className="seo-container">

      <div className="background-overlay">

        <h1 className="seo-title fly-in">Search Engine Optimization</h1>

        <p className="seo-description">
          SEO is the practice of optimizing your website to increase its visibility in search engine results pages (SERPs).
          This involves both on-page and off-page tactics such as keyword research, content optimization, link building, and more.
        </p>

        <h2 className="seo-subtitle fly-in">Benefits of SEO</h2>

        <ul className="seo-benefits">
          <li className="fly-in"><i className="benefit-icon fas fa-traffic-light"></i>Increased website traffic</li>
          <li className="fly-in"><i className="benefit-icon fas fa-chart-line"></i>Higher conversion rates</li>
          <li className="fly-in"><i className="benefit-icon fas fa-shield-alt"></i>Improved brand credibility and trust</li>
          <li className="fly-in"><i className="benefit-icon fas fa-dollar-sign"></i>Cost-effective marketing strategy</li>
        </ul>

        <h2 className="seo-subtitle fly-in">Our Approach</h2>

        <div className="approach-section">
          <div className="approach-item fly-in">
            
            <h3>Keyword Research</h3>

            <p>We conduct thorough keyword research to find the most relevant and high-traffic keywords for your industry.</p>
          </div>

          <div className="approach-item fly-in">
            <h3>On-Page Optimization</h3>
            <p>Our team optimizes your website's content and structure to ensure it is search engine friendly.</p>
          </div>

          <div className="approach-item fly-in">
            <h3>Link Building</h3>
            <p>We build high-quality backlinks from reputable sources to increase your website's authority.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SEOPage;
