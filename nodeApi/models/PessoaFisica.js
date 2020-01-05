import Pessoa from './Pessoa';

export class PessoaFisica extends Pessoa{
    constructor(nome,idade,email,endereco){
        super(nome,idade,email,endereco);
    }
}