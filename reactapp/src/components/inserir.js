import React, {Component} from 'react';

export default class Inserir extends Component{
    constructor(props){
        super(props);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeIdade = this.onChangeIdade.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeEndereco = this.onChangeEndereco.bind(this);
        this.onChangeCPF = this.onChangeCPF.bind(this);
        this.pessoa = {
            nome:'',
            idade:0,
            email:'',
            endereco:'',
            cpf:''
        } 
    }
    onChangeNome(e){
        this.pessoa.nome = e.target.value;
    }
    onChangeIdade(e){
        this.pessoa.idade = e.target.value;
    }
    onChangeEmail(e){
        this.pessoa.email = e.target.value;
    }
    onChangeEndereco(e){
        this.pessoa.endereco = e.target.value;
    }
    onChangeCPF(e){
        this.pessoa.cpf = e.target.value;
    }
    async enviar(){
       await fetch('http://localhost:4000/pessoa',{
            method:'POST',
            body:JSON.stringify(this.pessoa),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(window.location.href = '/')
    }
    render(){
        return(
            <>
            <h1>Inserir Novo Cliente</h1>
            <label>Informe seu nome</label>
            <input className='form-control'  onChange={this.onChangeNome}/>
            <label>Infome sua idade</label>
            <input className='form-control'  onChange={this.onChangeIdade}/>
            <label>informe seu email</label>
            <input className='form-control'  onChange={this.onChangeEmail}/>
            <label>Informe seu Endereço</label>
            <input className='form-control'  onChange={this.onChangeEndereco}/>
            <label>Informe seu CPF</label>
            <input className='form-control' onChange={this.onChangeCPF}/>
            <br/>
            <button className='btn btn-success' onClick={this.enviar.bind(this)}>Enviar</button>
            </>
              
        )
    }
}