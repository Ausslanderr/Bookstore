import logo from '../../assets/images/Closed_Book_Icon.svg.png'; // substitua o caminho pela localização correta da imagem
import Carousel from '../home/carousel';
import {Link} from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
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
              <a className="nav-link" href="#">
                Promoções
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Populares
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre Nós
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link to={"/login"}>
            <button className="btn btn-outline-success" type="submit">
              Login
            </button>
            </Link>

            <Link to={"/signup"}>
            <button className="btn btn-outline-success" type="submit">
              Signup
            </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
    
  );
  
 
}

export default Navbar;
