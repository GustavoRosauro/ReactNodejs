import React, { Component } from 'react'
import {Modal, Button} from 'react-bootstrap'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pessoas: [],
            show:false,
            pessoa:{}
        }
        this.carregaUsuarios();
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeIdade = this.onChangeIdade.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeEndereco = this.onChangeEndereco.bind(this);
        this.onChangeCPF = this.onChangeCPF.bind(this);
    }
    onChangeNome(e){
        this.setState({
            pessoa:{
                ID:this.state.pessoa.ID,
                NOME:e.target.value,
                IDADE:this.state.pessoa.IDADE,
                EMAIL:this.state.pessoa.EMAIL,
                ENDERECO:this.state.pessoa.ENDERECO,
                CPF:this.state.pessoa.CPF 
            }
        })
    }
    onChangeIdade(e){
        this.setState({
            pessoa:{
                ID:this.state.pessoa.ID,
                NOME:this.state.pessoa.NOME,
                IDADE:e.target.value,
                EMAIL:this.state.pessoa.EMAIL,
                ENDERECO:this.state.pessoa.ENDERECO,
                CPF:this.state.pessoa.CPF 
            }
        })
    }
    onChangeEmail(e){
        this.setState({
            pessoa:{
                ID:this.state.pessoa.ID,
                NOME:this.state.pessoa.NOME,
                IDADE:this.state.pessoa.IDADE,
                EMAIL:e.target.value,
                ENDERECO:this.state.pessoa.ENDERECO,
                CPF:this.state.pessoa.CPF 
            }
        })
    }
    onChangeEndereco(e){
        this.setState({
            pessoa:{
                ID:this.state.pessoa.ID,
                NOME:this.state.pessoa.NOME,
                IDADE:this.state.pessoa.IDADE,
                EMAIL:this.state.pessoa.EMAIL,
                ENDERECO:e.target.value,
                CPF:this.state.pessoa.CPF 
            }
        })
    }
    onChangeCPF(e){
        this.setState({
            pessoa:{
                ID:this.state.pessoa.ID,
                NOME:this.state.pessoa.NOME,
                IDADE:this.state.pessoa.IDADE,
                EMAIL:this.state.pessoa.EMAIL,
                ENDERECO:this.state.pessoa.ENDERECO,
                CPF:e.target.value 
            }
        })
    }    
    async carregaUsuarios() {
       await fetch('http://localhost:4000/pessoas')
            .then(resp => resp.json())
            .then(data => {
                this.setState({ pessoas: data })
                console.log(this.state.pessoas);
            });
    }
    async removerPessoa(id){
        await fetch(`http://localhost:4000/pessoa/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res =>{
            if(res){
                this.carregaUsuarios();
            }
        })
    }
    render() {
        const handleShow = (pessoa)=>{                
                this.setState({show:true,pessoa:pessoa});
        }
        const handleClose =()=>{
            this.setState({show:false});
        }
         const update =async ()=>{
            console.log(this.state.pessoa);
            await fetch(`http://localhost:4000/pessoa/${this.state.pessoa.ID}`,{
                method:'PUT',
                body:JSON.stringify(this.state.pessoa),
                headers:{'Content-Type':'application/json'}   
            })
            .then(()=>{
                this.carregaUsuarios();
                handleClose();
            })            
        }
        return (
            <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Endereço</th>
                        <th>Email</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.pessoas.map(pessoa => 
                        <tr key={pessoa.CPF}>
                            <td>{pessoa.NOME}</td>
                            <td>{pessoa.IDADE}</td>
                            <td>{pessoa.ENDERECO}</td>
                            <td>{pessoa.EMAIL}</td>
                            <td>{pessoa.CPF}</td>
                            <td><button className="btn btn-danger" onClick={() => this.removerPessoa(pessoa.ID)}>Remover</button></td>
                            <td><buttton className="btn btn-warning" onClick={handleShow.bind(this,pessoa)}>Editar</buttton></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Modal show={this.state.show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Editar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label>Nome</label>
                <input className='form-control' value={this.state.pessoa.NOME} onChange={this.onChangeNome}/>
                <label>Idade</label>
                <input className='form-control' value={this.state.pessoa.IDADE} type='number' onChange={this.onChangeIdade}/>
                <label>Email</label>
                <input className='form-control' value={this.state.pessoa.EMAIL} onChange={this.onChangeEmail}/>
                <label>Endereço</label>
                <input className='form-control' value={this.state.pessoa.ENDERECO} onChange={this.onChangeEndereco}/>
                <label>CPF</label>
                <input className='form-control' value={this.state.pessoa.CPF} onChange={this.onChangeCPF}/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fechar
              </Button>
              <Button variant="primary" onClick={update}>
                Salvar Alterações
              </Button>
            </Modal.Footer>
          </Modal>
          </>
        )
    }
} 