export class Usuario {
    public id: number;
    public username: string;
    public password: string;
    public nombre: string;
    public email: string;
    public estado: string;
    public grupo: Grupo;
    constructor() {
        this.id = null;
        this.username = '';
        this.password = '';
        this.nombre = '';
        this.email = '';
        this.estado = '';
        this.grupo = new Grupo();
     }

}

export class Grupo {
    public id: number;
    public nombre: string;
    constructor() {
        this.id = null;
        this.nombre = '';
    }
}
