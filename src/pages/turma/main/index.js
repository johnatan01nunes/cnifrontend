import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import moment from "moment";





export default class Main extends Component{

    constructor(props){
        super(props);
        this.state ={
            turma:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:3003/sistema/turma')
        .then(turma =>
            turma.json().then(turma => this.setState({turma}))
            )
    }

    render() {
        const { turma } = this.state;
        if(turma.ativo){
            turma.ativo = "Ativo";
        }else{
            turma.ativo = "Inativo";
        }
        return turma.map((turma, index) => (
            <div className="turma-list">
                <table class="table table-bordered" key={index}>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Carga Horaria</th>
                    <th scope="col">Cod Professor</th>
                    <th scope="col">Cod Aluno</th>
                    <th scope="col">Cod Curso</th>
                    <th scope="col">Nº Sala</th>
                    <th scope="col">Data Inicio</th>
                    <th scope="col">Data Fim</th>
                    <th scope="col">Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"> {turma.id} </th>
                    <td>{turma.nome} </td>
                    <td> {turma.carga_hr} </td>
                    <td>{turma.professor_id} </td>
                    <td>{turma.aluno_id} </td>
                    <td>{turma.curso_id}</td>
                    <td>{turma.num_sala} </td>
                    <td>{moment(turma.dt_ini).format('DD/MM/YYYY')} </td>
                    <td>{moment(turma.dt_fim).format('DD/MM/YYYY')} </td>
                    <td><Link to = {`/turma/${turma.id}`}> Detalhes</Link> </td>
                    </tr>
                </tbody>
                </table>
            </div>
        ))
    }
}