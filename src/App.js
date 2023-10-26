import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import About from './pages/about';
import Home from './pages/home';
import Admin from './pages/admin';
import { getProducts } from './services/dataservice.js';


import {BrowserRouter,Routes,Route} from 'react-router-dom';

// Create a footer Component and render it in the App.js


function App() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setCatalog(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App"> 
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home catalog={catalog}/>}/>
          <Route path="/catalog" element={<Catalog catalog={catalog}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>

        
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
