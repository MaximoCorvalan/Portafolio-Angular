import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  ig:string=''
  gmail:string=''
  wsp:string=''
  Ap:string=''

  constructor(private datos:DatosService){}
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data =>{
      this.ig=data.logoig;
      this.gmail=data.logogmail;
      this.wsp=data.logoWsp;
      this.Ap=data.ArgAp

})
  }
}
