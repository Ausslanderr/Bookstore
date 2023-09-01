import { db } from "../db.js";
import express from "express";
import cors from "cors";
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";
import session from "express-session";
import bcrypt from 'bcryptjs'; // Importe o bcrypt.js
const app = express()
//const cors = require('cors');
app.options('*', cors());
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use(express.json());
/*
app.use(cors({
    origin: ["http://localhost:3000"], //antes tava 3000
    methods: ["GET", "POST","PUT", "DELETE"],
    credentials: true,
    allowedHeaders: [
      'X-CSRF-Token',
        'X-Requested-With',
        'Accept',
        'Accept-Version',
        'Content-Length',
        'Content-MD5',
        'Content-Type',
        'Date',
        'X-Api-Version',
        'Authorization'
    ],
}));*/
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    key: "userId",
    secret: "teste",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24 ,
    },
}))

export const listarPedidos = (_, res) =>{
  const q = "SELECT * FROM pedido";

  db.query(q, (err, data)=>{
    if (err) return res.json(err);

    return res.status(200).json(data);
  })
}


export const getPedidos = (req, res) => {//get do Usuário específico
  const userEmail = req.query.email;
  console.log("cheguei na request")
  console.log(userEmail)
  if (!userEmail) {
    return res.status(400).json("Missing user email.");
  }

  const getUserIdQuery = "SELECT idUsuario FROM usuario WHERE email = ?";
  db.query(getUserIdQuery, [userEmail], (err, userIdResults) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Erro ao buscar o id do usuário.");
    }
    if (userIdResults[0].idUsuario === undefined || userIdResults[0].idUsuario === null){
      return res.status(404).json("Usuário não encontrado.");
    }
    const userId = userIdResults[0].idUsuario;
    console.log("cheguei na query")
    const getPedidosQuery = `
      SELECT idPedido, totalPedido, dataPedido, statusPedido
      FROM pedido
      WHERE Usuario_idUsuario = ?
    `;

    db.query(getPedidosQuery, [userId], (err, pedidos) => {
      if (err) {
        console.error(err);
        return res.status(500).json("Erro ao buscar os pedidos.");
      }

      return res.status(200).json(pedidos);
    });
  });
};

export const getItensPedido = (req, res)=>{
  console.log("chegou no getItens");
  const idPedido = req.query.idPedido;
  console.log(idPedido);
  const q = "SELECT * FROM itenspedido WHERE idPedido = ?";
  db.query (q, [idPedido], (err, itens)=>{
    if (err){
      console.log(err);
      console.log("deu erro")
      return res.status(500).json("Erro ao buscar os itens do pedido");
    }
    console.log("talvez tenha dado um erro esquisito (ou nao)")
    return res.status(200).json(itens);
  })
}
export const getLivros = (req, res)=>{
  console.log("entrei no getLivro");
  const livrosIds = req.query.livrosIds;
  console.log("id do livro: ",livrosIds)
  const q = "SELECT * FROM livros WHERE idLivro IN (?)";
  db.query(q, [livrosIds], (err, item)=>{
    if (err){
      console.log("deu erro");
      console.log(err);
      return res.status(500).json("erro ao buscar o endereço");
    }
    return res.status(200).json(item);
  })
}
export const getEndereco = (req, res)=>{
  console.log("entrei no getEndereço");
  const idPedido = req.query.idPedido;
  console.log(idPedido);
  const q = "SELECT * FROM endereço WHERE idPedido = ?";
  db.query(q, [idPedido], (err, item)=>{
    if (err){
      console.log("deu erro");
      console.log(err);
      return res.status(500).json("erro ao buscar o endereço");
    }
    return res.status(200).json(item);
  })
}

