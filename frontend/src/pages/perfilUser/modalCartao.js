import React from "react";
import {Modal, Button} from "react-bootstrap"; // Importe o componente de modal do Bootstrap

function ModalCartao({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Finalizar Compra por Cartão de Crédito</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Conteúdo específico para cartão de crédito */}
        {/* Exibir o totalPrice aqui */}
        {/* Adicione o formulário de pagamento por cartão de crédito */}
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={onHide}>
          Fechar
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCartao;
