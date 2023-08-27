import { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/content.js";
import Signin from "../pages/signin/signin.js";
import Signup from "../pages/signup/signup.js";
import React from "react";
import UserManager from "../components/userManager.js";
import Add from "../components/books/Add.js";
import Carrinho from "../pages/perfilUser/carrinho.js";
import Books from "../components/books/Books.js";
import Navbar from "../pages/navbar-footer/navbar.js";
import Footer from "../pages/navbar-footer/footer.js";
import ProductDetails from "../pages/produtos/Produto.js";
import NavbarPosLogin from "../pages/navbar-footer/logged-navbar.js";
import useAuth from "../hooks/useAuth.js";
import { AuthContext, AuthProvider } from "../contexts/auth.js";
import Conta from "../pages/perfilUser/perfil.js"
import BookManager from "../components/estoqueManager.js";
import Sobre from "../pages/about/sobre.js";
import App from "../App.jsx";
import Pedidos from "../pages/perfilUser/pedidos.js";
import Pagamento from "../pages/perfilUser/modal.js";
import ModalPagamento from "../pages/perfilUser/modal.js";
import Manager from "../components/pedidoManager/Manager.js";
import ManagerPedidos from "../components/pedidoManager/Manager.js";
import Admin from "../pages/home/adminHome/content.js";

const RoutesApp = () =>{
    const { user } = useAuth();
    console.log("user index.js:", user);
    return (
        //<BrowserRouter>
        /*
        Tratar o gerenciamento de estoque !!!
        */ 
        <AuthProvider>
            <NavbarPosLogin/>
            <Fragment>
                <Routes>
                    <Route path="/admin" Component={Admin}/>
                    <Route path="/gerenciar-pedidos" Component={ManagerPedidos}/>
                    <Route path="/pedidos" Component={Pedidos}/>
                    <Route path="/app" Component={App}/>
                    <Route path="/sobre" Component={Sobre}/>
                    <Route exact path="/produto/:idLivro" Component={ProductDetails} />
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/login" element={<Signin/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route exact path="gerenciar-usuarios" element={<UserManager/>} />
                    <Route path="*" element={<Home/>}/> 
                    <Route path="gerenciar-estoque" element={<BookManager/>}/>
                    <Route path="/conta" element={<Conta/>}/>
                    <Route path="/carrinho" element={<Carrinho/>} />
                    <Route path="/add" element={<Add/>} />
                    <Route path="/books" element={<Books/>} />
                    <Route path="/payment" element={<ModalPagamento/>}/>
                </Routes>
                
            </Fragment>
            <Footer/>
            </AuthProvider>
        //</BrowserRouter>
    );
};
export default RoutesApp

