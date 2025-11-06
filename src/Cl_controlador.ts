import Cl_vFederacion from "./Cl_vFederacion.js";
import Cl_mEquipo, { iEquipo } from "./Cl_mEquipo.js";
import Cl_mFederacion from "./Cl_mFederacion.js";

export default class Cl_controlador {
    private modelo: Cl_mFederacion;
    private vista: Cl_vFederacion
    constructor(modelo: Cl_mFederacion, vista: Cl_vFederacion){
        this.modelo = modelo;
        this.vista = vista;
    }

    agregarEquipo({equipoData, callback}: {equipoData: iEquipo, callback: Function}): void {
        this.modelo.agregarEquipo({
            equipo: new Cl_mEquipo(equipoData),
            callback: (error: string | false) => {
                callback(error);
            },
        })
    }
    equiposRegistrados(): iEquipo[]{
        return this.modelo.listar();
    }
} 