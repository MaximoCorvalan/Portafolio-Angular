import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url='http://localhost:8080/experiencia/'

  constructor(private httpclient:HttpClient) { }



  public list():Observable<Persona[]>{
    return this.httpclient.get<Persona[]>(this.url + 'lista');
  }
  public encontrarPersona(id:number):Observable<Persona>{
    return this.httpclient.get<Persona>(this.url + `ver/${id}`);
  }
  public crearPersona(persona:Persona):Observable<any>{
    return this.httpclient.post<any>(this.url + 'crear',persona)
  }
  public borrarPersona(id:number):Observable<Persona>{
    return this.httpclient.delete<any>(this.url + `borrar/${id}`);
}
  public guardarPersona(persona:Persona):Observable<any>{
    return this.httpclient.put<any>(this.url + 'guardar',persona)
  }
}
