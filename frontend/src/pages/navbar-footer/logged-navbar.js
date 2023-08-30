import {Link} from 'react-router-dom';
import logo from '../../assets/images/Closed_Book_Icon.svg.png'; // substitua o caminho pela localização correta da imagem
import cart from '../../assets/images/shopping-cart.png';
import userFoto from '../../assets/images/user.png'
import {useNavigate} from "react-router-dom"
import { useState } from 'react';
import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

function NavbarPosLogin(){
  const { signout } = useAuth();
  const { user, setUser } = useAuth();
  const { adminUser} = useAuth();
  const [showOptions, setShowOptions] = useState(false);
  console.log("email do admin: ", adminUser );
  const handleLogOut = async (e) =>{
    try{
      await signout();
    }
    catch(error){
      console.error("erro de logout", error);
    }
  }
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  }; 
  console.log(user);
    return (
      <div style={{color:'gray'}}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
          <div className="container-fluid">
            <img src={logo} alt="GameDame" style={{width:'45px', height:'45px'}} />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={"/"}>
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                  </Link>
                </li>
                
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Gêneros
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Acadêmicos
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Literatura Clássica
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                       HQs e Mangás
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Infantis
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to={"/sobre"}>
                  <a className="nav-link" href="#">
                    Sobre Nós
                  </a>
                  </Link>
                </li>
              </ul>
              
              <form className="d-flex" role="search">
                {/*
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Procure Autores ou Títulos"
                  aria-label="Search"
                />
                  <button style={{ marginRight:'5px'}} className="btn btn-primary" type="submit">
                    <i className="fas fa-search"></i> {/* Ícone de lupa do FontAwesome }
                  </button>
             */ }

                {user != null ? (
                <div style={{ position: 'relative' }}>
                  <img
                    src={userFoto}
                    alt=""
                    style={{ width: '25px', height: '25px', marginRight: '15px', cursor: 'pointer' }}
                    onClick={toggleOptions}
                  />
                  {showOptions && (
                    <div style={{ position: 'absolute', top: '100%', left: '0',  background: '#fff', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', padding: '10px', zIndex: '1' }}>
                      <Link to="/conta" style={{ display: 'block', marginBottom: '5px', color:'gray' }}>
                        Conta
                      </Link>
                      {/* A opção "Meus Pedidos" não possui um link, como mencionado */}
                      <Link to={"/pedidos"} style={{ display: 'block', marginBottom: '5px', color: 'gray' }}>
                        Pedidos
                      </Link>
                    </div>
                  )}
                </div>
              ) : adminUser !=null ? (
                <Link to="/admin">
                <button className="btn btn-primary btn-block" type="submit">
                  Gerenciar
                </button>
              </Link>
              ) : (
                <Link to="/login">
                  <button className="btn btn-outline-success" type="submit">
                    Login
                  </button>
                </Link>
              )}
              
                 { user!=null ?(
                <Link to={'../carrinho'}  style={{ marginRight: '10px' }}>
                <img src={cart} alt="" style={{width:'25px', height:'25px'}} />
                </Link>) : adminUser!=null ? (
                  <div></div>
                ) : adminUser!=null ? (
                  <div></div>
                )
                :
                (<Link to={"/signup"}>
                <button className="btn btn-outline-success" type="submit">
                  Signup
                </button>
                </Link>)
            }
              {user!=null || adminUser!=null ? (
                <Link to={"/"}  style={{ marginLeft: '10px' }}>
                <button  onClick={handleLogOut} className="btn btn-primary"  /*style={{padding:'5px',}}*/ >Sair</button>
                </Link>) 
                : <div></div>
              } 
              </form>
            </div>
          </div>
        </nav>
        
        </div>
      );
}
export default NavbarPosLogin;