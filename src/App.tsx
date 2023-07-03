import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../src/frontEnd/home/navbar';
import Carousel from '../src/frontEnd/home/carousel'
import Conta from '../src/frontEnd/perfilUser/conta'
import Login from '../src/frontEnd/login-signup/login';
import Signup from '../src/frontEnd/login-signup/Signup';
import RecuperarSenha from '../src/frontEnd/login-signup/recuperarSenha'
import Home from '../src/frontEnd/home/content';
import Footer from '../src/frontEnd/home/footer'

// nome da função tem que iniciar com MAIUSCULA
function App() {
  
  return <div><Navbar/>
    <Home/>
    <Footer/>
  </div>
}

export default App
