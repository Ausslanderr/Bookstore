import img from "../assets/images/loginImage.jpg";
import Footer from "../home/footer";
import Navbar from "../home/navbar";
import {Link} from 'react-router-dom';
import caminho from '../home/navbarPosLogin'
function Login(){
    return <div>
      <section className="h-100 gradient-form">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0" style={{background:'#f8f8f8'}}>
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
                  <form>
                    <h3 className="justify-content-center">Login</h3>
                    <br />
                    <div className="form-outline mb-4">
                      <input type="email" 
                    
                      id="form2Example22" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" 
                        id="form2Example22" className="form-control" placeholder="Senha" />
                    </div>                   
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Esqueceu sua senha?</p>
                      <Link to={"/recuperarSenha"}>
                      <button type="button" className="btn btn-outline-danger">Clique aqui</button>
                      </Link>
                    </div>
                    <div className="text-center pt-1 mb-5 pb-1">
                    <Link to="/">
                      <button  className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Entrar</button>
                      </Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2" >Não possui cadastro ainda? </p>
                    <Link to="/signup">
                      <button  className="btn btn-outline-danger" type="button">Cadastre-se</button>
                      </Link>
                    </div>                 
                  </form>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center  gradient-custom-2" style={{marginLeft:'auto'}}>
                  <img alt="Imagem" src={img} style={{ width: '461px', height: '698' }} />
                </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  </div>;
}
export default Login;
