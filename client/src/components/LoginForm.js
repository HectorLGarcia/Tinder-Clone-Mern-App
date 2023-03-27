import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container } from '@material-ui/core';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with the actual API call to log in the user
      await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      // Redirect to the main application or another page after successful login
    } catch (error) {
      // Handle login errors
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
