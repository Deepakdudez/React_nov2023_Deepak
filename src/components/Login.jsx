import React, { useContext, useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';
import { userContext } from './Context';

const Login = () => {
  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [user, setuser] = useContext(userContext);

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handleSubmit = async(e) => {
      e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    setError('');

    console.log('Username:', username);
    console.log('Password:', password);
    const api1=`http://localhost:1000/users?name=${username}`
    const response = await axios.get(api1)
    if(response.data.length!==0  && response.data[0].password===password)

    {
      setuser(username);
      navigate('/')
      
    }
    else{
      navigate('/Login')
    }
  };

  const containerStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={containerStyle}>
       
        <header style={{ background: '#303030', padding: '2px', textAlign: 'center', marginBottom: '20px', opacity: '80%', position: 'relative' }}>
          
          <Typography variant="h4" component="div" color="textPrimary">
            <center>Event Management Organization</center>
            
          <Link to = '/'><HomeIcon fontSize="large"color="primary" sx={{marginRight: '1399px',marginBottom: '20px'}} /></Link>
          </Typography>
         
        </header>

        
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: '92%' }}>
          <Paper elevation={3} style={{ padding: '20px', width: '300px', transition: 'transform 0.3s, box-shadow 0.3s', background: 'grey' }}>
            
            <form onSubmit={handleSubmit}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ transition: 'box-shadow 0.3s' }}
                inputProps={{ style: { backgroundColor: 'rgba(255,255,255,0.1)' } }}
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ transition: 'box-shadow 0.3s' }}
                inputProps={{ style: { backgroundColor: 'rgba(255,255,255,0.1)' } }}
              />
              {error && <Typography variant="body2" color="error" align="center" gutterBottom>{error}</Typography>}

              <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '10px' }}>
                <Link href="#" color="inherit">
                  Forgot Password?
                </Link>
              </Typography>

              <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '10px', transition: 'background-color 0.3s' }}>
                Login
              </Button>
            </form>
          </Paper>
        </div>

       
        <footer style={{ background: '#303030', padding: '10px', textAlign: 'center', opacity: '88%' }}>
            <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
              Don't have an account?
              <Link to="/Register" color="inherit">
                <Typography color='yellow'>Register</Typography>
              </Link>
            </Typography>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Login;