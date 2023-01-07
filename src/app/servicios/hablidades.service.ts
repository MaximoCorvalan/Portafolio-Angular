import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../entidades/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HablidadesService {

  url='http://localhost:8080/experiencia/'

  constructor(private httpclient:HttpClient) { }

  public list():Observable<Habilidad[]>{
    return this.httpclient.get<Habilidad[]>(this.url + 'lista');
  }
  public encontrarExperiencia(id:number):Observable<Habilidad>{
    return this.httpclient.get<Habilidad>(this.url + `ver/${id}`);
  }
  public crearExperiencia(habi:Habilidad):Observable<any>{
    return this.httpclient.post<any>(this.url + 'crear',habi)
  }
  public borrarExperiencia(id:number):Observable<Habilidad>{
    return this.httpclient.delete<any>(this.url + `borrar/${id}`);
}
  public guardarExperiencia(habi:Habilidad):Observable<any>{
    return this.httpclient.put<any>(this.url + 'guardar',habi)
  }
  
}
