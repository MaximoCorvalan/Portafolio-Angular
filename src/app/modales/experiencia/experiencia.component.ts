import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  form:FormGroup;
  constructor(private formbuilder:FormBuilder){
    this.form=this.formbuilder.group({
      lugar:[""],
      puesto:[""],
      descripcion:[""],
      inicio:[""],
      fin:[""]
    })
  }
  ngOnInit(): void {
    
  }
 
 }
