
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Operacao from "./insert";
import axios from "axios";
import DetalhePedido from "../../components/pedidoManager/operacao";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  justify-content: center; /* Centraliza verticalmente */
  gap: 10px;
`;
const PedidoContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 800px;
  width: 100%;
`;

const PedidoList = styled.div`
  width: 100%;
`;

const Title = styled.h2``;

function ManagerPedidos() { 
  const formRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itensExibidos, setItensExibidos] = useState(5);
  const [pedidos, setPedidos] = useState([]);
  const [pedidoEmEdicao, setPedidoEmEdicao] = useState(null);
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null)
  // Função para carregar os pedidos (substitua com a lógica adequada)
  const [searchId, setSearchId] = useState(""); // Estado para armazenar o ID de busca
  const [originalPedidos, setOriginalPedidos] = useState([]); // Estado para armazenar a lista original de pedidos
  const handleSearch = () => {
    // Filtrar os pedidos com base no ID de busca
    const filteredPedidos = originalPedidos.filter((pedido) =>
        pedido.idPedido === searchId
    );
    setPedidos(filteredPedidos);
};
  const toggleModal = ()=>{
    setIsModalOpen(!isModalOpen);
  }
  const carregarPedidos = async () => {
    try { 
      const { data } = await axios.get(
        "http://localhost:8800/listarPedidos"
      );
      setPedidos(data);
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
    }
  };
  useEffect(() => {
    setOriginalPedidos(pedidos); // Atualizar a lista original de pedidos quando o estado 'pedidos' é alterado
  }, [pedidos]);
  const handleDeletePedido = async (idPedido) =>{
    try {
      const response = await axios.delete(`http://localhost:8800/deletePedido/${idPedido}`);
      console.log("Pedido excluído:", response.data);
      carregarPedidos(); // Recarrega a lista de pedidos após a exclusão
      toast.success("Pedido deletado com sucesso.");
    } catch (error) {
      console.error("Erro ao excluir pedido:", error);
      toast.error("Erro ao deletar pedido.")
    }
  }
  useEffect(() => {
    carregarPedidos();
  }, []);
  const handleDetailsClick = (orderId) =>{
    if (selectedOrder === orderId){
        setSelectedOrder(null);
    } else {
        setSelectedOrder(orderId);
    }
  }
  const handleAlterarPedido = async (idPedido) => {
    console.log("entrei no alterar pedido", idPedido);
    const formData = new FormData(formRef.current);
    const pedidoData = {
      statusPedido: formData.get("status"),
      totalPedido: formData.get("total"),
      Usuario_idUsuario: formData.get("idcomprador"),
    };

    try {
      const response = await axios.put("http://localhost:8800/alterarPedido/" + idPedido, pedidoData);
      console.log("Pedido atualizado:", response.data);
      carregarPedidos(); // Recarrega a lista de pedidos após a atualização
      toast.success("Pedido atualizado com sucesso.");
    } catch (error) {
      console.error("Erro ao atualizar pedido:", error);
      toast.error("Erro ao atualizar pedido.");
    }
  }

  return (
    <Container style={{ textAlign: "center", left: "5cm", padding: "20px" }}>
        <Button onClick={toggleModal}>Leia aqui</Button>
  
  {/* ... restante do seu código */}
        <Modal show={isModalOpen} onHide={toggleModal}>
        <Modal.Header closeButton>
            <Modal.Title >Regras de Uso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Para inserir um pedido, é obrigatório a inserção do endereço e de ao menos um item.</p>
            <p>Você pode inserir itens sem necessariamente estar adicionando um novo pedido. Basta
                preencher os dados e clicar em Salvar. Em um primeiro momento, é possível adicionar somente um
                item, caso queira adicionar mais, basta fazer como indicado, preencher os campos do item e salvar.
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
            Fechar
            </Button>
        </Modal.Footer>
        </Modal>
      <Title style={{textAlign:'center'}}>GERENCIAMENTO DE PEDIDOS</Title>
      <Operacao
        pedidoEmEdicao={pedidoEmEdicao}
        setPedidoEmEdicao={setPedidoEmEdicao}
        carregarPedidos={carregarPedidos}
      />
      <h3>Busque por um Pedido específico</h3>
      <div style={{ display: "flex" }}>
        <input
          className="form-control"
          placeholder="Digite o ID do Pedido"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />{/*
        <button className="btn btn-primary" onClick={handleSearch}>
          Buscar
        </button>
  */}
      </div>
     
      <PedidoContainer
        style={{ textAlign: "center", justifyContent: "center", display: "flex" }}
      >
        <PedidoList style={{ justifyContent: "center" }}>
          {/* Lista de pedidos*/}
          {pedidos
          .filter((pedido)=>searchId === "" || pedido.idPedido === parseInt(searchId)).slice(0,itensExibidos).map((pedido, index) => (
            <div
              key={index}
              style={{
                justifyContent: "center",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "20px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3>ID do Pedido: {pedido.idPedido}</h3>
              <p>Total do Pedido: R$ {pedido.totalPedido}</p>
              {/* Renderizar opções de edição somente para o pedido selecionado */}
              
              {editingOrderId === pedido.idPedido && (
                <form ref={formRef} onSubmit={(e)=>e.preventDefault()}>
                <div>
                  <h5>Altere os dados do pedido</h5>
                  <p>Status: </p>
                  <input name="status" className="form-control" type="text"  defaultValue={pedido.statusPedido} />
                  <p>Id Pedido: </p>
                  <input name="id" className="form-control" type="text" defaultValue={pedido.idPedido} />
                  <p>Total: </p>
                  <input name="total" className="form-control" type="text" defaultValue={pedido.totalPedido} />
                  <p>Id do comprador: </p>
                  <input name="idcomprador" className="form-control" type="text" defaultValue={pedido.Usuario_idUsuario} />
                  <br/>
                  <div>
                  <button className="btn btn-primary" type="submit" onClick={()=>handleAlterarPedido(pedido.idPedido)}>Salvar atualizações</button>
                  </div>
                  <br/>
                </div>
                </form>
              )}
              
              <br/>
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleDetailsClick(pedido.idPedido);
                  setEditingOrderId(pedido.idPedido); // Atualizar o estado de edição
                }}
              >
                Ver Detalhes/Alterar
              </button>
              <span style={{ margin: "0 10px" }}></span>
              <button className="btn btn-primary" onClick={() => handleDeletePedido(pedido.idPedido)}>Deletar Pedido</button>
              {console.log("id do pedido a deletar",pedido.idPedido)}
              {selectedOrder === pedido.idPedido && (
                <DetalhePedido idPedido={pedido.idPedido} />
              )}
              {console.log("id do pedido", pedido.idPedido)}
            </div>
          ))}
        </PedidoList>
      </PedidoContainer>
      <button  className="btn btn-primary" onClick={()=>setItensExibidos(itensExibidos+5)}>Carregar Mais</button>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />

    </Container>
  );
}

