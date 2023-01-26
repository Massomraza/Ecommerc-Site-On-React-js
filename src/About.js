import React from 'react';
import HeroSection from './components/HeroSection';
import { ContextHook } from './context/ProductContext';

const About = () => {
  const {myName} = ContextHook();
  const data = {
    name: "Masoom Ecommerc"
  }
  return (
    <>
      {myName}
      <HeroSection myData={data}></HeroSection>    
    </>
  )
  
};

export default About;