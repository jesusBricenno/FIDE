import Cl_mEquipo, { iEquipo } from "./Cl_mEquipo.js";

export default class Cl_mFederacion {
    private equipos: Cl_mEquipo[] = [];
    
    agregarEquipo({equipo, callback}: {equipo: Cl_mEquipo, callback:( error: string| false) => void}):void {

    //Validar nombre de equipo repetido
    const nombreRepetido = this.equipos.find(
        (e) =>  e.nombre.toLowerCase() === equipo.nombre.toLowerCase()
    );

    if (nombreRepetido) {
        callback(`El equipo ${equipo.nombre} ya existe`);
        return;
    }

    const paisRepetido = this.equipos.find(
        (e) => e.pais.toLowerCase() === equipo.pais.toLowerCase()
    );

    if (paisRepetido){
        callback(`Ya existe un equipo que es de ${equipo.pais}`)
        return;
    }

    this.equipos.push(equipo);
    callback(false);
 }
 listar(): iEquipo[]{
    let equipos : iEquipo[] =[];
    this.equipos.forEach ((e)=> equipos.push(e.toJSON()));
    return equipos;
 }
}