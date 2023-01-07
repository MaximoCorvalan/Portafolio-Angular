export class Experiencia {
    id?:number;
    nombre: String;
    puesto: String;
    descripcion:String;
    incio:String;
    fin:String;
    
    constructor(nombre:String, puesto:String, descripcion:String, inicio:String, fin:String){
        this.nombre=nombre;
        this.descripcion=descripcion
        this.puesto=puesto;
        this.fin=fin;
        this.incio=inicio;

    }
    

}
