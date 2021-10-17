import React ,{Component} from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import './index.css';



export default class Turma extends Component{
    state = {
        turma:{}
    };
    componentDidMount(){
        const {id} = this.props.match.params;

        fetch(`http://localhost:3003/sistema/turma/${id}`)
        .then(turma =>
            turma.json().then(turma =>this.setState({turma}))
            )
    }

    render (){
        const{turma} = this.state;
        if(turma.ativo){
            turma.ativo = "Ativo";
        }else{
            turma.ativo = "Inativo";
        }

        return(
            <div className="turma-info">
                <fieldset>
                    <legend>Dados do Turma</legend>
                        <h3>Nome: {turma.nome}</h3>
                        <h3>Carga Horaria {turma.carga_hr}</h3>
                        <h3>Cod Professor: {turma.professor_id}</h3>
                        <h3>Cod Aluno: {turma.aluno_id}</h3>
                        <h3>Cod Curso: {turma.curso_id}</h3>
                        <h3>Nº Sala: {turma.num_sala}</h3>
                        <h3>Data Inicio: {moment(turma.dt_ini).format('DD/MM/YYYY')}</h3>
                        <h3>Data Fim: {moment(turma.dt_fim).format('DD/MM/YYYY')}</h3>
                </fieldset><br/>
                
                
            <Link class="links" to={`/turma`}>Voltar</Link> 
            <Link class="links" to={`/editarTurma/${turma.id}`}>Editar</Link>
            <Link class="links" to={`/deletarTurma/${turma.id}`}>Deletar</Link>
            </div>
        )
    }
}