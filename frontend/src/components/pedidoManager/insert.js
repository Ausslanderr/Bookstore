import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
const FormContainer = styled.form`
  /* Estilos do formulário */
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


function Operacao({ pedidoEmEdicao, setPedidoEmEdicao, carregarPedidos }) {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const pedidoData = {
      idPedido1: formData.get("idPedido1"),
      UsuarioId: formData.get("UsuarioId"),
      statusPedido: formData.get("statusPedido"),
      totalPedido: formData.get("totalPedido"),
      dataPedido: formData.get("dataPedido"),
      // ... outros campos do pedido
      itens: [
        {
          idPedido2: formData.get("idPedido2"),
          idLivro: formData.get("idLivro"),
          quantidade: formData.get("quantidade"),
          preco_unitario: formData.get("preco"),
          // ... outros campos do item
        },
        // ... outros itens se necessário
      ],
      endereco: {
        idPedido3: formData.get("idPedido3"), 
        bairro: formData.get("bairro"),
        rua: formData.get("rua"),
        numero: formData.get("numero"),
        estado: formData.get("estado"),
        cidade: formData.get("cidade"),
        cep: formData.get("cep"),
        // ... outros campos do endereço
      }
    };
    try {
      const response = await axios.post("http://localhost:8800/cadastrarPedido",
      pedidoData
        );
        console.log(response.data);
        formRef.current.reset();
        setPedidoEmEdicao(null);
        carregarPedidos();
        toast.success("Pedido cadastrado com sucesso");
    }catch (error){
      console.error("Erro cadastrar pedido:", error);
      toast.error("Provavelmente não há um pedido com tal ID")
    }


    // Lógica para adicionar ou editar o pedido
    if (pedidoEmEdicao) {
      // Lógica para editar o pedido
    } else {
      // Lógica para adicionar um novo pedido
    }

    // Limpar o formulário e recarregar os pedidos
    formRef.current.reset();
    setPedidoEmEdicao(null);
    carregarPedidos();
  };
  const handleInserirItemSubmit = (e) => {
    e.preventDefault();
    inserirItem();
  };

  const inserirItem = async () => {//funciona, só preciso definir um formRef que pegue os dados.
    const formData = new FormData(formRef.current);
    const idPedido2 = formData.get("idPedido2");
    const idLivro = formData.get("idLivro");
    const quantidade = formData.get("quantidade");
    const preco_unitario = formData.get("preco");
    console.log("teste de id: ",idPedido2);
    try {
      const response = await axios.post("http://localhost:8800/inserirItemPedido", {
        idPedido: idPedido2,
        idLivro: idLivro,
        quantidade: quantidade,
        preco_unitario: preco_unitario
      });
  
      console.log("Item inserido com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao inserir item:", error);
    }
  };
  return (
    <FormContainer ref={formRef} onSubmit={handleSubmit}>
      <div style={{ display: "flex", gap: "20px", alignItems:'center', textAlign:'center' }}>
      <h3>Inserir Pedido</h3>
      <InputArea>
        <Label>ID do Pedido</Label>
        <Input name="idPedido1" placeholder="ID do Pedido" />
      </InputArea>
      <InputArea>
        <Label>ID do Usuário</Label>
        <Input name="UsuarioId" placeholder="ID do Usuário" />
      </InputArea>
      <InputArea>
        <Label>Status do Pedido</Label>
        <Input name="statusPedido" placeholder="Status do Pedido" />
      </InputArea>
      <InputArea>
        <Label>Total do Pedido</Label>
        <Input name="totalPedido" placeholder="Total do Pedido" />
      </InputArea>
      <InputArea>
        <Label>Data do Pedido</Label>
        <Input name="dataPedido" type="date" />
      </InputArea>
      {/* Outros campos do formulário */}
      
    </div>
   
    <div style={{ display: "flex", gap: "20px", alignItems:'center', textAlign:'center' }}>
      <h3>Inserir itens</h3>
      <InputArea>
        <Label>ID do Pedido</Label>
        <Input name="idPedido2" placeholder="ID do Pedido" />
      </InputArea>
      <InputArea>
        <Label>ID do Livro</Label>
        <Input name="idLivro" placeholder="ID do Livro" />
      </InputArea>
      <InputArea>
        <Label>Quantidade</Label>
        <Input name="quantidade" placeholder="Quantidade" />
      </InputArea>
      <InputArea>
        <Label>Preço</Label>
        <Input name="preco" placeholder="Preço" />
      </InputArea>
      
      {/* Outros campos do formulário */}
      <Button type="submit" name="inserirItem" onClick={inserirItem}>SALVAR ITEM</Button>
    </div>
    
    <div style={{ display: "flex", gap: "20px", alignItems:'center', textAlign:'center' }}>
      <h3>Inserir Endereço</h3>
      <InputArea>
        <Label>ID do Pedido</Label>
        <Input name="idPedido3" placeholder="ID do Pedido" />
      </InputArea>
      <InputArea>
        <Label>Bairro</Label>
        <Input name="bairro" placeholder="Bairro" />
      </InputArea>
      <InputArea>
        <Label>Rua</Label>
        <Input name="rua" placeholder="Rua" />
      </InputArea>
      <InputArea>
        <Label>Numero</Label>
        <Input name="numero" placeholder="Numero" />
      </InputArea>
      <InputArea>
        <Label>Estado</Label>
        <Input name="estado" type="text" placeholder="Estado" />
      </InputArea>
      <InputArea>
        <Label>Cidade</Label>
        <Input name="cidade" type="text" placeholder="Cidade" />
      </InputArea>
      <InputArea>
        <Label>CEP</Label>
        <Input name="cep" type="text" placeholder="CEP" />
      </InputArea>
      {/* Outros campos do formulário */}
      
    </div>
    <br/>
    <Button  type="submit" onSubmit={handleSubmit}>SALVAR PEDIDO</Button>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />

    </FormContainer>
    
  );
}

export default Operacao;
/*
<FormContainer ref={formRef} onSubmit={handleSubmit} >
      <Input name="..." placeholder="..." />
      {/* Outros campos do formulário }
      <Button className="btn btn-primary" type="submit">SALVAR</Button>
    </FormContainer>
  );*/