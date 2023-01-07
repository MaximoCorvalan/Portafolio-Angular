export class Educacion {
    id?:number;
    titulo:String;
    ano:String;
    estado:String;
    nombredelinstituto:string;

    constructor(titulo:String, ano:string, estado:string, nombredelinstituto:string){
        this.ano=ano;
        this.estado=estado;
        this.nombredelinstituto=nombredelinstituto;
        this.titulo=titulo;

    }

}
