import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainAluno from './pages/aluno/main';
import DetalhesAluno from './pages/aluno/detalhes';
import CriarAluno from './pages/aluno/criar';
import EditarAluno from './pages/aluno/editar';
import DeletarAluno from './pages/aluno/deletar';

import MainProfessor from './pages/professor/main';
import DetalhesProfessor from './pages/professor/detalhes';
import CriarProfessor from './pages/professor/criar';
import EditarProfessor from './pages/professor/editar';
import DeletarProfessor from './pages/professor/deletar';

import MainCurso from './pages/curso/main';
import DetalhesCurso from './pages/curso/detalhes';
import CriarCurso from './pages/curso/criar';
import EditarCurso from './pages/curso/editar';
import DeletarCurso from './pages/curso/deletar';

import MainTurma from './pages/turma/main';
import DetalhesTurma from './pages/turma/detalhes';
import CriarTurma from './pages/turma/criar';
import EditarTurma from './pages/turma/editar';
import DeletarTurma from './pages/turma/deletar';



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path ="/aluno" component = {MainAluno}/>
            <Route path ="/aluno/:id" component = {DetalhesAluno}/>
            <Route path ="/criarAluno/" component = {CriarAluno}/>
            <Route path ="/editarAluno/:id" component = {EditarAluno}/>
            <Route path ="/deletarAluno/:id" component = {DeletarAluno}/>

            <Route exact path ="/professor" component = {MainProfessor}/>
            <Route path ="/professor/:id" component = {DetalhesProfessor}/>
            <Route path ="/criarProfessor/" component = {CriarProfessor}/>
            <Route path ="/editarProfessor/:id" component = {EditarProfessor}/>
            <Route path ="/deletarProfessor/:id" component = {DeletarProfessor}/>

            <Route exact path ="/curso" component = {MainCurso}/>
            <Route path ="/curso/:id" component = {DetalhesCurso}/>
            <Route path ="/criarCurso/" component = {CriarCurso}/>
            <Route path ="/editarCurso/:id" component = {EditarCurso}/>
            <Route path ="/deletarCurso/:id" component = {DeletarCurso}/>

            <Route exact path ="/turma" component = {MainTurma}/>
            <Route path ="/turma/:id" component = {DetalhesTurma}/>
            <Route path ="/criarTurma/" component = {CriarTurma}/>
            <Route path ="/editarTurma/:id" component = {EditarTurma}/>
            <Route path ="/deletarTurma/:id" component = {DeletarTurma}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;