export const getNome = (req, res)=>{
  const q = "SELECT nome FROM usuario WHERE email = ?";
  console.log("cheguei no getNome");
  db.query (q, [req.query.email], (err, userResult)=>{
    if (err){
      console.log(err);
      return res.status(500).json("erro ao buscar nome");
    }
    if (userResult === undefined || userResult === null){
      return res.status(404).json("nome nao encontrado");
    }
    const nome = userResult[0];
    console.log("nome do usuario: ", nome);
    return res.status(200).json({sigla: nome})
  })
  
};
export const getUserId = (req, res) =>{
  const getUserQuery = "SELECT idUsuario FROM usuario WHERE email = ?";
  console.log("cheguei no getuserid")
  db.query(getUserQuery, [req.query.email], (err, userResult)=>{
    if (err){
      console.log(err);
      return res.status(500).json("Erro ao buscar o ID do user");
    }
    if (userResult === undefined || userResult === null){
      return res.status(404).json("Usuário não encontrado");
    }
    
    const userId = userResult[0];
    console.log(userId, "consegui pegar o idUsuario");
    return res.status(200).json({idUsuario: userId});
  })
} 

export const realizarPedido = async (req, res) => {
  try {
    const { Usuario_idUsuario, totalPedido, dataPedido } = req.body;

    // Primeiro, obter o idUsuario com base no email

    // Criar o pedido na tabela Pedidos
    if (Usuario_idUsuario === undefined || Usuario_idUsuario ===null){
      return res.status(404).json("Usuário não encontrado");
    }
    const addPedidoQuery =
      "INSERT INTO pedido (`Usuario_idUsuario`, `totalPedido`, `statusPedido`, `dataPedido`) VALUES (?, ?, 'Andamento', ?)";
    
    const addPedidoResult = await db.query(addPedidoQuery, [
      Usuario_idUsuario.idUsuario,
      totalPedido,
      dataPedido,
      
    ]);
    const idPedidoResult = "SELECT LAST_INSERT_ID() as idPedido";
    db.query(idPedidoResult,  (err, userResult)=>{
      if (err){
        console.log(err);
        return res.status(500).json("Erro ao buscar o ID do user");
      }
      if (userResult === undefined || userResult === null){
        return res.status(404).json("Usuário não encontrado");
      }
      const idPedido = userResult[0].idPedido;
      console.log("id pedido de dentro do realIzarpedido:",idPedido)// ID do pedido criado
      return res.status(200).json({ idPedido: idPedido });

    });
  } catch (error) {
    console.error("Erro ao realizar pedido:", error);
    return res.status(500).json("Erro ao realizar pedido.");
  }
}; 
 //tirei o async e os await
export const inserirItemPedido = async (req, res) => {

  //console.log("teste 2 id do livro e quantidade",idLivro, quantidade);
  //console.log("id do pedido de dentro do 'inseriritempedido' ",idPedido)
     
  try {  
    const {idPedido, idLivro, quantidade, preco_unitario} = req.body;
    console.log("testando:  ",idPedido);
    const estoqueQuery = "SELECT Estoque FROM livros WHERE idLivro = ?";
    /*
    const estoqueResult = await db.query(estoqueQuery, [idLivro])
    console.log("id livro: ", estoqueResult[0].Estoque);
    if (estoqueResult.length > 0) {
      const estoqueAtual = estoqueResult[0].Estoque;
      console.log("estoque atual ",estoqueAtual);
    }*/
    //console.log("estoque result",estoqueResult)
    // if (estoqueAtual>= quantidade){
    const subtrairEstoqueQuery = "UPDATE livros SET Estoque = Estoque - ? WHERE idLivro = ?";
    await db.query(subtrairEstoqueQuery, [quantidade, idLivro]);
      
    const inserirItemQuery = "INSERT INTO itenspedido (`idPedido`, `idLivro`, `quantidade`, `preco_unitario`) VALUES (?, ?, ?, ?)";
    await db.query(inserirItemQuery, [idPedido, idLivro, quantidade, preco_unitario]);
    return true; // Indica sucesso na inserção
    //}
    /*
    else {
      return false;
    }*/
    
  } catch (error) {
    console.error("Erro ao inserir item do pedido:", error); 
    return false; // Indica falha na inserção
  } 
};

