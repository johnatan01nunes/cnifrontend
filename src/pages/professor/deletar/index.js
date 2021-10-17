import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import './index.css';

class DeletarProfessor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            professor: {},
            erro: null,
            redirect: false
        };
    }

    exibeErro() {
        const { erro } = this.state;

        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
        </div>
            );
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3003/sistema/professor/${id}`)
            .then(data => {
                data.json().then(data => {
                    if (data.error) {
                        this.setState({ erro: data.error });
                    } else {
                        this.setState({ professor: data });
                    }
                });
            })
            .catch(erro => this.setState({ erro: erro }));
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/professor" />;
        } else {
            return (
                <fieldset>
                    <legend>Deletar Professor</legend>
                    <div className="professor-delete">
                        <label htmlFor="nome">{this.state.professor.nome} </label>
                        <p>Tem certeza que deseja deletar este registro?</p>

                        <button
                            onClick={this.handleClick}
                        >
                            Remover
                        </button>
                        <br/><br/>
                        <Link to={`/professor`}>Voltar</Link>
                    </div>
                </fieldset>
            );
        }
    }

    handleClick = event => {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3003/sistema/professor/${id}`, {
            method: "delete"
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                } else {
                    data.json().then(data => {
                        if (data.error) {
                            this.setState({ erro: data.error });
                        }
                    });
                }
            })
            .catch(erro => this.setState({ erro: erro }));

        event.preventDefault();
    };
}

export default DeletarProfessor;
