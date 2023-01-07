import { Component, OnInit} from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  titulo:String='';
  titulodeproyecto:String='';
  Descripcionn:String='';
  linkpage:String='';
  Fechaderealizacionn:String=''

  constructor(private datos:DatosService){}
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data =>{
      this.titulo=data.Proyectos;
      this.titulodeproyecto=data.Nombrep;
      this.Descripcionn=data.Descripcion;
      this.linkpage=data.Link;
      this.Fechaderealizacionn=data.Fechaderealizacion

})
  }
}
