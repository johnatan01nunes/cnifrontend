import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import ListSubheader from '@mui/material/ListSubheader';
//import { Link } from "react-router-dom";
//import Routes from '../../../src/routes';
import './home.css';


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <img id="icone" src="http://localhost:3000/professor.svg" alt="professor"/>
      </ListItemIcon>
      <a class="link-menu" href="http://localhost:3000/professor">
      <ListItemText primary="Professor" />
      </a>
    </ListItem>
    <ListItem button componet="a" href="/aluno">
      <ListItemIcon>
      <img id="icone" src="http://localhost:3000/aluno.svg" alt="aluno"/>
      </ListItemIcon>
      <a class="link-menu" href="http://localhost:3000/aluno">
      <ListItemText primary="Aluno" />
      </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <img id="icone" src="http://localhost:3000/curso.svg" alt="curso"/>
      </ListItemIcon>
      <a class="link-menu" href="http://localhost:3000/curso">
      <ListItemText primary="Curso" />
      </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <img id="icone" src="http://localhost:3000/turma.svg" alt="turma"/>
      </ListItemIcon>
      <a class="link-menu" href="http://localhost:3000/turma">
      <ListItemText primary="Turma" />
      </a>
    </ListItem>
    
  </div>
);
/*
export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);*/
