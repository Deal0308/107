import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import Cart from './pages/cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './pages/about';
import Home from './pages/home';
import Admin from './pages/admin';
import { getProducts } from './services/dataservice.js';
import DataService from './services/dataservice.js';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import GlobalProvider from '../store/globalprovider';

// Create a footer Component and render it in the App.js


function App() {
  const [catalog, setCatalog] = useState([]);

  function loadData() {
    let data = DataService.getCatalog();
    console.log(data)
    setCatalog(data);
  }
  
  useEffect(() => {
    loadData();
    // getProducts()
    //   .then((data) => {
    //     setCatalog(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);

  return (
    <GlobalProvider>
    <BrowserRouter>
      <div className="App">
        
          <Navbar />
          <Routes>
            <Route path="/" element={<Home catalog={catalog} />} />
            <Route path="/home" element={<Home catalog={catalog} />} />
            <Route path="/catalog" element={<Catalog catalog={catalog} />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/cart" element={<h1>Cart</h1>} />
          </Routes>
          <Footer />
       
      </div>
    </BrowserRouter>
    </GlobalProvider>
  );
}
export default App;
