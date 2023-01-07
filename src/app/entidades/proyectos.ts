export class Proyectos {
    id?:number;
    nombre:String;
    link:String;
    inicio:Date;
    fin:Date;
    descripcion:String;

    constructor(nombre:String, link: string,inicio:Date, fin:Date,descripcion:String) {
        this.nombre = nombre;
        this.link=link;
        this.descripcion=descripcion;
        this.inicio=inicio;
        this.fin=fin;
    }
}
