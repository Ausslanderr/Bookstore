
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import DetalhePedido from "./detalhePedido";

function Pedidos() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8800/getPedidos?email=${user}`
        );
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [user]);
  
  const handleDetailsClick = (orderId) => {
    if (selectedOrder === orderId) {
      setSelectedOrder(null); // Close the details if it's already open
    } else {
      setSelectedOrder(orderId); // Show the details for the clicked order
    }
  };
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Seus Pedidos</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "70%" }}>
          {orders.map((order) => (
            <div
              key={order.idPedido}
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "20px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3>ID do Pedido: {order.idPedido}</h3>
              <p>Total do Pedido: R$ {order.totalPedido}</p>
              <p>Data: {order.dataPedido}</p>
              {console.log(order.statusPedido)}
              <p>Status: {order.statusPedido}</p>
              <button className="btn btn-primary" onClick={()=>handleDetailsClick(order.idPedido)}>Ver detalhes</button>
              {selectedOrder === order.idPedido && <DetalhePedido idPedido={order.idPedido}/> }
              {console.log("id do pedido",order.idPedido)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pedidos;
