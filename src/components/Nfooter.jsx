import React from 'react';
import { Container, Typography, List, ListItem, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '20px' }}>
      <Container>
        <Typography variant="h5" gutterBottom>
          We are a team of professionals, and our passion is the creation and implementation of creative and grand events.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <List className="social-icons" style={{ display: 'flex', padding: 0 }}>
              <ListItem>
                <Link href="https://www.facebook.com/" target="_blank" color="inherit">
                  Facebook
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.linkedin.com/" target="_blank" color="inherit">
                  LinkedIn
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.instagram.com/" target="_blank" color="inherit">
                  Instagram
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{marginRight:"200px"}}>
              Services We Offer
            </Typography>
            <List className="services-list" style={{ padding: 0 }}>
              <ListItem>Gallery</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Feedback</ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Reach Us (India)
            </Typography>
            <Typography variant="body1" gutterBottom>
              EVENT TECH : 5th Floor Sunteck Centre, Anna Road,Chennai- 600 001 Tamil Nadu
            </Typography>
            <Typography variant="body1" gutterBottom>
              +91 63xxxxxx
            </Typography>
            <Typography variant="body1">
              <Link href="mailto:sundar16pandian@gmail.com" color="inherit">
                sachin@gmail.com
              </Link>
            </Typography>
          </Grid>
          
        </Grid>
        
      </Container>
      <footer style={{ marginTop: '20px', padding: '10px', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
        <p>&copy; 2023 Your Event Management. All rights reserved.</p>
      </footer>
    </footer>
  );
};

export default Footer;
