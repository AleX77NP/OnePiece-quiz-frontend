import { Divider } from '@chakra-ui/react';
import React, { useEffect } from 'react';
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
import Home from './pages/Home';
import { useAppSelector, useAppDispatch } from './app/hooks'
import { loadUser, userError, selectAuth } from './features/auth/authSlice';
import { BACKEND_URL } from './constants/api';
import Loading from './components/Loading';


const App: React.FC = () => {

  const authState = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()

  console.log(authState.auth)

  useEffect(() => {
    const fetchUser = async() => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/auth/user`, {
          headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`
          }
        });
        const user = await response.json()
        //console.log(user)
        if(response.status === 200) {
          dispatch(loadUser(user))
        } else {
          dispatch(userError())
        }
      } catch(e) {
        console.error(e)
        dispatch(userError())
      }
    }

    fetchUser()
  },[dispatch])

  return (
    <>
      <Nav />
      <ScrollButton />
      {authState.auth.isLoading ? <Loading /> : authState.auth.isAuthenticated ? <Home /> : <Auth />}
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
