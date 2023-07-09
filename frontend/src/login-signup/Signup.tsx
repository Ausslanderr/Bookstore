import { useState } from "react";
import img from "../assets/images/loginImage.jpg";
import {Link} from 'react-router-dom';
function Signup(){

  const [Nome, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [CPF, setCPF] = useState('');
  const [Senha, setSenha] = useState('');
  const [confirmarSenha, setconfirmarSenha] = useState('');
  const handleSignup = () =>{
    const userData = {
      Nome: Nome,
      Email: Email,
      CPF : CPF,
      Senha: Senha,
      confirmarSenha: confirmarSenha

    };
    
    // Realizar a lógica de registro do usuário no backend
    console.log(Nome, Email, CPF, Senha)
  }

    return (<div>
      <section className="h-100 gradient-form">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0" style={{background:'#f8f8f8'}}>
              <div className="col-lg-6" >
                <div className="card-body p-md-5 mx-md-4">
                  <form>
                    <h3>Registrar</h3>
                    <br />
                    <div className="form-outline mb-4">
                      <input type="text" id="form2Example11" className="form-control"
                        placeholder="Nome de usuário" onChange={(e)=> setUsername(e.target.value)}                         
                        />                      
                    </div>  
                    <div className="form-outline mb-4">
                      <input onChange={(e)=> setEmail(e.target.value)} type="email" id="form2Example22" className="form-control" placeholder="Email" />                     
                    </div>
                    <div className="form-outline mb-4">
                      <input onChange={(e)=> setCPF(e.target.value)} type="text" id="form2Example11" className="form-control"
                        placeholder="CPF" />                     
                    </div>
                    <div className="form-outline mb-4">
                      <input onChange={(e)=> setSenha(e.target.value)} type="password" id="form2Example22" className="form-control" placeholder="Senha" 
                      />                      
                    </div>
                    <div className="form-outline mb-4">
                      <input onChange={(e)=> setconfirmarSenha(e.target.value)} type="password" id="form2Example11" className="form-control"
                        placeholder="Confirmar Senha" />
                    </div>
                    <div className="text-center pt-1 mb-5 pb-1">
                      <Link to="/">
                      <button onClick={handleSignup} className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Signup</button> 
                      </Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Já possue uma conta?</p>
                      <Link to="/login">
                      <button type="button" className="btn btn-outline-danger">Entrar</button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
                <div className="col-lg-6 d-flex align-items-center  gradient-custom-2" style={{marginLeft:'auto'}}>
                  <img alt="Imagem" src={img} style={{ width: '461px', height: '715' }} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  </div>);
}
export default Signup;
