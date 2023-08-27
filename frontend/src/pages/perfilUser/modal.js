import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import jsPDF from "jspdf";

function ModalPagamento({ show, onHide, totalprice, paymentMethod }) {
  const generatePDF = () => {
    // Generate PDF logic here using jsPDF
    const doc = new jsPDF();
    doc.text("Boleto Bancário", 10, 10);
    doc.text(`Valor: R$ ${totalprice}`, 10, 20);
    doc.save("boleto.pdf");
  };
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Opções de Pagamento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>O valor total é R$ {totalprice}</h4>
        <p>Escolha sua forma de pagamento:</p>
        {paymentMethod === "boleto" && (
          <div>
            <Button onClick={generatePDF}>Gerar PDF do boleto</Button>
            {/* Conteúdo específico para boleto bancário */}
            <p>Pagamento via boleto bancário:</p>
            {/* Coloque aqui os elementos do boleto*/ }
          </div>
        )}
        {paymentMethod === "cartao" && (
          <div>
            {/* Conteúdo específico para cartão de crédito */}
            <p>Pagamento com cartão de crédito:</p>
            <form>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">Número do Cartão:</label>
          <input type="text" className="form-control" id="cardNumber" />
        </div>
        <div className="mb-3">
          <label htmlFor="cardName" className="form-label">Nome no Cartão:</label>
          <input type="text" className="form-control" id="cardName" />
        </div>
        <div className="mb-3">
          <label htmlFor="expirationDate" className="form-label">Data de Expiração:</label>
          <input type="text" className="form-control" id="expirationDate" placeholder="MM/AA" />
        </div>
        <div className="mb-3">
          <label htmlFor="securityCode" className="form-label">Código de Segurança:</label>
          <input type="text" className="form-control" id="securityCode" />
        </div>
        <button className="btn btn-primary">Realizar Pagamento</button>
      </form>
            {/* Coloque aqui os elementos do pagamento com cartão */}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPagamento;

/*
function ModalPagamento({ show, onHide, totalprice }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Opções de Pagamento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Adicione aqui as opções de pagamento (botões, formulários, etc.) }
        <h4>O valor total é R$ {totalprice}</h4>
        <p>Escolha sua forma de pagamento:</p>
        <Button variant="primary">Cartão de Crédito</Button>{" "}
        <Button variant="success">Boleto Bancário</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPagamento;*/
