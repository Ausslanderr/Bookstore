// ProductDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img from "../../assets/images/homo-deus-1.jpg"
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import {ToastContainer} from 'react-toastify'

import axios from "axios";
function ProductDetails() {
  const { idLivro } = useParams();
  const [product, setProduct] = useState(null);
  const { user } = useAuth();
  const handleAddtoCart = ()=>{
    axios.post("http://localhost:8800/addCarrinho",{
      email: user,
      idLivro: idLivro,
    })
    .then((response)=>{
      console.log(response.data);
      toast.success("Produto adicionado com sucesso");
    })
    .catch((error)=> {
      console.error(error);
      toast.error("Você não está logado!!");
    })
  };
  
  useEffect(() => {
    // Fetch product details using productId
    fetch(`http://localhost:8800/livros/${idLivro}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error("Erro ao pegar os dados do produto"));
  }, [idLivro]);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }
  //<img src={product.image} alt={product.Titulo} className="img-fluid" />
  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-start">
        <div className="col-md-4">
          <img src={product.image} width={'250px'} height={'300px'} alt={product.Titulo} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">{product.Titulo}</h2>
          <p><strong>Publicado por:</strong> {product.Editora}</p>
          <p><strong>Escrito por:</strong> {product.Autor}</p>
          <p className="mb-4"><strong>Descrição:</strong> {product.Descricao}</p>
          <p><strong>Preço:</strong> R${product.Preco}</p>
          <p><strong>Publicado em:</strong> {product.dataPublicacao}</p>
          <button onClick={handleAddtoCart} className="btn btn-primary mt-3">Adicionar ao Carrinho</button>
          <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />

        </div>
      </div>
    </div>
  )
  /*(
    
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="d-flex justify-content-between align-items-start">
          <img src={img} width={'250px'} height={'300px'}  alt={product.Titulo} className="img-fluid" />
          </div>
          <div className="ml-4" > 
            <h2>{product.Titulo}</h2>
            <p>Publicado por {product.Editora}</p>
            <p>Escrito por {product.Autor}</p>
            <p>{product.Descricao}</p>
            <p>R${product.Preco}</p>
            <p>Publicado em {product.dataPublicacao}</p>
            <button className="btn btn-primary" >Adicionar ao Carrinho</button>
          {/* ... other details ... }
          </div>
        </div>
      </div>
    </div>
  );*/
}
export default ProductDetails;
