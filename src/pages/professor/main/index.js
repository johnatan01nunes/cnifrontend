import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import moment from "moment";





export default class Main extends Component{

    constructor(props){
        super(props);
        this.state ={
            professor:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:3003/sistema/professor')
        .then(professor =>
            professor.json().then(professor => this.setState({professor}))
            )
    }

    render() {
        const { professor } = this.state;
        if(professor.ativo){
            professor.ativo = "Ativo";
        }else{
            professor.ativo = "Inativo";
        }
        return professor.map((professor,index) => (
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
                    <th scope="row"> {professor.id} </th>
                    <td>{professor.nome} </td>
                    <td> {professor.matricula} </td>
                    <td>{professor.cpf} </td>
                    <td>{professor.email} </td>
                    <td>{moment(professor.dt_nasc).format('DD/MM/YYYY')}</td>
                    <td>{professor.sexo} </td>
                    <td>{professor.contato} </td>
                    <td>{professor.ativo} </td>
                    <td><Link to = {`/aluno/${professor.id}`}> Detalhes</Link> </td>
                    </tr>
                </tbody>
                </table>
            </div>
        ))
    }
}