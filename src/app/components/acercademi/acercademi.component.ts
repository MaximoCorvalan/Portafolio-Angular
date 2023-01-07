import { Component,OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
  
  Acercademii:string=''

  constructor(private datos:DatosService){}
  ngOnInit(): void {
  this.datos.getDatos().subscribe(data =>{
    this.Acercademii = data.Acercademi;
  })
    
  }

}
