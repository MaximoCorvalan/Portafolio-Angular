export class Persona {
    id?:number;
    nombre:String;
    apellido:String;
    email:String;
    contrasena:String;
    acercade:String;

    constructor(contrasena:String, nombre:String, apellido:String, email:String,acercade:String){
        this.acercade=acercade;
        this.apellido=apellido;
        this.contrasena=contrasena;
        this.email=email;
        this.nombre=nombre;
    }
    
}