export const addAddress = async (req, res) =>{
  
  try {
    const {bairro, rua, numero, estado, cidade, cep, idPedido} = req.body;
    const q = "INSERT INTO endereço (`Bairro`, `Rua`, `Numero`, `Estado`, `Cidade`, `Cep`, `idPedido`) VALUES (?, ?, ?, ?, ?, ?, ?)";
    await db.query(q, [
      bairro, 
      rua,
      numero,
      estado,
      cidade,
      cep,
      idPedido,
    ]);
    return res.status(200).json("Endereço inserido com sucesso");
  }
  catch(error){
    return res.status(500).json("erro ao inserir endereço");
  }
}

export const addCarrinho = (req, res)=> {
  const getUserQuery = "SELECT idUsuario FROM usuario WHERE email = ?";
  const addCarrinhoQuery = "INSERT INTO carrinho (`Usuario_idUsuario`, `idLivro`, `quantidade`) VALUES (?, ?, 1)";
  db.query(getUserQuery, [req.body.email], (err, userResult)=>{
    if (err){
      console.log(err);
      return res.status(500).json("Erro ao add ao carrinho");
    }
    const userId = userResult[0].idUsuario;
    if (userId=== undefined || userId===null){
      return res.status(404).json("Usuario nao encontrado");
    }
    

    db.query(addCarrinhoQuery, [userId, req.body.idLivro], (err)=>{
      if (err){
        console.log(err);
        return res.status(500).json("Erro ao add ao carrinho");
      }
      return res.status(200).json("Livro add com sucesso");
    })
  })
  
  //Lógica do addCarrinho
}

export const removerItem = (req, res)=>{
  const getUserQuery = "SELECT idUsuario FROM usuario WHERE email = ?";
  const removeItemQuery = "DELETE FROM carrinho WHERE Usuario_idUsuario = ? AND idLivro = ?";
  console.log("cheguei no removeItem")
  db.query(getUserQuery, [req.body.email], (err, userResult) => {
    if (err) {
      console.log(err);
      return res.status(500).json("Erro ao remover item do carrinho");
    }
    if (userResult[0].idUsuario === undefined || userResult[0].idUsuario === null){
      return res.status(404).json("usuário não encontrado");
    }
    const userId = userResult[0].idUsuario;
    
    db.query(removeItemQuery, [userId, req.body.idLivro], (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json("Erro ao remover item do carrinho");
      }
      
      return res.status(200).json("Item removido com sucesso do carrinho");
    });
  });
}

export const listarCarrinho = (req, res)=> {
  console.log("corpo da requisição: ",req.query.email);
  const userEmail = req.query.email;
  if (userEmail === null || userEmail === undefined){
    return res.status(404).json("Usuario não logado");
  }
  // Primeira consulta para obter o idUsuario com base no email
  const getUserIdQuery = "SELECT idUsuario FROM usuario WHERE email = ?";
  db.query(getUserIdQuery, [userEmail], (err, userIdResults) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Erro ao buscar o id do usuário.");
    }
  
    if (userIdResults[0].idUsuario === undefined || userIdResults[0].idUsuario === null){
      return res.status(404).json("usuário não encontrado");
    }
    const userId = userIdResults[0].idUsuario;
    console.log(userId);
    // Segunda consulta para buscar os itens do carrinho do usuário
    const getCartItemsQuery = `
      SELECT c.idCarrinho, c.idLivro, c.quantidade, l.Titulo, l.Autor, l.Preco
      FROM carrinho c
      JOIN livros l ON c.idLivro = l.idLivro
      WHERE c.Usuario_idUsuario = ?
    `;

    db.query(getCartItemsQuery, [userId], (err, cartItems) => {
      if (err) {
        console.error(err);
        return res.status(500).json("Erro ao buscar os itens do carrinho.");
      }

      return res.status(200).json(cartItems);
    });
  });
}



export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuario";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
export const addAdmin = (req, res) => {
  console.log("entrei no addAdmin")
  const q = 
    "INSERT INTO administrador(`Nome`, `Email`, `CPF`, `Senha` ) VALUES(?)";
  console.log("cheguei aqui no add User;")

  // Gere o salt
  const saltRounds = 10; 

  // Use bcrypt para gerar o hash da senha
  bcrypt.hash(req.body.Senha, saltRounds, (err, hash) => {
    if (err) {
      return res.status(500).json("Erro ao criar usuário.");
    }
    const values = [
      req.body.Nome,
      req.body.Email,
      req.body.CPF,
      hash, // Use o hash da senha em vez da senha original
    ];

    db.query(q, [values], (err) => {
      console.log("cheguei aqui também");
      if (err) {
        return res.status(500).json("Erro ao criar usuário.");
      }
      return res.status(200).json("Usuário criado com sucesso.");
    });
  });
}


