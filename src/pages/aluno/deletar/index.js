import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import './index.css';

class DeletarAluno extends Component {
    constructor(props) {
        super(props);

        this.state = {
            aluno: {},
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

        fetch(`http://localhost:3003/sistema/aluno/${id}`)
            .then(data => {
                data.json().then(data => {
                    if (data.error) {
                        this.setState({ erro: data.error });
                    } else {
                        this.setState({ aluno: data });
                    }
                });
            })
            .catch(erro => this.setState({ erro: erro }));
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/aluno" />;
        } else {
            return (
                <fieldset>
                    <legend>Deletar aluno</legend>
                    <div className="aluno-delete">
                        <label htmlFor="nome">{this.state.aluno.nome} </label>
                        <p>Tem certeza que deseja deletar este registro?</p>

                        <button class="btn btn-primary"
                            onClick={this.handleClick}
                        >
                            Remover
                        </button>
                        <br/><br/>
                        <button class="btn btn-secondary"><Link class="voltar" to={`/aluno`}>Voltar</Link></button>
                    </div>
                </fieldset>
            );
        }
    }

    handleClick = event => {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3003/sistema/aluno/${id}`, {
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

export default DeletarAluno;