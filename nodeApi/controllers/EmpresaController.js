const express = require('express');
const mysql = require('mysql');

const con = mysql.createConnection({
    database:'Empresa',
    user:'root',
    password:'',
    host:'localhost'
})
con.connect((err)=>{
    if(err){
        console.log('error ao conectar');
    }else{
        console.log('conectado com sucesso');
    }
})
exports.get = (req,res) =>{
    con.query('SELECT * FROM PESSOAFISICA ORDER BY NOME',(err,rows)=>{
        if(err) console.log(err);
        else res.send(rows);
    });    
}
exports.post = (req,res)=>{
    let pessoa = {
        nome:req.body.nome,
        idade:req.body.idade,
        email:req.body.email,
        endereco:req.body.endereco,
        cpf:req.body.cpf
    }
    con.query(`INSERT INTO PESSOAFISICA 
             (NOME,IDADE,EMAIL,ENDERECO,CPF) VALUES
             ('${pessoa.nome}',${pessoa.idade},'${pessoa.email}','${pessoa.endereco}','${pessoa.cpf}')`);
             res.send(true);
}
exports.delete = (req,res)=>{
    let id = req.params.id;
    con.query(`DELETE FROM PESSOAFISICA WHERE ID = ${id}`);
    res.send(true);
}
