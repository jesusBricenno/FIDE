import { iEquipo } from "./Cl_mEquipo.js";
import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";

export default class Cl_vFederacion extends Cl_vGeneral{
    private btAgregarEquipo: HTMLButtonElement;
    private divEquiposRegistrados: HTMLElement;

    constructor(){
        super({formName: "torneo"});
        this.btAgregarEquipo = this.crearHTMLButtonElement("btAgregarEquipo", {
            onclick: () => this.agregarEquipo(),
        });

        this.divEquiposRegistrados = this.crearHTMLElement("divAgregarEquipo",{
            type: tHTMLElement.CONTAINER,
            refresh: () => this.mostrarEquipos(),
        }) as HTMLElement;
    }

    mostrarEquipos(){
        this.divEquiposRegistrados.innerHTML = "";
        let equipos = this.controlador?.equiposRegistrados();
        if (!equipos) return;
        equipos.forEach((equipo: iEquipo) => {
            this.divEquiposRegistrados.innerHTML += `<tr>
            <td>${equipo.nombre}</td>
            <td>${equipo.pais}</td>
            <td>${equipo.cantParticipantes}</td>
            </tr>`;
        });
    }

    agregarEquipo(){
        let nombre = prompt ("Ingrese el nombre del equipo:");
        if (!nombre) return;
        let pais = prompt ("Ingrese el pais:");
        if(!pais) return;
        let cantParticipantes = prompt ("Ingrese la cantidad de participantes del equipo:");
        if(!cantParticipantes) return;
        this.controlador!.agregarEquipo({
            equipoData:{
                nombre: nombre,
                pais: pais,
                cantParticipantes: +cantParticipantes,
            },

            callback: (error:string | false) => {
                if (error) alert(error);
                this.refresh();

            }
        })
    }
}