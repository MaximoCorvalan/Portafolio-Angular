import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../entidades/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExpeService {
  url='http://localhost:8080/experiencia/'

  constructor(private httpclient:HttpClient) { }

  public list():Observable<Experiencia[]>{
    return this.httpclient.get<Experiencia[]>(this.url + 'lista');
  }
  public encontrarExperiencia(id:number):Observable<Experiencia>{
    return this.httpclient.get<Experiencia>(this.url + `ver/${id}`);
  }
  public crearExperiencia(experiencia:Experiencia):Observable<any>{
    return this.httpclient.post<any>(this.url + 'crear',experiencia)
  }
  public borrarExperiencia(id:number):Observable<Experiencia>{
    return this.httpclient.delete<any>(this.url + `borrar/${id}`);
}
  public guardarExperiencia(experiencia:Experiencia):Observable<any>{
    return this.httpclient.put<any>(this.url + 'guardar',experiencia)
  }
  
}
