import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact'
import FetchData from './FetchData'
import Navbar from '../components/Navbar'
import Footer from './Footer';


const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/fetchdata' element={<FetchData/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
    )
  }

export default App