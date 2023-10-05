import './App.css';
import {React} from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';

// Create a footer Component and render it in the App.js

function App() {
  return (
    <div className="App"> 
    <Navbar/>
    <QuantityPicker/>
    <Footer/>
    </div> );
}

export default App;

