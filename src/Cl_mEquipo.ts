export interface iEquipo {
    nombre: string,
    pais: string,
    cantParticipantes: number,
}
export default class Cl_mEquipo {
    private _nombre: string = "";
    private _pais: string = "";
    private _cantParticipantes: number = 0;
    constructor ({
    nombre = "",
    pais = "",
    cantParticipantes = 0,
}: {
    nombre: string;
    pais: string;
    cantParticipantes: number;
}) {
    this.nombre = nombre;
    this.pais = pais;
    this.cantParticipantes = cantParticipantes;
}

    set nombre (nombre: string) {
        this._nombre = nombre.trim().toUpperCase();
    }
    
    get nombre(): string {
        return this._nombre;
    }

    set pais (pais: string){
        this._pais = pais.trim().toUpperCase();
    }

    get pais(): string {
        return this._pais;
    }

    set cantParticipantes(cantParticipantes: number){
        this._cantParticipantes = +cantParticipantes;
    }
    
    get cantParticipantes(): number {
        return this._cantParticipantes;
    }

    toJSON(): iEquipo {
        return {
            nombre: this._nombre,
            pais: this._pais,
            cantParticipantes: this._cantParticipantes,
        };
    }
}