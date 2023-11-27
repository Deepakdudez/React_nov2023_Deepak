// AboutUs.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Nfooter';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', minHeight: '100vh' }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <img src="https://images.unsplash.com/photo-1565055887414-3c2b21f9cd73?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Event Image" style={{ width: '100%', height: 'auto' }} />
            
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              What Do We Do
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                <li><h3>Corporate Calendar Events</h3></li>
                <li><h3>Promotions & Launches</h3></li>
                <li><h3>Exhibitions Stall Designing</h3></li>
                <li><h3>Event Marketing – Outdoor Media, Radio, Mall Display, Product Branding</h3></li>
                <li><h3>Brand Affiliations & Acquisitions</h3></li>
                <li><h3>Weddings and Destination Weddings</h3></li>
                <li><h3>Social Events</h3></li>
                <li><h3>Event Travel Services</h3></li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body8" paragraph>
          Feel free to reach out to us for all your event planning needs. We look forward to turning your visions into reality!
        </Typography>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutUs;
