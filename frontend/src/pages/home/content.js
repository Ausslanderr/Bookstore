import React, { useEffect, useState } from "react";
import Carousel from "./carousel";
import { Link } from "react-router-dom";
import shrek from "../../assets/images/homo-deus-1.jpg"

  
function Home (){
    const [books, setBooks] = useState([]);
    const handleBuy = async (e) =>{
        // Ver mais tarde
    }
    useEffect(()=> {
        fetch('http://localhost:8800/livros')
            .then (response=>response.json())
            .then(data => setBooks(data))
            .catch(error => console.error("Erro ao pegar os dados"));
    }, []);
    return <div>
        
        <Carousel/>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <br/>
  <h2 style={{ textAlign: 'center' }}></h2>
</div>
        <div  style={{  // Inline style with CSS
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
            }} className="book-list">
            {books.map(book => (
                <div key={book.idLivro} className="book" style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    flexBasis: "calc(33.33% - 20px)",
                    textAlign: "center",
                    margin: "10px",
                    boxSizing: "border-box"
                  }} >
                <img src={book.image} width={'200px'} height={'280px'} alt={book.Titulo} />
                <h3 className="mb-3" >{book.Titulo}</h3>
                <p><strong>{book.Autor}</strong></p>
                <p><strong>R${book.Preco}</strong></p>
                
                <div>
                    <Link to={`/produto/${book.idLivro}`} >
                    <button className="btn btn-primary" onClick={() => handleBuy(book.idLivro)}>
                        Detalhes
                    </button>
                    </Link>
                </div>
                </div>
            ))}
        </div>
    </div>
}
export default Home;