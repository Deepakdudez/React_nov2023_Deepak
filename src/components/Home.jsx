
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Avatar, Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useContext } from 'react';


import EventBox from './Eventbox';
import Footer from './Nfooter';
import { userContext } from './Context';


const Home = () => {

  const [user, setuser] = useContext(userContext);
  return (
    <div style={{ minHeight: '10vh', backgroundColor: '' }}>
      <Navbar/>
      <Container width="md" style={{ marginTop: '20px', padding: '10px', backgroundColor: ' #E8BEAC ', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
        


        <Typography variant="h4" gutterBottom>
          Welcome to Our Event Management Platform

        </Typography>
          
        <Typography variant="body8" paragraph>
          Plan and book your events with ease. From weddings to corporate gatherings, we've got you covered.
        </Typography>
        <Typography variant="body1" paragraph>
          <h2><center>Explore our services and make your event unforgettable!</center></h2>
        </Typography>
        <Grid sx = {{padding : '50px'}} container rowSpacing={2} columnSpacing={3} columnGap={5} alignItems={'center'} justifyContent={'space-around'} >
          <Link to='/Social'>
            <Button>

            <EventBox title="Social Event" description="Birthday parties,Anniversary celebrations,Graduation parties" />
            </Button>
            </Link>
          <Link to='/Weddingevent'><Button><EventBox title="Wedding" description="Ceremony,Reception,Engagement party,Bridal shower etc.." /></Button></Link>
          <Link to='/Corporate'><Button><EventBox title="Corporate Events" description="Conferences, Seminars, Workshops, Product launches etc.." /></Button></Link>
          <Link to='/Sporting'><Button><EventBox title="Sporting Events" description="Tournaments, Cricket Matches, Sports day events and etc.." /></Button></Link>
          <Link to='/Concerts'><Button><EventBox title="Concerts and Performances" description="Music concerts., Dance performances, Classical music etc.." /></Button></Link>
          <Link to='/Holi'><Button><EventBox title="Holiday Events" description="Christmas parties,New Year's Eve celebrations, Diwali etc.." /></Button></Link>
        </Grid>
      </Container>
      <Footer/>
      
    </div>
  );
};

export default Home;
