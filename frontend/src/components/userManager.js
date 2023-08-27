import GlobalStyle from '../styles/global.js'
import styled from "styled-components";
import Form from "../components/Form.js"
import Grid from "../components/Grid.js";
import { useEffect, useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from '../pages/navbar-footer/navbar.js';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
const Title = styled.h2``;

function UserManager() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const ref = useRef();
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.CPF.value||
      !user.Senha.value
    ) {
      return toast.warn("Preencha todos os campos!");
    } else {
      try {
        const response = await axios.post("http://localhost:8800/addAdmin", {
          nome: user.nome.value,
          email: user.email.value,
          CPF: user.CPF.value,
          Senha: user.Senha.value
        });
  
        if (response.status === 200) {
          toast.success(response.data);
  
          // Limpe os campos após um cadastro bem-sucedido
          user.nome.value = "";
          user.email.value = "";
          user.CPF.value = "";
          user.Senha.value = "";
          //const tempoDeEspera = 4000; // 4 segundos
          const mensagem = window.alert("Voce será redirecionado a tela de Login");
          //setTimeout(() => {
          //  navigate("/login");
            
         // }, tempoDeEspera);
        } else {
          toast.error(response.data);
        }
      } catch (error) {
        console.error(error); // Imprima o erro no console para depuração
        toast.error("Algum dado inserido já foi cadastrado.");
      }
    }
  };
  return (
    <div style={{textAlign:'center'}}>
      
        <Title>GERENCIAMENTO DE USUÁRIOS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
        
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      
      <GlobalStyle />
    </div>
  );
}

export default UserManager;