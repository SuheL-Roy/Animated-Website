import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Service from './Service.jsx';
import Navbar from './Navbar.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';


const App = () => {
    return(
        <>
        <Navbar/>

        <Switch>
            
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/Service" component={Service}/>
            <Route exact path="/Contact" component={Contact}/>
            <Redirect to="/" />

        </Switch>
        

        </>
    )

   
   
};

export default App;