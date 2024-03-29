import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Grid, Paper, Avatar } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Add your authentication logic here (e.g., API call to verify credentials)

    // For demonstration purposes, let's assume successful login
    console.log('Logged in with:', email);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                {/* <LockOutlinedIcon /> */}
              </Avatar>
            </Grid>
            <Grid item>
              <Typography variant="h5">Login</Typography>
            </Grid>
            {error && (
              <Grid item>
                <Typography variant="body2" color="error">
                  {error}
                </Typography>
              </Grid>
            )}
            <Grid item>
              <form onSubmit={handleLogin} style={{ width: '100%' }}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  margin="normal"
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 10 }}>
                  Login
                </Button>
              </form>
            </Grid>
            <Grid item>
              <Typography>
                Don't have an account? <Link to="/register">Sign up</Link>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
