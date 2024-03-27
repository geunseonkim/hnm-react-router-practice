import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductAll from './page/ProductAll'
import Login from './page/Login'
import ProductDetail from './page/ProductDetail'
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[authenticate, setAuthenticate] = useState(false) // true: login success
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
