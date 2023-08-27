import React, { useState, useEffect, useRef } from "react";

import { FaTrash, FaEdit } from "react-icons/fa";
import styled from "styled-components";
import axios from "axios"; 
import { toast } from "react-toastify";

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

function DetalhePedido({ idPedido }) {
  const formRef = useRef();
  const formRef2 = useRef();
  const [itensPedido, setItensPedido] = useState([]);
  const [ endereco, setEndereco] = useState([]);
  const [livrosDetalhes, setLivrosDetalhes] = useState([]);
  const [editingBookId, setEditingBookId] = useState(null); // Estado para controlar qual livro está sendo editado
  const [editingAddressIndex, setEditingAddressIndex] = useState(null)
  console.log(idPedido);
  const handleSubmitAddress = async (idPedido)=>{
    const formData = new FormData(formRef.current);
    console.log("entrei no handlesubmitaddress: ", idPedido)
    const pedidoData = {
      idPedido: formData.get("pedidoEndereco"),
      Bairro: formData.get("Bairro"),
      Rua: formData.get("Rua"),
      Numero: formData.get("Numero"),
      Estado: formData.get("Estado"),
      Cidade: formData.get("Cidade"),
      CEP: formData.get("CEP")
    }
    try {
      const response = await axios.put("http://localhost:8800/alterarEndereco/" + idPedido,
      pedidoData
      )
      formRef.current.reset();
      toast.success("endereço alterado com sucesso");
    }catch(error){
      toast.error("Erro ao atualizar endereço");
    }
  }
  const handleSubmitItem =  (idPedido, idLivro) => {
    //e.preventDefault(); // Evita que o formulário seja enviado de forma padrão
  
    const formData = new FormData(formRef2.current);
    console.log("entrei no handlesubmitItem");
    const itemData = {
      //idPedido: formData.get("idPedido"),
      //idLivro: formData.get("idLivro"),
      quantidade: formData.get("quantidade"),
      preco_unitario: formData.get("preco_unitario"),
    };
    console.log("quantidade passada",itemData.quantidade);
    try {
      console.log("cheguei no const response ", idPedido, idLivro)
       axios.put("http://localhost:8800/atualizarItemPedido/" + idPedido + "/" +idLivro,
      itemData
      );
    
      formRef.current.reset();
      setEditingBookId(null); // Finaliza o modo de edição
      toast.success("Item do pedido atualizado com sucesso");
    }
     catch (error) {
      toast.error("Erro ao atualizar item do pedido");
    }
  };
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

  const handleDeleteItem = async (idPedido, idLivro) => {
    try {
      console.log("id do livro no front:", idLivro, "id do pedido>", idPedido)
      const response = await axios.delete(`http://localhost:8800/deleteItemPedido/${idPedido}/${idLivro}`);
      console.log("Item excluído:", response.data);
      
      // Recarregar os itens do pedido após a exclusão
      //fetchItensPedido();
      toast.success("item deletado do pedido");
    } catch (error) {
      console.error("Erro ao excluir item:", error);
      toast.error("Erro ao remover item do pedido");
    }
  };
  return (
    <div style={{ textAlign: "center", padding: "20px", alignContent:'center' }}>
      <h2>Detalhes do Pedido</h2>
      {itensPedido.map((item) => {
      const livroDetalhes = livrosDetalhes.find(livro => livro.idLivro === item.idLivro);

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
              <Td alignCenter width="35%">
                <FaEdit onClick={() => setEditingBookId(livroDetalhes.idLivro)} />
              </Td>
              <Td alignCenter width="35%">
                <FaTrash onClick={() => handleDeleteItem(item.idPedido, livroDetalhes.idLivro)} />
              </Td>
              {/* Outros detalhes do livro aqui */}
            </div>
          )}
          <form ref={formRef2} onSubmit={handleSubmitItem} /*onSubmit={(e)=>handleSubmitItem(e, item.idPedido, item.idLivro)}*/>
          {/* Renderizar a Form de edição com base no livro atualmente editado */}
          {editingBookId === livroDetalhes?.idLivro && (
            <div>
              {/* Renderizar a Form de edição com os campos correspondentes */}
              {/* Por exemplo: */}
            
            <div>
                <p>id do Pedido:</p>
                <input className="form-control" name="idPedido" type="text" defaultValue={item.idPedido} />
            </div>
            <div>
                <p>id do Livro</p>
                <input className="form-control" name="idLivro" type="text" defaultValue={item.idLivro} />
            </div>
            <div>
            <p>Quantidade</p>
                <input className="form-control" name="quantidade" type="text" defaultValue={item.quantidade} />
            </div>
            <div>
            <p>Preço </p>
                <input className="form-control" name="preco_unitario" type="text" defaultValue={item.preco_unitario} />
            </div>
              {/* ... outros campos */}
              <div>
                <button className="btn btn-primary" onClick={()=>handleSubmitItem( item.idPedido, item.idLivro)} type="submit"  >Salvar</button>
              </div>
               
            </div>
          )}
          </form>
        </div>
      );
    })}
     
    
    <h3>Endereço de entrega</h3>
    {endereco.map((endereco, index) => (
      <div
        key={index}
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          marginBottom: "20px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3>Bairro: {endereco.Bairro}</h3>
        <h3>Rua: {endereco.Rua}</h3>
        <h3>Número: {endereco.Numero}</h3>
        <h3>Estado: {endereco.Estado}</h3>
        <h3>Cidade: {endereco.Cidade}</h3>
        <h3>Cep: {endereco.CEP}</h3>
        <Td alignCenter width="35%">
          <FaEdit onClick={() => setEditingAddressIndex(index)} />
        </Td>
        <Td alignCenter width="35%">
          <FaTrash />
        </Td>
        {/* Renderizar a Form de edição com base no endereço atualmente editado */}
        <form ref={formRef} onSubmit={handleSubmitAddress}>
        {editingAddressIndex === index && (
          <div>
            {/* Renderizar a Form de edição com os campos correspondentes */}
            {/* Por exemplo: */}
            <div>
              <p>idPedido:</p>
              <input name="pedidoEndereco" className="form-control" type="text" defaultValue={endereco.idPedido} />
            </div>
            <div>
              <p>Bairro:</p>
              <input name="Bairro" className="form-control" type="text" defaultValue={endereco.Bairro} />
            </div>
            <div>
              <p>Rua:</p>
              <input name="Rua" className="form-control" type="text" defaultValue={endereco.Rua} />
            </div>
            <div>
              <p>Numero:</p>
              <input name="Numero" className="form-control" type="text" defaultValue={endereco.Numero} />
            </div>
            <div>
              <p>Estado:</p>
              <input name="Estado" className="form-control" type="text" defaultValue={endereco.Estado} />
            </div>
            <div>
              <p>Cidade:</p>
              <input name="Cidade" className="form-control" type="text" defaultValue={endereco.Cidade} />
            </div>
            <div>
              <p>Cep:</p>
              <input name="CEP" className="form-control" type="text" defaultValue={endereco.CEP} />
            </div>
            {/* ... outros campos */}
            <div>
              <button type="submit"  onClick={() => handleSubmitAddress(endereco.idPedido)}  className="btn btn-primary">Salvar Atualizações</button>
            </div>
          </div>
          
        )}
        </form>
      </div>
    ))}
    
    {/*
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
    */}
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
