import { Proyecto } from "./Proyecto.js";
import { SuperProyecto } from "./SuperProyecto.js";
import { PortafolioService } from "./PortafolioService.js";

let proyecto1 = new Proyecto(
    1,
    'Free fire', 
    ['Css', 'Java', 'Html'],
    'Un juego todo pirata de pium pium',
    ['Juanitopro345', 'ErikInsanidiProPruPlayer'],
    'insanidi.github.com.uwi'
);

let proyecto2 = new Proyecto(
    2,
    'Cod', 
    ['Css', 'Javascript', 'php'],
    'El besto shonen de todos los juegos lol XD',
    ['Merlina adams :O', 'Vegetta777'],
    'Codisiositogame.github.com.uwi'
)

let superProyecto1 = new SuperProyecto(
    '04-12-2006',
    'freefire.net.com',
    '642853634',
    ['diagramaDeFlujo.com', 'fokinDiagramaDeSecuencias.net']
);

let superProyecto2 = new SuperProyecto(
    '23-12-2007',
    'freefire.net.com',
    '642853634',
    ['diagramaDeFlujo.com', 'fokinDiagramaDeSecuencias.net']
);

let proyectosPros = [proyecto1, proyecto2];

const portafolio = new PortafolioService(proyectosPros);

// portafolio.getProyectos();
// Prueba 1 Successful👌


let proyecto3 = new Proyecto(
    3,
    'BloodStrike', 
    ['Css', 'Javascript', 'php'],
    'Buen juego, gud gud la verlda',
    ['Emma myers grrr', 'aquino', 'locochon'],
    'Te extrañaremos komanche, vuela alto :('
)

portafolio.guardarProyecto(proyecto3);
// portafolio.getProyectos();
// Prueba 2 Successful 👌

portafolio.eliminarProyecto(2);
// portafolio.getProyectos();
// Prueba 3 Successful 👌

let proyecto1ACT = new Proyecto(
    1,
    'Lol', 
    ['Css', 'Java', 'Html', 'TypeScript'],
    'Ou yeah, me encanta jinx',
    ['Juanitopro345', 'ErikInsanidiProPruPlayer'],
    'insanidi.lol.github.com.uwi'
);

portafolio.actualizarProyecto(1, proyecto1ACT);
// portafolio.getProyectos();
// Prueba 4 Successful👌

portafolio.superActualizarProyecto(1, superProyecto1);
portafolio.superActualizarProyecto(3, superProyecto2);
portafolio.getProyectos();
// Prueba 5 Successful 👌