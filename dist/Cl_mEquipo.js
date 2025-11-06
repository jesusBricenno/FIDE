export default class Cl_mEquipo {
    _nombre = "";
    _pais = "";
    _cantParticipantes = 0;
    constructor({ nombre = "", pais = "", cantParticipantes = 0, }) {
        this.nombre = nombre;
        this.pais = pais;
        this.cantParticipantes = cantParticipantes;
    }
    set nombre(nombre) {
        this._nombre = nombre.trim().toUpperCase();
    }
    get nombre() {
        return this._nombre;
    }
    set pais(pais) {
        this._pais = pais.trim().toUpperCase();
    }
    get pais() {
        return this._pais;
    }
    set cantParticipantes(cantParticipantes) {
        this._cantParticipantes = +cantParticipantes;
    }
    get cantParticipantes() {
        return this._cantParticipantes;
    }
    toJSON() {
        return {
            nombre: this._nombre,
            pais: this._pais,
            cantParticipantes: this._cantParticipantes,
        };
    }
}
