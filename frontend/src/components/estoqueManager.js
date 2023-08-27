import GlobalStyle from '../styles/global.js'
import styled from "styled-components";
import FormEstoque from "../components/FormEstoque.js"
import GridEstoque from "../components/GridEstoque.js";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function BookManager() {
  const [books, setBooks] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getBooks = async () => {
    try {
      const res = await axios.get("http://localhost:8800/livros");
      setBooks(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
    
      <Container>
        <Title>LIVROS</Title>
        <FormEstoque onEdit={onEdit} setOnEdit={setOnEdit} getBooks={getBooks} />
        <GridEstoque setOnEdit={setOnEdit} books={books} setBooks={setBooks} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
  <GlobalStyle />
    </>
  );
}

export default BookManager;
