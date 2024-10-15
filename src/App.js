import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Event from './components/Event';
import Eticket from './components/Eticket';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import Signin from './components/SignIn';








function App () {
  return (
    <>
    
    <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Events' element={<Events/>}></Route>
    <Route path='/Event' element={<Event/>}></Route>
    <Route path='/Eticket' element={<Eticket/>}></Route>
    <Route path='/Gallery' element={<Gallery/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Signin' element={<Signin/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route>
    <Route path='/ForgotPassword' element={<ForgotPassword/>}></Route>


    
    </Routes>

    </>
  );
}

export default App