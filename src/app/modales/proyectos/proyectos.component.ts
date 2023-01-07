import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  form:FormGroup;
constructor (private formBuilder: FormBuilder){
  this.form=this.formBuilder.group({
    nuevonombre:[""],
    nuevadescripcion:[""],
    nuevoLink:[""],
    inicio:[''],
    fin:['']
  })
}
ngOnInit(): void {
  
}

}
