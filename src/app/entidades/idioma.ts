export class Idioma {
    id?:number;
    idiom:String;
    level:String;

    constructor(idiom:String, level:String){
        this.idiom=idiom;
        this.level=level;
    }
}
