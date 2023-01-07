import { Component,OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent  implements OnInit { 
  ExperienciasLaboraless: any = []; 
  constructor(private datos:DatosService){}
  ngOnInit(): void {
  this.datos.getDatos().subscribe(data =>{
    this.ExperienciasLaboraless = data.ExperienciasLaborales;
  })
    
  }

}
