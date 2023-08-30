import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './pages/signin/signin'
import Signup from './pages/signup/signup'
import Footer from './pages/navbar-footer/footer';
//import Login from '../src/pages/signin/signin'
import RoutesApp from './routes';
import { AuthContext, AuthProvider } from './contexts/auth';
/*
import Home from './pages/home/content';
import UserManager from './components/userManager';
import Conta from './pages/perfilUser/perfil';
import Carrinho from './pages/perfilUser/carrinho';
import EstoqueManager from './components/estoqueManager';
import Add from './components/books/Add';
import Books from './components/books/Books';
const router = createBrowserRouter([
  {
    path: "/gerenciar-usuarios",
    element: <UserManager/>,
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
    path: "/",
    element: <Home/>,
  },
  {
    path: "/conta",
    element: <Conta/>,
  },
  {
    path: "/carrinho",
    element: <Carrinho/>,
  },
  {
    path: "/add",
    element: <Add/>
  },
  {
    path: "/books",
    element: <Books/>
  }
  
])*/
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  <RouterProvider router={router}>
        <RoutesApp /> {/* Render your frontend routes }    
            <Home/>   
        </RouterProvider>
    <Footer/>
  </React.StrictMode>
);*//*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <RouterProvider router={router}>
      <RoutesApp /> {/* Render your frontend routes }
    </RouterProvider>
    <Footer /> {/* Footer is also rendered outside RouterProvider }
    </React.StrictMode>
);*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Renderizando o index.js do /routes
  <BrowserRouter>
    <AuthProvider>
    <RoutesApp/>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);