
import { db } from "../db.js";

export const addBook = (req, res) => {
  const q = "INSERT INTO livros (`Titulo`, `Autor`, `Editora`, `dataPublicacao`, `Preco`, `Descricao`, `Estoque`) VALUES (?)";
  console.log("cheguei aqui no add book;")
  const values = [
    req.body.Titulo,
    req.body.Autor,
    req.body.Editora,
    req.body.dataPublicacao,
    req.body.Preco,
    req.body.Descricao,
    req.body.Estoque,
    
  ];

  db.query(q, [values], (err) => {
    console.log("cheguei aqui também");
    if (err) {
      console.log("deu erro!")
      return res.status(500).json("Erro ao criar livro.");

    }

    return res.status(200).json("Livro adicionado com sucesso");
  });
};

export const getLivroById = (req, res) => {
  const bookId = req.params.idLivro;
  const q = "SELECT * FROM livros WHERE idLivro = ?";

  db.query(q, [bookId], (err, data)=>{
    if (err) return res.json(err);

    return res.json(data[0]);
  });
}

export const listarLivros = (_, res) => {
  const q = "SELECT * FROM livros";
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
};

export const deleteBook = (req, res)=>{
  const bookId = req.params.idLivro;
  console.log("id do livro pra deletar: ",bookId);
  const q = " DELETE FROM livros WHERE `idLivro` = ? ";

  db.query(q, [req.params.idLivro], (err)=> {
    if (err) return res.json(err);
    console.log("Entrei aqui")
    //return res.json(data);
    return res.status(200).json("Livro deletado com sucesso");
  });
    
};

export const atualizarLivro = (req, res) =>{
  const bookId = req.params.idLivro;
  console.log("id do livro a ser atualizado: ", bookId);
  //const q = "UPDATE livros SET `Titulo` = ?, `Autor` = ?, `Editora` = ?, `Preco` = ?, `dataPublicacao` = ?, `Descricao` = ?, `Estoque` = ?  WHERE `idLivro` = ? ";
  const q  = "UPDATE livros SET `Titulo` = ?, `Autor` = ?, `Editora` = ?, `Preco` = ?, `dataPublicacao` = ?, `Descricao` = ?, `Estoque` = ?, `image` = 1 WHERE `idLivro` = ? ";
  const values = [
    req.body.Titulo,
    req.body.Autor,
    req.body.Editora,
    req.body.Preco,
    req.body.dataPublicacao,
    req.body.Descricao,
    req.body.Estoque,
    
    //etc
  ];

  db.query(q, [...values, bookId], (err, data)=>{
    if (err) {
    console.log("Erro ao atualizar livro:", err);
    return res.status(500).json("Erro ao atualizar livro.");
    }
    console.log("update deu certo")
    return res.status(200).json("Livro atualizado com sucesso.");
  });
};
