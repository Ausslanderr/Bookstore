import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalBoleto({ show, onHide }) {
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Finalizar Compra por Boleto Bancário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <button>Gerar Boleto</button>
          {/* Conteúdo específico para boleto bancário */}
          {/* Exibir o totalPrice aqui */}
          {/* Adicione o conteúdo do boleto bancário */}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={onHide}>
            Fechar
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default ModalBoleto;