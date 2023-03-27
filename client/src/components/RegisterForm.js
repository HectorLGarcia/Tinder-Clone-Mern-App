import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container } from '@material-ui/core';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // Replace with the actual API call to register a new user
      await axios.post('http://localhost:5000/api/register', {
        email,
        password,
      });

      // Redirect to the login page or another page after successful registration
    } catch (error) {
      // Handle registration errors
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center">
        Register
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
        <TextField
          required
          fullWidth
          margin="normal"
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Register
        </Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
