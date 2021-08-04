import { Divider } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';
import Nav from './components/Nav';
import OtherTech from './components/OtherTech';
import Projects from './components/Projects';
import ScrollButton from './components/ScrollButton';
import TechStack from './components/TechStack';
import Auth from './pages/Auth';
//import Home from './pages/Home';

function App() {
  return (
    <>
      <Nav />
      <ScrollButton />
      <Auth />
      <Divider />
      <About />
      <Divider mt="50px" />
      <TechStack />
      <OtherTech />
      <Divider mt="50px" />
      <Projects />
      <Divider mt="50px" />
      <Hobbies />
      <Divider mt="50px" />
      <Footer />
    </>
  );
}

export default App;
