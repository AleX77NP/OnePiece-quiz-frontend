import { Divider } from '@chakra-ui/react';
import React, { Suspense, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ScrollButton from './components/ScrollButton';
import Auth from './pages/Auth';
import Home from './pages/Home';
import { useAppSelector, useAppDispatch } from './app/hooks'
import { loadUser, userError, selectAuth } from './features/auth/authSlice';
import { BACKEND_URL } from './constants/api';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';
//import TechStack from './components/TechStack';
//import OtherTech from './components/OtherTech';
//import Projects from './components/Projects';
//import Hobbies from './components/Hobbies';
//import Footer from './components/Footer';

const TechStack = React.lazy(() => import('./components/TechStack'))
const OtherTech = React.lazy(() => import('./components/OtherTech'))
const Projects = React.lazy(() => import('./components/Projects'))
const Hobbies = React.lazy(() => import('./components/Hobbies'))
const Footer = React.lazy(() => import('./components/Footer'))


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
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <TechStack />
          <OtherTech />
          <Divider mt="50px" />
          <Projects />
          <Divider mt="50px" />
          <Hobbies />
          <Divider mt="50px" />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
