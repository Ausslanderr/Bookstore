import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  width: 1150px;
  display: flex;
  position: relative;
  left: 180px;
  justify-content: right;
  align-items: flex-end;
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
const FormEstoque = ({ getBooks, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const book = ref.current;

      // Update the field values for editing
      book.Titulo.value = onEdit.Titulo;
      book.Autor.value = onEdit.Autor;
      book.Editora.value = onEdit.Editora;
      book.Preco.value = onEdit.Preco;
      book.dataPublicacao.value = onEdit.dataPublicacao;
      book.Descricao.value = onEdit.Descricao;
      book.Estoque.value = onEdit.Estoque;
      
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const book = ref.current;

    // Check if all required fields are filled
    if (
      !book.Titulo.value ||
      !book.Autor.value ||
      !book.Editora.value ||
      !book.Preco.value ||
      !book.dataPublicacao.value ||
      !book.Descricao.value ||
      !book.Estoque.value 
      
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/livros/" + onEdit.idLivro, {
          Titulo: book.Titulo.value,
          Autor: book.Autor.value,
          Editora: book.Editora.value,
          Preco: book.Preco.value,
          dataPublicacao: book.dataPublicacao.value,
          Descricao: book.Descricao.value,
          Estoque: book.Estoque.value,
          
        })
        .then(({data})=>toast.success(data))
        .catch(({data})=> toast.error(data));
    } else {
      await axios
         .post("http://localhost:8800/livros", {
          Titulo: book.Titulo.value,
          Autor: book.Autor.value,
          Editora: book.Editora.value,
          Preco: book.Preco.value,
          dataPublicacao: book.dataPublicacao.value,
          Descricao: book.Descricao.value,
          Estoque: book.Estoque.value,
          //image: book.image.value
      })
      .then(({data})=>toast.success(data))
      .catch(({data})=>toast.error(data));
    }

    // Clear input values and update books list
    book.Titulo.value = "";
    book.Autor.value = "";
    book.Editora.value = "";
    book.Preco.value = "";
    book.dataPublicacao.value = "";
    book.Descricao.value = "";
    book.Estoque.value = "";

    setOnEdit(null);
    getBooks();
  };

  return (
    <FormContainer ref={ref}  onSubmit={handleSubmit}>
      <InputArea>
        <Label>Título</Label>
        <Input name="Titulo" />
      </InputArea>
      <InputArea>
        <Label>Autor</Label>
        <Input name="Autor" type="text" />
      </InputArea>
      <InputArea>
        <Label>Editora</Label>
        <Input name="Editora" type="text" />
      </InputArea>
      <InputArea>
        <Label>Preço</Label>
        <Input name="Preco"  />
      </InputArea>
      <InputArea>
        <Label>Data de Publicação</Label>
        <Input name="dataPublicacao" type="date" />
      </InputArea>
      <InputArea>
        <Label>Descrição</Label>
        <Input name="Descricao" type="text" />
      </InputArea>
      <InputArea>
        <Label>Quantidade em Estoque</Label>
        <Input name="Estoque" type="number" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default FormEstoque;