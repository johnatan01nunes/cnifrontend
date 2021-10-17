import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './index.css';

class EditarProfessor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            professor: {
                nome: "",
                salario: "",
                dataNascimento: ""
            },
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
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Editar Professor</legend>
                        <div className="professor-update">
                            <label htmlFor="nome">Nome </label>
                            <br />
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Nome"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.professor.nome}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="professor-update">
                            <label htmlFor="salario">professor </label>
                            <br />
                            <input
                                type="text"
                                id="salario"
                                name="salario"
                                placeholder="Matrícula"
                                min="1"
                                max="99999"
                                required
                                value={this.state.professor.salario}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="professor-update">
                            <label htmlFor="dataNascimento">Data de Nascimento </label>
                            <br />
                            <input
                                type="text"
                                id="dataNascimento"
                                name="dataNascimento"
                                placeholder="dataNascimento"
                                required
                                value={this.state.professor.dataNascimento}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Atualizar
                    </button>
                    </fieldset>
                </form>
            );
        }
    }



    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            professor: { ...prevState.professor, [name]: value }
        }));
    };

    handleSubmit = event => {
        const { id } = this.state.professor;

        fetch(`http://localhost:3003/sistema/professor/${id}`, {
            method: "put",
            body: JSON.stringify(this.state.professor),
            headers: {
                "Content-Type": "application/json"
            }
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

export default EditarProfessor;
