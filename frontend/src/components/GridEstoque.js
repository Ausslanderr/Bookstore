import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 1150px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1500px;
  margin: 20px auto;
  word-break: break-all;
`;

const Thead = styled.thead``;
const Tbody = styled.tbody``;
const Tr = styled.tr``;
const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;
const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: 8px;

  @media (max-width: 1000px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const GridBooks = ({ books, setBooks, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (idLivro) => {
    try {
      await axios.delete("http://localhost:8800/livros/" + idLivro);
      const newArray = books.filter((book) => book.idLivro !== idLivro);
      setBooks(newArray);
      toast.success("Livro deletado com sucesso.");
    } catch (error) {
      toast.error("Erro ao deletar livro.");
    }

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th width="10%">Título</Th>
          <Th width="10%">Autor</Th>
          <Th width="10%">Editora</Th>
          <Th width="15%">Data de Publicação</Th>
          <Th width="10%">Preço</Th>
          <Th width="10%">Descrição</Th>
          <Th width="20%">Quantidade em Estoque</Th>
          <Th width="10%">Imagem</Th>
        </Tr>
      </Thead>
      <Tbody>
        {books.map((item, i) => (
          <Tr key={i}>
            <Td width="10%">{item.Titulo}</Td>
            <Td width="10%">{item.Autor}</Td>
            <Td width="10%">{item.Editora}</Td>
            <Td width="10%">{item.dataPublicacao}</Td>
            <Td width="10%">{item.Preco}</Td>
            <Td width="10%">Voltar desc depois </Td>
            <Td width="5%">{item.Estoque}</Td>
            <Td width="10%">        <img src={item.image} alt={item.Titulo} style={{ maxWidth: '100px' }} /></Td>
            
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.idLivro)} />
            </Td>
          </Tr>
        ))} 
      </Tbody>
    </Table>
  );
};

export default GridBooks;
