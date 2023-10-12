import './App.css';
import {React} from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Create a footer Component and render it in the App.js

function App() {
  return (
    <div className="App"> 
    <Navbar/>
    <Catalog/>
    <Footer/>
    </div> );
}


export default App;

