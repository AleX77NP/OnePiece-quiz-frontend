import { Divider } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Nav from './components/Nav';
import OtherTech from './components/OtherTech';
import TechStack from './components/TechStack';
import Auth from './pages/Auth';
//import Home from './pages/Home';

function App() {
  return (
    <>
      <Nav />
      <Auth />
      <Divider />
      <About />
      <Divider mt="50px" />
      <TechStack />
      <OtherTech />
      <Divider mt="50px" />
      <Hobbies />
    </>
  );
}

export default App;
