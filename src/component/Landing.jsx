import React, { useState } from 'react';
import './Landing.css';
import { Card  } from 'antd';
import {  } from "@ant-design/icons";

import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import home from '../assets/intro.jpg';
import amazon from '../assets/amazon.jpg';
import flipkart from '../assets/flipkart.jpg';
import mynthra from '../assets/mynthra.jpg';
import facebook from '../assets/facebook.jpg';

function Landing() {
  const [isModal, setIsModal] = useState(false);
  const [isFashion, setIsFashion] = useState(false);
  const [isFashion2, setIsFashion2] = useState(false);
  const navigate = useNavigate();

  const onSearch = () => {
    console.log('test');
  };

  const onCancel = () => {
    setIsModal(!isModal);
  };

  const handleSignout = () => {
    setIsModal(!isModal);
  };

  const handleSignin = () => {
    setIsModal(!isModal);
  };

  const handleSignin2 = () => {
    navigate('/signin');
    setIsModal(!isModal);
  };

  const mensfashion = () => {
    setIsFashion(!isFashion);
  };

  const womensfashion = () => {
    setIsFashion2(!isFashion2);
  };

  return (
    <div> 
      <div className='home'>
        <p><b><span style={{color:'red', fontSize:'3.5vw'}}> &nbsp;&nbsp;Boost</span> your online visibility and attract organic traffic with our expert SEO strategies.</b></p>
        <img src={home} alt="" />
      </div>  
    
      <div className='top'>
        <div className='img'>
          <img src={logo} alt="Logo" style={{backgroundColor:'white', height:'75%'}}/>
        </div>
        <div className='menu'>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Contact</a>
        </div>  
      </div>   

      <div className='sentence'>
        <p>About Us</p>
        <h1>Empowering Organizations to Achieve Outcomes</h1>
      </div> 

      <div className="marquee-container">
        <div className="marquee-content">
          <img className="marquee-image" src={amazon} alt="Amazon" />
          <img className="marquee-image" src={flipkart} alt="Flipkart" />
          <img className="marquee-image" src={mynthra} alt="Mynthra" />
          <img className="marquee-image" src={facebook} alt="Facebook" />
          <img className="marquee-image" src={amazon} alt="Amazon" />
          <img className="marquee-image" src={flipkart} alt="Flipkart" />
          <img className="marquee-image" src={mynthra} alt="Mynthra" />
          <img className="marquee-image" src={facebook} alt="Facebook" />
        </div>
      </div> 
      <div className='about'>
        <div>
        <p><b>Brand swift embarked on its journey in the digital marketing industry several years ago with a vision to empower businesses and lead them towards unprecedented success in the digital realm. Over the years, we have relentlessly honed our skills, adapted to the ever-evolving landscape, and transformed countless brands into industry leaders.</b></p>
        </div>
        </div>    
        <div className='sentence'>
        <p>Our Services</p>       
      </div> 
      <div className='allcard'>
      <div>
     <Link to='/seo' style={{textDecoration:'none'}}>
     <Card
    title="Search Engine Optimization (SEO)"
   className='card'
    style={{
      width: 250,
      
    }}
  >
    <p>Boost your online visibility and attract organic traffic with our expert SEO strategies.</p>
    
  </Card>
     </Link>
      </div>
      <div>
      <Card
    title="Pay-Per-Click Advertising (PPC)"
   className='card'
    style={{
      width: 250,
    }}
  >
    <p>Maximize your ad spend and drive targeted traffic with our PPC management services.</p>
    
  </Card>
      </div>
      <div>
      <Card
    title="Social Media Marketing"
   className='card'
    style={{
      width: 250,
    }}
  >
    <p>Engage your audience and build a strong online presence with our social media solutions.</p>
    
  </Card>
      </div>
      <div>
      <Card
    title="Content Marketing"
   className='card'
    style={{
      width: 250,
    }}
  >
    <p>Create compelling content that resonates with your audience and drives engagement.</p>
    
  </Card>
      </div>
      <div>
      <Card
    title="Email Marketing"
   className='card'
    style={{
      width: 250,
    }}
  >
    <p>Reach your customers directly with personalized email campaigns that convert.</p>
    
  </Card>
      </div>
      
      </div>
    </div>
  )
}

export default Landing;
