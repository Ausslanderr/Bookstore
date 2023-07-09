import { db } from "../db.js";

// Funções para validar autenticação do usuário

export const login = (userData, res) =>{
    //Lógica de autenticação do usuário
    //Verifica as credenciais fornecidas pelo cliente
    //e compara com os registros o bd

    res.json({message: "Login bem sucedido"});
}

export const signup = (userData)=>{
    //Lógica de criação do usuário

    res.json({message: "Cadastro bem sucedido"});

}