import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder){
 this.form= this.formBuilder.group({
  password:['',[Validators.required, Validators.minLength(8)]],
   email:['', [Validators.required, Validators.email]] 
   
 })
  }
 ngOnInit() {}
//metodos formularios toma datos
 get password(){
  return this.form.get("password");
}

get email(){
 return this.form.get("email");
}

get passwordInvalid(){
  return this.password?.touched && !this.password?.valid;
}

get emailInvalid() {
  return this.email?.touched && !this.email?.valid;
}


 onEnviar(event: Event){
  event.preventDefault;
  if(this.form.valid){

  }else{
    this.form.markAllAsTouched();
  }
}}
 

 
   


 