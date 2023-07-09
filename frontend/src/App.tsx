import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../src/home/navbar';
import Carousel from '../src/home/carousel'
import Conta from '../src/perfilUser/conta/conta'
import Login from '../src/login-signup/login';
import Signup from '../src/login-signup/Signup';
import RecuperarSenha from '../src/login-signup/recuperarSenha'
import Home from '../src/home/content';
import Footer from '../src/home/footer'
import { BrowserRouter as Router, Routes, Outlet, Route } from 'react-router-dom'
import Carrinho from './perfilUser/carrinho/carrinho'

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          
            <Route path="perfilUser/carrinho" element={<Carrinho />} />
            <Route path="perfilUser/conta" element={<Conta />} />
          
          <Route path="recuperarSenha" element={<RecuperarSenha />} />
        </Route>
      </Routes>

      <Footer />
      </Router>
  );
}

export default App;