import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent  implements OnInit{
  progress:string=''
  progress2:string=''
  progress3:string=''
  progress4:string=''
  skill:string=''

  constructor(private datos:DatosService){}
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data =>{
      this.progress = data.progressbarJS;
      this.progress2 = data.progressbarCSS;
      this.progress3 = data.progressbarHTML;
      this.progress4 = data.progressbarTYPE;
      this.skill=data.skills;
      
     
    })
  
  }
}
