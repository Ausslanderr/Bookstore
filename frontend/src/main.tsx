import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import Login from '../src/login-signup/login.tsx';
import Signup from '../src/login-signup/Signup.tsx';
import RecuperarSenha from '../src/login-signup/recuperarSenha.tsx';
import NavbarPosLogin from './home/navbarPosLogin.tsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Carrinho from './perfilUser/carrinho/carrinho.tsx';
import Conta from './perfilUser/conta/conta.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/recuperarSenha",
    element: <RecuperarSenha/>,
  },
  {
    path: "/home/navbarPosLogin",
    element: <NavbarPosLogin/>,
  },
  {
    path: "/perfilUser/carrinho/",
    element: <Carrinho/>,
  },
  {
    path: "/perfilUser/conta/",
    element: <Conta/>,
  },
  
]);
//<RouterProvider router={router} />

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
   </React.StrictMode>,
)
