
import React from 'react';
import web from './image/hero-img.png';
import Common from './Common.jsx';

const About = () =>{
  return (
    <>
    <Common
    name="Welcome to About page"
    imgsrc={web}
    visit="/Contact"
    btname="Contact Now"
    />
    </>

  );
}
export default About;