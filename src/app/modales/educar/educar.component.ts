import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-educar',
  templateUrl: './educar.component.html',
  styleUrls: ['./educar.component.css']
})
export class EducarComponent implements OnInit {
  form: FormGroup;
  constructor(private formbuilder:FormBuilder){
    this.form=formbuilder.group({
      institucion:[""],
      ano:[""],
      
      titulo:[""],
      estado:[""]
    })
  }
  ngOnInit(): void {
    
  }

}
