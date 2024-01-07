import React from 'react';
import { Container } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <Container className="App" maxWidth="xl">
      <Navbar />
      <Home />
      <About />
    </Container>
  );
}

export default App;
