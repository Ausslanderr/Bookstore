import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom"
import RoutesApp from './routes';
import { AuthContext, AuthProvider } from './contexts/auth';
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