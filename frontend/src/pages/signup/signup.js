import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import img from "../../assets/images/loginImage.jpg"
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import useAuth from "../../hooks/useAuth";
const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
  background-color:#fff;
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

const Signup = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();
  const navigate = useNavigate();
  const {signin} = useAuth();
  const [loggedInUserEmail, setLoggedInUserEmail] = useState("");

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.data_nascimento.value = onEdit.data_nascimento;
      user.CPF.value = onEdit.CPF;
      user.Senha.value = onEdit.Senha;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value ||
      !user.CPF.value||
      !user.Senha.value
    ) {
      return toast.warn("Preencha todos os campos!");
    } else {
      try {
        const response = await axios.post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
          CPF: user.CPF.value,
          Senha: user.Senha.value
        });
  
        if (response.status === 200) {
          toast.success(response.data);
  
          // Limpe os campos após um cadastro bem-sucedido
          user.nome.value = "";
          user.email.value = "";
          user.fone.value = "";
          user.data_nascimento.value = "";
          user.CPF.value = "";
          user.Senha.value = "";
          const tempoDeEspera = 4000; // 4 segundos
          const mensagem = window.alert("Voce será redirecionado a tela de Login");
          setTimeout(() => {
            navigate("/login");
            
          }, tempoDeEspera);
        } else {
          toast.error(response.data);
        }
      } catch (error) {
        console.error(error); // Imprima o erro no console para depuração
        toast.error("Algum dado inserido já foi cadastrado.");
      }
    }
    //else primário, que não mostra o erro corretamente
    /*
    else{ await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
          CPF: user.CPF.value,
          Senha: user.Senha.value
          

        })
        .then(({ data }) => {
        
            toast.success(data)
        }
        )
        .catch(({ err }) => toast.error(err));
    }
    user.nome.value = "";
    user.email.value = "";
    user.fone.value = "";
    user.data_nascimento.value = "";
    user.CPF.value = "";
    user.Senha.value = "";
    */
  };
 
  return (
    <div>
      
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>CPF</Label>
        <Input name="fone" />
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" type="date" />
      </InputArea>
      <InputArea>
        <Label>Fone</Label>
        <Input name="CPF" type="text" />
      </InputArea>
      <InputArea>
        <Label>Senha</Label>
        <Input name="Senha" type="password" />
      </InputArea>
      <Button type="submit">Registrar-se</Button>
      <h3>
        Já possue uma conta ? <Link to={"/login"}> Entre </Link>
      </h3>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </FormContainer>
    </div>
  );
};

export default Signup;