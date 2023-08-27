import React, { useState, useEffect } from "react";

import { FaTrash, FaEdit } from "react-icons/fa";
import styled from "styled-components";
import axios from "axios"; 

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

function DetalhePedido({ idPedido }) {
  const [itensPedido, setItensPedido] = useState([]);
  const [ endereco, setEndereco] = useState([]);
  const [livrosDetalhes, setLivrosDetalhes] = useState([]);
  console.log(idPedido);
  useEffect(() => {
    const fetchItensPedido = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8800/getItensPedido?idPedido=${idPedido}`
        );
        setItensPedido(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItensPedido();
  }, [idPedido]);

  useEffect(() => {
    const fetchEndereco = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8800/getEndereco?idPedido=${idPedido}`
        );
        setEndereco(data);
      } catch (error) {
        console.error("Error fetching endereço :", error);
      }
    };

    fetchEndereco();
  }, [idPedido]);
  useEffect(()=>{
    const fetchLivrosDetalhes = async () => {
        const livrosIds = itensPedido.map(item=> item.idLivro);
        console.log(livrosIds);
    try {
        const {data} = await axios.get(`http://localhost:8800/getLivros?livrosIds=${livrosIds.join(",")}`, 
        {livrosIds}
        
        );
        setLivrosDetalhes(data);
        console.log("livros ids 2: ",livrosIds)
    }
    catch (error){
        console.log("erro ao pegar detalhe de livro", error);
        }
    }
    if (itensPedido.length > 0){
        fetchLivrosDetalhes();
    }
  }, [itensPedido]);
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Detalhes do Pedido</h2>
      {itensPedido.map((item) => {
        const livroDetalhes = livrosDetalhes.find(livro => livro.idLivro === item.idLivro);
        {console.log("livros detalhes: ",livroDetalhes)}
        return (
          <div
            key={item.idItemPedido}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              marginBottom: "20px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4>Quantidade comprada: {item.quantidade}</h4>
            <h4>Preço de cada item: {item.preco_unitario}</h4>
            {livroDetalhes && (
              <div>
                <h4>Detalhes do Livro:</h4>
                <p>Título: {livroDetalhes.Titulo}</p>
                <p>Autor: {livroDetalhes.Autor}</p>
                <p>Editora: {livroDetalhes.Editora}</p>
                <p></p>
                
                {/* Outros detalhes do livro aqui */}
              </div>
            )}
          </div>
        );
      })}
      <h3>Endereço de entrega</h3>
      {endereco.map((endereco)=>(
        <div  style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "20px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}>
            
            <h3>Bairro: {endereco.Bairro}</h3>
            <h3>Rua: {endereco.Rua}</h3>
            <h3>Número: {endereco.Numero}</h3>
            <h3>Estado: {endereco.Estado}</h3>
            <h3>Cidade: {endereco.Cidade}</h3>
            <h3>Cep: {endereco.CEP}</h3>
        </div>
      ))}
    </div>
  );
/*
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Detalhes do Pedidos</h2>
      {itensPedido.map((item) => (
        <div
          key={item.idItemPedido}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "20px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>ID do Item do Pedido: {item.idItemPedido}</h3>
          {/* Mostrar mais detalhes do item aqui }
        </div>
      ))}
      <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
        <h3>ID do Pedido: {order.idPedido}</h3>
        <p>Total do Pedido: R$ {order.totalPedido}</p>
        <p>Data: {order.dataPedido}</p>
        {/* Add more details here }
      </div>
    </div>
  );*/
}
export default DetalhePedido;
