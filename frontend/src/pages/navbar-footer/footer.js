import React from "react";

import {Link} from 'react-router-dom';

function Footer(){
    return <div>
            
<footer className="text-center text-lg-start bg-white text-muted" >
  
  <section className="">
    <div className="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
       
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>BookStore
          </h6>
          <p>
          Descubra o universo dos livros na Bookstore, onde histórias ganham vida. Navegue por nossa seleção diversificada e mergulhe na magia da leitura.
          </p>
        </div>
        
        
        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            links
          </h6>
          <p>
            <a href="#!" className="text-reset">Patrocínios</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Política da Empresa</a>
          </p>
          <Link to={"/sobre"}>
          <p>
            <a href="#!" className="text-reset">Sobre Nós</a>
          </p>
          </Link>
          <p>
            <a href="#!" className="text-reset">Exemplo</a>
          </p>
        </div>
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> Lavras, MG, BR</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            bookstore@gmail.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> ++ 3822-xxxx</p>
          
        </div>
        
      </div>
      
    </div>
  </section>
  
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
    © 2023 Engenharia de Software:
    <a className="text-reset fw-bold" href="/">Bookstore</a>
  </div>
 
</footer>

    </div>
}
export default Footer;