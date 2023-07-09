import { db } from "../db.js";

//Funções para manipular o banco de dados

export const getUsers = (_, res)=>{
    const q = "SELECT * FROM usuario";

    db.query(q, (err, data)=> {
        if (err) return res.json(err);
 
        return res.status(200).json(data);
    });
};

export const inserirUsuario = (_, res) => {
    const q = "INSERT INTO usuario(idUsuario, Nome, Email, CPF, Senha) VALUES (9, 'davi', 'teste', 64, 'teste')";

    db.query(q, (err, data)=> {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const alterarUsuario = (_, res) =>{
    // definir posteriormente

}