const express = require('express');
const app = express();
const http = require('http');
const empresaRouter = require('./rotas/EmpresaRouter');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
})
app.listen(4000,()=>{
    console.log('porta 4000 está ativa');
});
const server = http.createServer(app);
app.use(express.json());
app.use('/',empresaRouter);