import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import moment from "moment";

export default class Professor extends Component {
    state = {
        professor: {},
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3003/sistema/professor/${id}`)
            .then(professor =>
                professor.json().then(professor => this.setState({ professor }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { professor} = this.state;

        if (professor.ativo) {
            professor.ativo = "Ativo";
        } else {
            professor.ativo = "Inativo";
        }

        return (
            <div className="professor-info">
                <h1> {professor.nome} </h1>
                <h1> {professor.ativo} </h1>
                <h1> {moment(professor.dataNascimento).format('DD-MM-YYYY')} </h1>
                <br />
                <Link to={`/professor`}> Voltar </Link> <br />
                <Link to={`/editarProfessor/${professor.id}`}> Editar </Link> <br />
                <Link to={`/deletarProfessor/${professor.id}`}> Deletar </Link> <br />
            </div >
        );
    }
}