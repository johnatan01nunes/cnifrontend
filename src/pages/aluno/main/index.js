import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import moment from "moment";





export default class Main extends Component{

    constructor(props){
        super(props);
        this.state ={
            aluno:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:3003/sistema/aluno')
        .then(aluno =>
            aluno.json().then(aluno => this.setState({aluno}))
            )
    }

    render() {
        const { aluno } = this.state;
        if(aluno.ativo){
            aluno.ativo = "Ativo";
        }else{
            aluno.ativo = "Inativo";
        }
        return aluno.map((aluno, index) => (
            <div className="aluno-list">
                <table class="table table-bordered" key={index}>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Matricula</th>
                    <th scope="col">cpf</th>
                    <th scope="col">email</th>
                    <th scope="col">Data de Nascimento</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">Contato</th>
                    <th scope="col">Situação</th>
                    <th scope="col">Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"> {aluno.id} </th>
                    <td>{aluno.nome} </td>
                    <td> {aluno.matricula} </td>
                    <td>{aluno.cpf} </td>
                    <td>{aluno.email} </td>
                    <td>{moment(aluno.dt_nasc).format('DD/MM/YYYY')}</td>
                    <td>{aluno.sexo} </td>
                    <td>{aluno.contato} </td>
                    <td>{aluno.ativo} </td>
                    <td><Link to = {`/aluno/${aluno.id}`}> Detalhes</Link> </td>
                    </tr>
                </tbody>
                </table>
            </div>
        ))
    }
}