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

