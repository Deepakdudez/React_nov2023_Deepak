import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Navbar from './Home';
import Login from './Login';
import RegistrationForm from './Register';
import Social from './Social';
import WeddingEvent from './Wedding';
import CorporateEvent from './Corporateevent';
import SportingEvent from './Sportingevent';
import AboutUs from './About';
import Feedback from './Feedback';
import Concerts from './Conserts';
import HolidayEvent from './Holiday';
    
    const route = createBrowserRouter([
      
            
            
                {path: '/', element: <Navbar/>},
                {path: '/Login', element:<Login/> },
                {path: '/Register', element:<RegistrationForm/>},
                {path: '/Social', element:<Social/>},
                {path: '/Weddingevent', element:<WeddingEvent/>},
                {path: '/Corporate', element:<CorporateEvent/>},
                {path: '/Sporting', element:<SportingEvent/>},
                {path: '/About', element:<AboutUs/>},
                {path: '/Feedback', element:<Feedback/>},
                {path: '/Concerts', element:<Concerts/>},
                {path: '/Holi', element:<HolidayEvent/>}
                
           
       
        
        
    ]);


export default route;