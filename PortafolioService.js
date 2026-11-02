import { Proyecto } from "./Proyecto.js";
import { SuperProyecto } from "./SuperProyecto.js";

class PortafolioService {
    constructor(proyectos) {
        this.proyectos = proyectos;
    }

    getProyectos() {
        console.log('----- PROYECTOS GUARDADOS ACTUALMENTE -----');
        
        console.log(this.proyectos);
        // return `${this.proyectos}\n`
    }

    guardarProyecto(proyecto) {
        if (proyecto instanceof Proyecto) {
            this.proyectos.push(proyecto);
            console.log(`\nProyecto agregado correctamente ---> `, proyecto);
            
        }else {
            console.log(`No es un tipo de proyecto aceptable, reviselo nuevamente: ---> `, proyecto);
            
        }
    }

    eliminarProyecto(id) {
        let index = this.proyectos.findIndex(p => p.id === id);

        if (index !== -1) {
            console.log('\nProyecto eliminado correctamente: --->', this.proyectos[index]);
            this.proyectos.splice(index, 1);
            
        } else {
            return `Error: No se encontro un elemento con ese id :${id}`;
        }
    }

    actualizarProyecto(id, proyecto) {
        let index = this.proyectos.findIndex(p => p.id === id);

        if (index !== -1) {
            this.proyectos.splice(index, 1, proyecto);
            return `Se ha reemplazado correctamente el proyecto!`
        } else {
            return `Error: No se encontro un elemento con ese id :${id}, no se puede reemplazar`;
        }

    }

    superActualizarProyecto(id, superProyecto) {
        let index = this.proyectos.findIndex(p => p.id === id);

        if (index !== -1) {
            let proyectoAct = {
                ...this.proyectos[index],
                ... superProyecto
            };

            this.proyectos[index] = proyectoAct;
            
            return `Proyecto actualizado completamente, nuevo super proyecto: ${this.proyectos[index]}`;
        } else {
            return `Error: No se encontro un elemento con ese id :${id}, no se puede super actualizar`;
        }
    }

}

export {PortafolioService};