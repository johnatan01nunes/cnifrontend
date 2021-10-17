import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import moment from "moment";





export default class Main extends Component{

    constructor(props){
        super(props);
        this.state ={
            curso:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:3003/sistema/curso')
        .then(curso =>
            curso.json().then(curso => this.setState({curso}))
            )
    }

    render() {
        const { curso } = this.state;
        if(curso.ativo){
            curso.ativo = "Ativo";
        }else{
            curso.ativo = "Inativo";
        }
        return curso.map((curso, index) => (
            <div className="curso-list">
                <table class="table table-bordered" key={index}>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Carga Horaria</th>
                    <th scope="col">Data de Inicio</th>
                    <th scope="col">Quantidade de Aluno</th>
                    <th scope="col">Nº Sala</th>
                    <th scope="col">Nome Professo</th>
                    <th scope="col">Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"> {curso.id} </th>
                    <td>{curso.nome} </td>
                    <td> {curso.descricao} </td>
                    <td>{curso.carga_hr} </td>
                    <td>{curso.dt_ini} </td>
                    <td>{moment(curso.dt_nasc).format('DD/MM/YYYY')}</td>
                    <td>{curso.qt_aluno} </td>
                    <td>{curso.num_sala} </td>
                    <td>{curso.nome_professor} </td>
                    <td><Link to = {`/curso/${curso.id}`}> Detalhes</Link> </td>
                    </tr>
                </tbody>
                </table>
            </div>
        ))
    }
}