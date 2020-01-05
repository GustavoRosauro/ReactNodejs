import React, { Component } from 'react'


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pessoas: []
        }
        this.carregaUsuarios();
    }
    carregaUsuarios() {
        fetch('http://localhost:4000/pessoas')
            .then(resp => resp.json())
            .then(data => {
                this.setState({ pessoas: data })
                console.log(this.state.pessoas);
            });
    }
    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Endereço</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.pessoas.map(pessoa => 
                        <tr key={pessoa.CPF}>
                            <td>{pessoa.NOME}</td>
                            <td>{pessoa.IDADE}</td>
                            <td>{pessoa.ENDERECO}</td>
                            <td>{pessoa.CPF}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
} 