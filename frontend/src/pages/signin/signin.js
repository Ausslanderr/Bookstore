import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import { Link, Redirect} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom"

//flex-direction: column;
const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

function Login() {
  axios.defaults.withCredentials = true;
  const {signin} = useAuth();
  const navigate = useNavigate();
  const emailRef = useRef();
  const senhaRef = useRef();
  //const [email, setEmail] = useState("");
  //const [Senha, setSenha] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [loggedInUserEmail, setLoggedInUserEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const Senha = senhaRef.current.value;
    //const nome = nomeRef.current.value;
    //const teste = signin(email, Senha);
    if (!email || !Senha) {
      return toast.warn("Preencha todos os campos!");
    }
    const response = await signin(email, Senha);

    if (response === "Login successful.") {
      toast.success("Login successful!");

      // Defina um tempo para esperar antes de redirecionar (opcional)
      const tempoDeEspera = 4000; // 3 segundos

      setTimeout(() => {
        navigate("/");
        
      }, tempoDeEspera);
      
    }else if (response ==="Admin Login successful."){
      toast.success("Admin Login successful");
      const tempoDeEspera = 4000; // 3 segundos

      setTimeout(() => {
        navigate("/admin");
        
      }, tempoDeEspera);
    }
    else {
      toast.error(response);
    }
    emailRef.current.value = "";
    senhaRef.current.value = "";
  };
  useEffect(()=>{
    axios.get("http://localhost:8800/login").then((response)=> {
    if (response.data.loggedIn === true){
      setLoggedInUserEmail(response.data.user[0].email);
    }
    })
  }, [])
  return (
    <div>
    <FormContainer onSubmit={handleSubmit}>
      <InputArea>
        <Label>E-mail</Label>
        <Input ref={emailRef} name="email" type="email" />
      </InputArea>
      <br/>
      <InputArea>
        <Label>Senha</Label>
        <Input ref={senhaRef} name="Senha" type="password" />
      </InputArea>
      <Button type="submit">Entrar</Button>
      <h3>
        Não possue uma conta ? <Link to={"/signup"}>Registre-se</Link>
      </h3>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </FormContainer>
    </div>
  );
}
export default Login;
