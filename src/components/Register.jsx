import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Box, Alert, } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';



const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'password') {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordRegex.test(value)) {
        setPasswordError('Password must be at least 8 characters long and contain at least one letter and one number.');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    setRegistrationSuccess(true);

    console.log('Form submitted with data:', formData);
  };


  const handleSubmit1 = () => {
    const api="http://localhost:1000/users";
    if (formData.password === formData.confirmPassword) {
      axios.post(api, {name : formData.username, email: formData.email, password : formData.confirmPassword})

    }
  }
  return (
    <Box
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5" style={{ marginBottom: '20px' }}>
            Registration Form
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              autoFocus
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!passwordError}
              helperText={passwordError}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {registrationSuccess && (
              <Alert variant="filled" severity="success" style={{ marginTop: '10px' }}>
                Registration Successful!{' '}
                <Typography >
                <Link to='/Login' color='inherit'>
                    {'<- Go to Login for Logging in'}
                    </Link>
                 
                </Typography>
              </Alert>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
              disabled={passwordError || registrationSuccess}
              onClick={handleSubmit1}
            >
              Register
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegistrationForm;