export default ManagerPedidos;


/*
  return (
    <Container style={{textAlign: "center", left:'5cm', padding: "20px"}}>
      <Title>GERENCIAMENTO DE PEDIDOS</Title>
      <Operacao
        pedidoEmEdicao={pedidoEmEdicao}
        setPedidoEmEdicao={setPedidoEmEdicao}
        carregarPedidos={carregarPedidos}
      />
      <PedidoContainer style={{textAlign:'center', justifyContent:'center', display:'flex'}} >
        <PedidoList style={{justifyContent:'center'}}>
          { }
          {pedidos.map((pedido, index) => (
            <div
              key={index}
              style={{
                
                justifyContent: "center",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "20px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3>ID do Pedido: {pedido.idPedido}</h3>
              <p>Total do Pedido: R$ {pedido.totalPedido}</p>
              <p>Status: {pedido.statusPedido}</p>
              <p>id do usuário: {pedido.Usuario_idUsuario}</p>
              <h5>Altere os dados da conta</h5>
              <p>Status: </p>
              <input type="text" value={pedido.statusPedido} />
              <p>Id: </p>
              <input type="text" value={pedido.idPedido} />
              <p>Total: </p>
              <input type="text" value={pedido.totalPedido} />
              <p>Id do comprador: </p>
              <input type="text" value={pedido.Usuario_idUsuario} />
              
              <button className="btn btn-primary" onClick={()=>handleDetailsClick(pedido.idPedido)}>Ver Detalhes</button>
              {selectedOrder === pedido.idPedido && <DetalhePedido idPedido={pedido.idPedido}/>}
              {console.log("id do pedido", pedido.idPedido)}
            </div>
          ))}
        </PedidoList>
      </PedidoContainer>
    </Container>
  );*/