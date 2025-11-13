export default class Cl_mFederacion {
    equipos = [];
    agregarEquipo({ equipo, callback }) {
        //Validar nombre de equipo repetido
        const nombreRepetido = this.equipos.find((e) => e.nombre.toLowerCase() === equipo.nombre.toLowerCase());
        if (nombreRepetido) {
            callback(`El equipo ${equipo.nombre} ya existe`);
            return;
        }
        const paisRepetido = this.equipos.find((e) => e.pais.toLowerCase() === equipo.pais.toLowerCase());
        if (paisRepetido) {
            callback(`Ya existe un equipo que es de ${equipo.pais}`);
            return;
        }
        this.equipos.push(equipo);
        localStorage.setItem("equipos", JSON.stringify(this.listar()));
        callback(false);
    }
    listar() {
        let equipos = [];
        this.equipos.forEach((e) => equipos.push(e.toJSON()));
        return equipos;
    }
}
