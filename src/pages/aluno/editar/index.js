import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import './index.css';

class EditarAluno extends Component {
    constructor(props) {
        super(props);

        this.state = {
            aluno: {
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
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Editar Aluno</legend>
                        <div className="aluno-update">
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
                                value={this.state.aluno.nome}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="aluno-update">
                            <label htmlFor="matricula">Matricula </label>
                            <br />
                            <input
                                type="text"
                                id="matricula"
                                name="matricula"
                                placeholder="Matricula"
                                min="6"
                                max="99999"
                                required
                                value={this.state.aluno.matricula}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="aluno-update">
                            <label htmlFor="cpf">CPF </label>
                            <br />
                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                placeholder="cpf"
                                min="6"
                                max="99999"
                                required
                                value={this.state.aluno.cpf}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="aluno-update">
                            <label htmlFor="email">E-mail </label>
                            <br />
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="email"
                                min="6"
                                max="99999"
                                required
                                value={this.state.aluno.email}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="aluno-update">
                            <label htmlFor="sexo">Sexo </label>
                            <br />
                            <input
                                type="text"
                                id="sexo"
                                name="sexo"
                                placeholder="email"
                                min="6"
                                max="99999"
                                required
                                value={this.state.aluno.sexo}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="aluno-update">
                            <label htmlFor="contato">Contato </label>
                            <br />
                            <input
                                type="text"
                                id="contato"
                                name="contato"
                                placeholder="contato"
                                min="6"
                                max="99999"
                                required
                                value={this.state.aluno.contato}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="aluno-update">
                            <label htmlFor="dt_nasc">Data de Nascimento </label>
                            <br />
                            <input
                                type="date"
                                id="dt_nasc"
                                name="dt_nasc"
                                placeholder="dt_nasc"
                                required
                                value={this.state.aluno.dt_nasc}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Atualizar
                    </button>
                    <button class="btn btn-secondary"><Link class="voltar" to={`/aluno`}>Voltar </Link><br/></button>
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
            aluno: { ...prevState.aluno, [name]: value }
        }));
    };

    handleSubmit = event => {
        const { id } = this.state.aluno;

        fetch(`http://localhost:3003/sistema/aluno/${id}`, {
            method: "put",
            body: JSON.parse(this.state.aluno),
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

export default EditarAluno;