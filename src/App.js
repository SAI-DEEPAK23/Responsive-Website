import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router,Route, } from 'react-router-dom';
import {Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/products' Component={Products}/>
        <Route path='/services' Component={Services}/>
        <Route path='/sign-up' Component={SignUp}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