export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuario(`nome`, `email`, `fone`, `data_nascimento`, `CPF`, `Senha` ) VALUES(?)";
  console.log("cheguei aqui no add User;")

  // Gere o salt
  const saltRounds = 10;

  // Use bcrypt para gerar o hash da senha
  bcrypt.hash(req.body.Senha, saltRounds, (err, hash) => {
    if (err) {
      return res.status(500).json("Erro ao criar usuário.");
    }

    const values = [
      req.body.nome,
      req.body.email,
      req.body.fone,
      req.body.data_nascimento,
      req.body.CPF,
      hash, // Use o hash da senha em vez da senha original
    ];

    db.query(q, [values], (err) => {
      console.log("cheguei aqui também");
      if (err) {
        return res.status(500).json("Erro ao criar usuário.");
      }
      return res.status(200).json("Usuário criado com sucesso.");
    });
  });

  /*
  const q =
    "INSERT INTO usuario(`nome`, `email`, `fone`, `data_nascimento`, `CPF`, `Senha` ) VALUES(?)";
  console.log("cheguei aqui no add User;")
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
    req.body.CPF,
    req.body.Senha
  ];

  db.query(q, [values], (err) => {
    console.log("cheguei aqui também");
    //if (err) return res.json(err);
    if (err){
      return res.status(500).json("Erro ao criar usuário.");
    }
    return res.status(200).json("Usuário criado com sucesso.");
  });*/
};


app.get("/login", (req, res)=>{
  if (req.session.user){
    res.send({loggedIn: true, user : req.session.user})
  }else {
    res.send({loggedIn: false})
  }
})

export const logOut = (req, res)=> {
  if (req.session){
    req.session.destroy((err)=>{
      if (err){
        console.error("logout error", err);
        return res.status(500).json("eeerrrroooo");
      }
      res.clearCookie("userId");
      return res.status(200).json("deslogado");
    })
  }else {
    return res.status(400).json("voce nao estava logado");
  }
  
}
/*
export const logOut = (req, res) => {
  req.session.destroy((err)=>{
    if(err){
      console.error("Logout error: ", err);
      return res.status(500).json("error logging out"); 
    }
    res.clearCookie("userId");
    res.status(200).json("Logged out successfully");
  })
}
*/


