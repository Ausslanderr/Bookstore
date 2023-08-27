import React from "react";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import shrek from "../../assets/images/homo-deus-1.jpg"
import axios from "axios";
import ModalPagamento from "./modal";
import { toast } from "react-toastify";
import {ToastContainer} from 'react-toastify'

function Carrinho () {
  
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(""); // Estado para controlar o método de pagamento selecionado
  //const [books, setBooks] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [addressFieldsFilled, setAddressFieldsFilled] = useState(false);
  const [address, setAddress] = useState({
    bairro: "",
    rua: "",
    numero: "",
    estado: "",
    cidade: "",
    cep: "",
  });
  const { user } = useAuth();
  
  console.log(user);
  const handleAddAddress = async ()=>{
    if (!addressFieldsFilled) {
      toast.warning("Preencha todos os campos do endereço.");
      return;
    }
    setAddress({
      bairro: address.bairro,
      rua: address.rua,
      numero: address.numero,
      estado: address.estado,
      cidade: address.cidade,
      cep: address.cep,
    });
  }


  const handleBuy = async () => {
      toast.success("Pedido efetuado com sucesso@");
      const { data: userIdData } = await axios.get(`http://localhost:8800/getUserId?email=${user}`);
      const userId = userIdData.idUsuario;
      console.log("do carrinho eu consegui pegar o id", userId);
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('en-CA');
      
      const {data: pedidoData} = await axios.post("http://localhost:8800/realizarPedido",{
        Usuario_idUsuario: userId,
        totalPedido: totalPrice,
        dataPedido: formattedDate,
      })
      console.log(formattedDate);
    for (const item of cartItems){
      console.log("id do livro teste> ",item.idLivro)
    }
    const idPedido = pedidoData.idPedido;
    try{
      await axios.post("http://localhost:8800/addAddress",{
        ...address,
        idPedido: idPedido,
      })
    }
    catch{
    }
    console.log("id do pedido: ", idPedido);
    //Várias requisições estão desordenadas não sei porque
    const insertPromises = cartItems.map(async item => {
      
      console.log("porque ta null ? :", idPedido);
      console.log("atributos do livro: ", item.idLivro, item.quantidade, item.Preco);
      const response = await axios.post("http://localhost:8800/inserirItemPedido", {
        idPedido: idPedido,
        idLivro: item.idLivro,
        quantidade: item.quantidade,
        preco_unitario: item.Preco
        
      })
      console.log("resposta da inserção ",response.data);
    });
    const resultado = await Promise.all(insertPromises);
    //await Promise.all(insertPromises);
    console.log("resultado: ", resultado);
    console.log("Pedido criado com ID:", idPedido);
    
  };
  useEffect(() => {
    const isAddressFilled = Object.values(address).every(value => value !== "");
    setAddressFieldsFilled(isAddressFilled);
  }, [address]);
  const handleQuantityChange = (bookId, newQuantity) => {
    const updatedBooks = cartItems.map(item =>
        item.idLivro === bookId ? { ...item, quantidade: parseInt(newQuantity) } : item
      );
      setCartItems(updatedBooks);
      
      // Recalcular o preço total imediatamente
      const total = updatedBooks.reduce((sum, item) => sum + (parseFloat(item.Preco) * parseInt(item.quantidade)), 0);
      setTotalPrice(total);
    // Lógica para atualizar a quantidade
  };
  const handleDelete = async (idLivro)=>{
    //Lógica para deletar
    console.log("entrei na função de delete")
    await axios
    .delete("http://localhost:8800/removerItem", {
      data: {
        idLivro: idLivro,
        email: user, // Assuming you have access to the user's email
      },
    })
    .then(({ data }) => {
      const updatedCartItems = cartItems.filter(item => item.idLivro !== idLivro);
      setCartItems(updatedCartItems);
      toast.success(data);
    })
    .catch(({ data }) => toast.error(data));
  }
  useEffect(()=>{
    fetch(`http://localhost:8800/listarCarrinho?email=${user}`)
      .then((response)=> response.json())
      .then((data) => {
        if (Array.isArray(data)){
          setCartItems(data);
          const total = data.reduce((sum, item)=> sum + (parseFloat(item.Preco)* parseInt(item.quantidade)),0);
          setTotalPrice(total);
        } 
      })
      .catch((error)=> console.error("Erro ao pegar os dados"))
  }, [user]);
  useEffect(() => {
    const calculateTotalPrice = () => {
      //const total = books.reduce((sum, item) => sum + (parseFloat(item.Preco) * parseInt(item.quantidade || 1)), 0);
      //setTotalPrice(total);
    };
    
  }, [cartItems]);
  return (
    <div>
      {/* Conteúdo do Carousel aqui */}
      
      <div style={{ textAlign: 'center' }}>
        <h2>Seu Carrinho </h2>
      </div>

      <div className="book-list">
        {cartItems.map(item => (
          <div
            key={item.idLivro}
            className="book"
            style={{
              display: 'flex',
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
              boxSizing: 'border-box',
            }}
          >
            <img src={shrek} width={'200px'} height={'280px'} alt={item.Titulo} />
            <div style={{ flex: 1, marginLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ textAlign: 'right' }}>
                
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3>{item.Titulo}</h3>
                <p><strong>{item.Autor}</strong></p>
                <p><strong>R${item.Preco}</strong></p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <label>Quantidade:</label>
                  <input
                    type="number"
                    value={item.quantidade}
                    defaultValue={1}
                    min={1}
                    onChange={(e) => handleQuantityChange(item.idLivro, e.target.value)}
                  />
                </div>
                <p><strong>Total: R${parseFloat(item.Preco) * parseInt(item.quantidade || 1)}</strong></p>
                <Link>
                  <button className="btn btn-primary" onClick={() => handleDelete(item.idLivro)}>Deletar</button>
                </Link>
              </div>
              <div style={{ textAlign: 'right' }}>
                
                <Link to={`/produto/${item.idLivro}`}>
                  <button className="btn btn-primary" >
                    Detalhes
                  </button>
                </Link>
              </div>
              
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px", textAlign:'center' }}>
        <h4 style={{ textDecoration: "underline", textAlign: "center" }}>
          Endereço de Entrega
        </h4>
        <div className="mb-2" style={{textAlign:'center'}}>
          <input
            type="text"
            
            placeholder="Bairro"
            value={address.bairro}
            onChange={(e) => setAddress({ ...address, bairro: e.target.value })}
          />
          {/* Repita os campos para rua, numero, estado, cidade e cep */}
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="rua"
            value={address.rua}
            onChange={(e) => setAddress({ ...address, rua: e.target.value })}
          />
          {/* Repita os campos para rua, numero, estado, cidade e cep */}
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="numero"
            value={address.numero}
            onChange={(e) => setAddress({ ...address, numero: e.target.value })}
          />
          {/* Repita os campos para rua, numero, estado, cidade e cep */}
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="estado"
            value={address.estado}
            onChange={(e) => setAddress({ ...address, estado: e.target.value })}
          />
          {/* Repita os campos para rua, numero, estado, cidade e cep */}
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="cidade"
            value={address.cidade}
            onChange={(e) => setAddress({ ...address, cidade: e.target.value })}
          />
          {/* Repita os campos para rua, numero, estado, cidade e cep */}
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="cep"
            value={address.cep}
            onChange={(e) => setAddress({ ...address, cep: e.target.value })}
          />
          {/* Repita os campos para rua, numero, estado, cidade e cep */}
        </div>
      </div>
      <div style={{textAlign: 'center'}}>
      <button className="btn btn-primary" onClick={handleAddAddress} > Cadastrar Endereço</button>
      </div>
      {
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="btn btn-primary" onClick={handleBuy}>Finalizar Compra</button>
      </div>
    }
      <div>
        <h4 style={{textDecoration: 'underline', textAlign:'center'}}>
          Efetuar pagamento</h4>
      </div>
      <div>
        <h5  style={{textDecoration:'underline', textAlign:'center'}}>Subtotal R$ {totalPrice}</h5>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          className="btn btn-primary"
          onClick={() => {
            setPaymentMethod("boleto");
            setShowModal(true);
          }}
        >
          Pagar com Boleto Bancário
        </button>{" "}
        <button
          className="btn btn-success"
          onClick={() => {
            setPaymentMethod("cartao");
            setShowModal(true);
          }}
        >
          Pagar com Cartão de Crédito
        </button>
      </div>

      <ModalPagamento
        show={showModal}
        onHide={() => setShowModal(false)}
        totalprice={totalPrice}
        paymentMethod={paymentMethod}
      />
      <ModalPagamento show={showModal} onHide={()=> setShowModal(false)} totalprice={totalPrice} paymentMethod={paymentMethod}/>
      
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />

    </div>
  );
}
export default Carrinho;