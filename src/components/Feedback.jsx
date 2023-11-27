import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import Navbar from './Navbar';

import Footer from './Nfooter';
const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of feedback, e.g., send it to a server or store it locally.
    console.log('Feedback submitted:', feedback);
    // Optionally, you can reset the form after submission.
    setFeedback('');
  };

  return (
    <div>
    <Navbar></Navbar>
    <Container maxWidth="md" >
      <Typography variant="h4" gutterBottom>
        Feedback Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Feedback"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Submit Feedback
        </Button>
      </form>
    </Container>
    <Footer></Footer>
    </div>
  );
};

export default FeedbackForm;
