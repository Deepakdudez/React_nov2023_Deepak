import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import PrivacyTipRoundedIcon from '@mui/icons-material/PrivacyTipRounded';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Navbar';
import Footer from './Nfooter';

const WeddingEvent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    
    name: '',
    phoneNumber: '',
    email: '',
    eventDate: '',
    venue: '',
    guests: '',
    theme: '',
    entertainment: '',
    catering: '',
    decoration: '',
    specialRequests: '',
    budget: '',
    agree: false,
  });

  const images = [
    'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHx3ZWRkaW5nfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1607861884586-c7cfaed16290?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1535185384036-28bbc8035f28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);

  }, [images.length]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!formData.name || !formData.phoneNumber || !formData.email) {
      toast.error('Please fill in all the required fields!');
      return;
    }

    
    toast.success('Booking successful!');
  };

  return (
    <div style={{ minHeight: '10vh' }}>
      <Navbar />
      <div style={{ textAlign: "center", fontSize: "40px", fontFamily: "Fantasy" }}>Wedding</div>

      <Container style={{ marginTop: '40px' }}>
        <Grid container spacing={3} alignItems="center">

          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              <center>Gallery</center>
            </Typography>
            <div className="cont">
              <img
                src={images[currentImageIndex]}
                alt="Contact"
                style={{ width: '100%', height: '800px', borderRadius: '8px', objectFit: 'cover' }}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper elevation={2} style={{ padding: '20px', borderRadius: '8px', marginBlock: '100px' }}>

              <form onSubmit={handleSubmit}>
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                <TextField label="Your Name" name="name" value={formData.name} variant="outlined" fullWidth margin="normal" onChange={handleInputChange} />
                <TextField label="Phone Number" name="phoneNumber" value={formData.phoneNumber} variant="outlined" fullWidth margin="normal" onChange={handleInputChange} />
                <TextField label="Your Email" name="email" value={formData.email} variant="outlined" fullWidth margin="normal" onChange={handleInputChange} />

                <Typography variant="h6" gutterBottom>
                  Event Details
                </Typography>
                <TextField label="Event Date" name="eventDate" value={formData.eventDate} type="date" variant="outlined" fullWidth margin="normal" onChange={handleInputChange} />
                <TextField label="Preferred Venue" name="venue" value={formData.venue} variant="outlined" fullWidth margin="normal" onChange={handleInputChange} />
                <TextField label="Number of Guests" name="guests" value={formData.guests} type="number" variant="outlined" fullWidth margin="normal" onChange={handleInputChange} />
                <TextField label="Theme or Color Preferences" name="theme" value={formData.theme} variant="outlined" fullWidth margin="normal" onChange={handleInputChange} />

              

                <TextField label="Special Requests or Considerations" name="specialRequests" value={formData.specialRequests} variant="outlined" multiline rows={3} fullWidth margin="normal" onChange={handleInputChange} />
                <TextField label="Desired Budget for the Event" name="budget" value={formData.budget} type="number" variant="outlined" fullWidth margin="normal" onChange={handleInputChange} />

                <FormControlLabel
                  control={<Checkbox name="agree" checked={formData.agree} color="primary" onChange={handleInputChange} />}
                  label="I agree to the Privacy Policy."
                />

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  style={{ marginTop: '10px' }}
                >
                  Book Now
                </Button>
              </form>

              <ListItem>
                <ListItemIcon>
                  <PrivacyTipRoundedIcon />
                </ListItemIcon>
                <ListItemText primary=" We will handle your personal data as described in our Privacy Policy, to answer your question and provide information about our products and services." />
              </ListItem>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default WeddingEvent;
