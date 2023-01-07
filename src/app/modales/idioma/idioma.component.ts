import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {
  form: FormGroup;
  constructor(private  formBuilder: FormBuilder){
    this.form= this.formBuilder.group({
      idioma:[""],
      nivel:[""]

    })
  }
ngOnInit(): void {
  
}
}
