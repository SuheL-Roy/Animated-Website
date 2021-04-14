
import React from 'react';
import web from './image/img2.svg';
//import {NavLink} from 'react-router-dom';
import Common from './Common.jsx';
const Home = () => {
    return(
        <>
        <Common
         name="Grow yours business with"
         imgsrc={web}
         visit="/Service"
         btname="Get Start"
        
        />
        </>
    );
    
};

export default Home;