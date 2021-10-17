import React ,{Component} from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import './index.css';



export default class Curso extends Component{
    state = {
        curso:{}
    };
    componentDidMount(){
        const {id} = this.props.match.params;

        fetch(`http://localhost:3003/sistema/curso/${id}`)
        .then(curso =>
            curso.json().then(curso =>this.setState({curso}))
            )
    }

    render (){
        const{curso} = this.state;
        if(curso.ativo){
            curso.ativo = "Ativo";
        }else{
            curso.ativo = "Inativo";
        }

        return(
            <div className="curso-info">
                <fieldset>
                    <legend>Dados do Curso</legend>
                        <h3>Nome: {curso.nome}</h3>
                        <h3>Descrição: {curso.descricao}</h3>
                        <h3>Carga Horaria: {curso.carga_hr}</h3>
                        <h3>Data de Inicio: {moment(curso.dt_ini).format('DD/MM/YYYY')}</h3>
                        <h3>Quantidade de Aluno: {curso.qt_aluno}</h3>
                        <h3>Nº Sala: {curso.num_sala}</h3>
                        <h3>Nome Professor: {curso.nome_professor}</h3>
                </fieldset><br/>
                
                
            <Link class="links" to={`/curso`}>Voltar</Link> 
            <Link class="links" to={`/Curso/${curso.id}`}>Editar</Link>
            <Link class="links" to={`/deletarCurso/${curso.id}`}>Deletar</Link>
            </div>
        )
    }
}