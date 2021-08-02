import { Divider } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Auth from './pages/Auth';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Nav />
      <Auth />
      <Divider />
      <About />
    </>
  );
}

export default App;
