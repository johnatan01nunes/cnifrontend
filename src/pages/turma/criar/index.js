import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './index.css';

class CriarTurma extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cursturma: {
                nome: "",
                carga_hr: "",
                professor_id: "",
                aluno_id: "",
                curso_id: "",
                num_sala: "",
                dt_ini: "",
                dt_fim: ""
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

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/turma" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Editar Turma</legend>
                        <div className="turma-insert">
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
                                value={this.state.turma.nome}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="turma-insert">
                            <label htmlFor="carga_hr">Carga Horaria </label>
                            <br />
                            <input
                                type="text"
                                id="carga_hr"
                                name="carga_hr"
                                placeholder="carga_hr"
                                min="6"
                                max="99999"
                                required
                                value={this.state.turma.carga_hr}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="turma-insert">
                            <label htmlFor="professor_id">Cod Professor </label>
                            <br />
                            <input
                                type="text"
                                id="professor_id"
                                name="professor_id"
                                placeholder="professor_id"
                                min="6"
                                max="99999"
                                required
                                value={this.state.turma.professor_id}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="turma-insert">
                            <label htmlFor="aluno_id">Cod Aluno </label>
                            <br />
                            <input
                                type="text"
                                id="aluno_id"
                                name="aluno_id"
                                placeholder="aluno_id"
                                min="6"
                                max="99999"
                                required
                                value={this.state.turma.aluno_id}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="turma-insert">
                            <label htmlFor="curso_id">Cod Curso </label>
                            <br />
                            <input
                                type="text"
                                id="curso_id"
                                name="curso_id"
                                placeholder="curso_id"
                                min="6"
                                max="99999"
                                required
                                value={this.state.turma.curso_id}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="turma-insert">
                            <label htmlFor="num_sala">nº Sala </label>
                            <br />
                            <input
                                type="text"
                                id="num_sala"
                                name="num_sala"
                                placeholder="num_sala"
                                min="6"
                                max="99999"
                                required
                                value={this.state.turma.num_sala}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="turma-insert">
                            <label htmlFor="dt_ini">Data Inicio </label>
                            <br />
                            <input
                                type="date"
                                id="dt_ini"
                                name="dt_ini"
                                placeholder="dt_ini"
                                required
                                value={this.state.turma.dt_ini}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="turma-insert">
                            <label htmlFor="dt_fim">Data Fim</label>
                            <br />
                            <input
                                type="date"
                                id="dt_fim"
                                name="dt_fim"
                                placeholder="dt_fim"
                                required
                                value={this.state.turma.dt_fim}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Cadastrar
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
            turma: { ...prevState.turma, [name]: value }
        }));
        console.log(value);
    };

    handleSubmit = event => {
        fetch("http://localhost:3003/sistema/turma", {
            method: "post",
            body: JSON.stringify(this.state.curso),
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

export default CriarTurma;