/*
La Federación Internacional de Ajedrez (FIDE), a través de su Comité Organizador, requiere un sistema para registrar
de manera eficiente los equipos que participarán en la próxima edición de su torneo internacional.

Para cada equipo que se inscriba, es imprescindible registrar la siguiente información:
Nombre del Equipo: Identificación oficial del equipo.
País de Origen: La nación que representa el equipo.
Número de Participantes: La cantidad total de jugadores inscritos en ese equipo.
*/
import Cl_controlador from "./Cl_controlador.js";
import Cl_mFederacion from "./Cl_mFederacion.js";
import Cl_vFederacion from "./Cl_vFederacion.js";
export default class Cl_index {
    modelo;
    vista;
    constructor() {
        this.modelo = new Cl_mFederacion();
        this.vista = new Cl_vFederacion();
        let controlador = new Cl_controlador(this.modelo, this.vista);
        this.vista.controlador = controlador;
        this.vista.refresh();
    }
}
