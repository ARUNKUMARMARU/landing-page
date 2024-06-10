import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'Building responsive and modern web applications.', link: '/' },
    { title: 'Graphic Design', description: 'Creating visually appealing graphics and layouts.', link: '/' },
    { title: 'SEO Optimization', description: 'Improving search engine rankings and visibility.', link: '/seo' },
    { title: 'Content Creation', description: 'Producing engaging and relevant content for your audience.', link: '/' },
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="service-card-link">
            <div className="service-card">
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
