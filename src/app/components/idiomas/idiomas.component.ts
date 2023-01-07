import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit{
  idioma:string=''
  idioma1:string=''
  idioma2:string=''

 
  constructor(private datos:DatosService){}
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data =>{
    this.idioma = data.idiomas;
    this.idioma1 = data.ingles;
    this.idioma2 = data.Español;
    

    })

}

}
