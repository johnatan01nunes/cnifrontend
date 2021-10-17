import React ,{Component} from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import './index.css';



export default class Aluno extends Component{
    state = {
        aluno:{}
    };
    componentDidMount(){
        const {id} = this.props.match.params;

        fetch(`http://localhost:3003/sistema/aluno/${id}`)
        .then(aluno =>
            aluno.json().then(aluno =>this.setState({aluno}))
            )
    }

    render (){
        const{aluno} = this.state;
        if(aluno.ativo){
            aluno.ativo = "Ativo";
        }else{
            aluno.ativo = "Inativo";
        }

        return(
            <div className="aluno-info">
                <fieldset>
                    <legend>Dados do Aluno</legend>
                        <h3>Nome: {aluno.nome}</h3>
                        <h3>Matricula: {aluno.matricula}</h3>
                        <h3>CPF: {aluno.cpf}</h3>
                        <h3>Data de Nasc.: {moment(aluno.dt_nasc).format('DD/MM/YYYY')}</h3>
                        <h3>Email: {aluno.email}</h3>
                        <h3>Telefone: {aluno.contato}</h3>
                        <h3>Status do Aluno: {aluno.ativo}</h3>
                </fieldset><br/>
                
                
            <Link class="links" to={`/aluno`}>Voltar</Link> 
            <Link class="links" to={`/editarAluno/${aluno.id}`}>Editar</Link>
            <Link class="links" to={`/deletarAluno/${aluno.id}`}>Deletar</Link>
            </div>
        )
    }
}