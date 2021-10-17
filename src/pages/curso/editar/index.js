import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import './index.css';

class EditarCurso extends Component {
    constructor(props) {
        super(props);

        this.state = {
            curso: {
                nome: "",
                descricao: "",
                carga_hr: "",
                qt_aluno: "",
                dt_ini: "",
                num_sala: "",
                nome_professor: ""
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

        fetch(`http://localhost:3003/sistema/curso/${id}`)
            .then(data => {
                data.json().then(data => {
                    if (data.error) {
                        this.setState({ erro: data.error });
                    } else {
                        this.setState({ curso: data });
                    }
                });
            })
            .catch(erro => this.setState({ erro: erro }));
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/curso" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Editar Curso</legend>
                        <div className="curso-update">
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
                                value={this.state.curso.nome}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="curso-update">
                            <label htmlFor="descricao">Descrição </label>
                            <br />
                            <input
                                type="text"
                                id="descricao"
                                name="descricao"
                                placeholder="descricao"
                                required
                                value={this.state.curso.descricao}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="curso-update">
                            <label htmlFor="carga_hr">Carga Horaria</label>
                            <br />
                            <input
                                type="date"
                                id="carga_hr"
                                name="carga_hr"
                                placeholder="carga horaria"
                                required
                                value={this.state.curso.carga_hr}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="curso-update">
                            <label htmlFor="qt_aluno">Quantidade de Aluno</label>
                            <br />
                            <input
                                type="date"
                                id="qt_aluno"
                                name="qt_aluno"
                                placeholder="t_aluno"
                                required
                                value={this.state.curso.qt_aluno}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="curso-update">
                            <label htmlFor="dt_ini">Carga Horaria</label>
                            <br />
                            <input
                                type="text"
                                id="dt_ini"
                                name="dt_ini"
                                placeholder="Data de Inicio"
                                required
                                value={this.state.curso.dt_ini}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="curso-update">
                            <label htmlFor="num_sala">Nº Sala</label>
                            <br />
                            <input
                                type="text"
                                id="num_sala"
                                name="num_sala"
                                placeholder="Nº Sala"
                                required
                                value={this.state.curso.num_sala}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="curso-update">
                            <label htmlFor="nome_professor">Nome_ professor</label>
                            <br />
                            <input
                                type="text"
                                id="nome_professor"
                                name="nome_professor"
                                placeholder="Nome_ professor"
                                required
                                value={this.state.curso.nome_professor}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Atualizar
                    </button>
                    <button class="btn btn-secondary"><Link class="voltar" to={`/curso`}>Voltar </Link><br/></button>
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
            curso: { ...prevState.curso, [name]: value }
        }));
    };

    handleSubmit = event => {
        const { id } = this.state.curso;

        fetch(`http://localhost:3003/sistema/curso/${id}`, {
            method: "put",
            body: JSON.parse(this.state.curso),
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

export default EditarCurso;