export const logUser = (req, res) => {
  const q = "SELECT * FROM usuario WHERE email = ?";
  const values = [req.body.email];
  //console.log("Email:", req.body.email);
  //console.log("Senha:", req.body.Senha);
  db.query(q, values, (err, userData) => {
    if (err) return res.json(err);

    if (userData.length === 1) {
      // Verifique a senha usando bcrypt.compare
      bcrypt.compare(req.body.Senha, userData[0].Senha, (compareErr, match) => {
        if (compareErr) {
          return res.status(500).json("Erro ao fazer login.");
        }

        if (match) {
          // Login successful
          req.session.user = userData;
          //console.log(req.session.user);
          return res.status(200).json("Login successful.");
        } 
      });
      
    } 
    else {
      const adminQuery = "SELECT * FROM administrador WHERE Email = ?";
      db.query(adminQuery, values, (adminErr, adminData) => {
        if (adminErr) return res.json(adminErr);

        if (adminData.length === 1) {
          //console.log("entrei aqqq")
          // Verifique a senha do administrador usando bcrypt.compare
          bcrypt.compare(req.body.Senha, adminData[0].Senha, (adminCompareErr, adminMatch) => {
            if (adminCompareErr) {
              return res.status(500).json("Erro ao fazer login.");
            }

            if (adminMatch) {
              // Admin login successful
              req.session.user = adminData;
              //console.log(req.session.user);
              return res.status(200).json("Admin Login successful");
            } else {
              return res.status(401).json("Credenciais inválidas");
            }
          });
        } else {
          return res.status(401).json("Credenciais inválidas");
        }
      });
    }
  });
};
//module.exports = (logUser)
export const updateUser = (req, res) => {
  console.log("Entrei no updateUser do manager")
  const q =
    "UPDATE usuario SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ?, `CPF` = ?, `Senha`= ?  WHERE `idUsuario` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
    req.body.CPF,
    req.body.Senha,
  ];

  db.query(q, [...values, req.params.idUsuario], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  console.log("entrei aqui");
  const q = "DELETE FROM usuario WHERE `idUsuario` = ?";

  db.query(q, [req.params.idUsuario], (err) => {
    if (err) return res.json(err);
    console.log("entrei aqui também")
    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
//já tem o inserirItemPedido, acho que n preciso de outro
export const alterarPedido = async (req, res) => {
  console.log("entrei no alterar pedido backend", )
  const idPedido = req.params.idPedido;
  const { statusPedido, totalPedido, Usuario_idUsuario} = req.body;
  console.log(statusPedido);
  try {
    const updatePedidoQuery = `
    UPDATE pedido 
    SET statusPedido = ?, totalPedido = ?, Usuario_idUsuario = ?
    WHERE idPedido = ?
  `;
  await db.query(updatePedidoQuery, [statusPedido, totalPedido, Usuario_idUsuario, idPedido]);
  res.status(200).json({message: "Pedido atualizado com sucesso!"});
  } catch(error) {
    console.error("erro ao alterar pedido", error);
    res.status(500).json({error: "erro ao atualizar Pedido"});
  }
}

export const atualizarItemPedido = async (req, res) => {
  console.log("enntrei no atualizaritem", req.params.idPedido, req.params.idLivro);
  const idPedido = req.params.idPedido;
  const idLivro = req.params.idLivro;

  const { quantidade, preco_unitario } = req.body;
  console.log(quantidade, preco_unitario)
  try {
    const updateItemQuery = `
      UPDATE itenspedido 
      SET quantidade = ?, preco_unitario = ?
      WHERE idPedido = ? AND idLivro = ?
    `;

    await db.query(updateItemQuery, [quantidade, preco_unitario, idPedido, idLivro]);

    res.status(200).json({ message: "Item do pedido atualizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar item do pedido:", error);
    res.status(500).json({ error: "Erro ao atualizar item do pedido" });
  }
};

export const alterarEndereco = async (req, res) => {
  console.log("Entrei na alterar endereço com id: ", req.params.idPedido);
  const idPedido = req.params.idPedido;
  const {
    Bairro,
    Rua,
    Numero,
    Estado,
    Cidade,
    CEP
  } = req.body;

  try {
    const updateEnderecoQuery = `
      UPDATE endereço 
      SET Bairro = ?, Rua = ?, Numero = ?, Estado = ?, Cidade = ?, CEP = ?
      WHERE idPedido = ?
    `;

    await db.query(updateEnderecoQuery, [
      Bairro,
      Rua,
      Numero,
      Estado,
      Cidade,
      CEP,
      idPedido
    ]);

    res.status(200).json({ message: "Endereço atualizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar endereço:", error);
    res.status(500).json({ error: "Erro ao atualizar endereço de entrega" });
  }
};
export const deletarPedido = async (req, res) => {
  const idPedido = req.params.idPedido;
  console.log("entrei no delete", idPedido);
  try {
    // Realize a exclusão do pedido no banco de dados
    const deletePedidoQuery = "DELETE FROM pedido WHERE idPedido = ?";
    await db.query(deletePedidoQuery, [idPedido]);

    res.status(200).json({ message: "Pedido excluído com sucesso!" });
  } catch (error) {
    console.error("Erro ao excluir pedido:", error);
    res.status(500).json({ error: "Erro ao excluir pedido" });
  }
}  
export const deletarItemPedido = async (req, res)=>{
  const idPedido = req.params.idPedido;
  const idLivro = req.params.idLivro;
  console.log("entrei no delete do item> ", idPedido, "id do livro> ", idLivro);
  try {
    const deleteItemQuery = "DELETE FROM itenspedido WHERE idPedido = ? AND idLivro = ?"
    await db.query(deleteItemQuery, [idPedido, idLivro]);
    res.status(200).json({message: "Item do pedido deletado com sucesso."})
  } catch(error){
    console.error("Erro ao excluir item.", error);
    res.status(500).json({error: "erro ao excluir item"});
  }
}
export const cadastrarPedido = async (req,res)=> {//passando o IdPedido
  //const {idPedido, UsuarioId, statusPedido, totalPedido, dataPedido} = req.body;
  console.log("entrei no cadastrar");
  try {   
    const {
      idPedido1,
      UsuarioId,
      statusPedido,
      totalPedido,
      dataPedido,
    } = req.body;
    const pedidoQuery = `INSERT INTO pedido (idPedido, Usuario_idUsuario, statusPedido, totalPedido, dataPedido) VALUES (?, ?, ?, ?, ?)`;
    await db.query(pedidoQuery, [idPedido1, UsuarioId, statusPedido, totalPedido, dataPedido]);
    const itens = req.body.itens; 
    for (const item of itens){
      const {idPedido2, idLivro, quantidade, preco_unitario} = item;
      //pedidoId = idPedido; 
      const itemQuery = `INSERT INTO itenspedido (idPedido, idLivro, quantidade, preco_unitario) VALUES(?, ?, ?, ?)`;
      await db.query(itemQuery, [idPedido2, idLivro, quantidade, preco_unitario]);
      console.log("entrei no for, os valores sao: ",idPedido2, idLivro);
    }
    //idPedidoed = idPedido;
    const {idPedido3, bairro, rua, numero, estado, cidade, cep} = req.body.endereco;
    const enderecoQuery = `INSERT INTO endereço (idPedido, Bairro, Rua, Numero, Estado, Cidade, CEP) VALUES(?,?,?,?,?,?,?)`;
    await db.query(enderecoQuery, [idPedido3, bairro, rua, numero, estado, cidade, cep]);
    return res.status(200).json({message: 'Pedido cadastrado com sucesso'}); 
  }catch(error){
    console.error("erro ao cadastrar pedido", error);
    return res.status(500).json({error:'erro ao cadastrar pedido'});
  }
}

export const getuserData = async (req, res)=>{
  console.log("entrei no getUserData agora")
  const email = req.query.email;
  console.log("EMAIL PASSADO: ", email)
  try {
    const query = "SELECT nome, email, fone, CPF FROM usuario WHERE email = ?";
    db.query(query, [email], (err, dados)=>{
      if (err){
        console.log("Erro ao realizar query", err);
        return res.status(500).json("Erro ao buscar dados user");
      }
      console.log("Deu certo o getUserData")
      //console.log(dados[0].nome)
      return res.status(200).json(dados)
      
    })
    
  }
  catch(error){
    console.error("Erro ao buscar usuario backend:", error);
    res.status(500).json({error: "erro ao buscar dados do usuário"});
  }
}

export const alterarDadosUsuario = async (req, res)=>{
  const { nome, email, CPF, Telefone } = req.body;
  console.log("entrei no alterarDadosUsuario----------------")
  
  try {
    const updateUserDataQuery = `
      UPDATE usuario
      SET nome = ?, CPF = ?, fone = ?
      WHERE email = ?
    `; 
    await db.query(updateUserDataQuery, [nome, CPF, Telefone, email], (error)=>{
      if (error){
        console.log(error);
        console.log("Deu erro!!!");
        return res.status(500).json("Erro ao atualizar dados", error);
      }
      return res.status(200).json("Dados atualizados com sucesso!!!!!")
    })
    /*
    await db.query(updateUserDataQuery, [nome, email, CPF, Telefone])
    res.status(200).json({ message: "Dados do usuário atualizados com sucesso!" });
    */
  } catch (error) {
    console.error("Erro ao atualizar dados do usuário:", error);
    res.status(500).json({ error: "Erro ao atualizar dados do usuário" });
  }
}