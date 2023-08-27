import express from "express";
import { addAddress, addAdmin, addCarrinho, addUser, alterarEndereco, alterarPedido, atualizarItemPedido, cadastrarPedido, deletarItemPedido, deletarPedido, deleteUser, getEndereco, getItensPedido, getLivros, getNome, getPedidos, getUserId, getUsers,  inserirItemPedido,  listarCarrinho,  listarPedidos,  logOut,  logUser, realizarPedido, removerItem, updateUser } from "../controllers/user.js";
import { addBook, atualizarLivro, deleteBook, getLivroById, listarLivros } from "../controllers/book.js";
const router = express.Router()

router.get("/", getUsers)

router.put("/alterarPedido/:idPedido", alterarPedido)

router.post("/addAdmin", addAdmin);

router.put("/alterarEndereco/:idPedido", alterarEndereco);

router.delete("/deletePedido/:idPedido", deletarPedido);

router.delete("/deleteItemPedido/:idPedido/:idLivro", deletarItemPedido);

router.post("/cadastrarPedido", cadastrarPedido);

router.get("/getUserId", getUserId);

router.post("/", addUser)

router.post("/livros", addBook)

router.post("/addCarrinho", addCarrinho);

router.post("/realizarPedido", realizarPedido);

router.get("/getItensPedido", getItensPedido);

router.get("/getEndereco", getEndereco);

router.get("/listarPedidos", listarPedidos);

router.get("/getPedidos", getPedidos);

router.get("/getLivros", getLivros);

router.post("/addAddress", addAddress);

router.post("/inserirItemPedido", inserirItemPedido);

router.get("/listarCarrinho", listarCarrinho);

router.delete("/removerItem", removerItem);

router.get("/getNome", getNome);

router.post("/login", logUser);
//router.get("produto/:idLivro", getLivroById);
router.get("/livros/:idLivro", getLivroById);

router.get("/livros", listarLivros);

router.post("/logout", logOut);

router.get("/login", (req, res)=>{
    if (req.session.user){
      res.send({loggedIn: true, user : req.session.user})
    }else {
      res.send({loggedIn: false})
    }
  })
router.post("/livros", addBook);

router.post("/signup", addUser);

router.delete("/livros/:idLivro", deleteBook );

router.put("/livros/:idLivro", atualizarLivro);

router.put("/atualizarItemPedido/:idPedido/:idLivro", atualizarItemPedido)

router.put("/:idUsuario", updateUser);

router.delete("/:idUsuario", deleteUser);

export default router