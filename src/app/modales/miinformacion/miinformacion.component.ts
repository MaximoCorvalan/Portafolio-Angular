import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-miinformacion',
  templateUrl: './miinformacion.component.html',
  styleUrls: ['./miinformacion.component.css']
})
export class MiinformacionComponent implements OnInit{
  form:FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.form=this.formBuilder.group({

      acercademi:[""]
    }
    )
  }
  ngOnInit() {}
  //metodos formularios toma datos
   get acercademi(){
    return this.form.get("acercademi");
  }
 
 
}

