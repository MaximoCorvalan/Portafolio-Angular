import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-fomacion',
  templateUrl: './fomacion.component.html',
  styleUrls: ['./fomacion.component.css']
})
export class FomacionComponent  implements OnInit{
  educacionn:any=[]
  medicina:any=[]
  constructor(private datos:DatosService){}
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data =>{
      this.educacionn = data.Educacion;
      this.medicina=data.cicloBasicoComunMedicina;
    })

}
}
