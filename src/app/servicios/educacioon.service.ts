import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../entidades/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacioonService {

  url='http://localhost:8080/experiencia/'

  constructor(private httpclient:HttpClient) { }

  public list():Observable<Educacion[]>{
    return this.httpclient.get<Educacion[]>(this.url + 'lista');
  }
  public encontrarExperiencia(id:number):Observable<Educacion>{
    return this.httpclient.get<Educacion>(this.url + `ver/${id}`);
  }
  public crearExperiencia(edu:Educacion):Observable<any>{
    return this.httpclient.post<any>(this.url + 'crear',edu)
  }
  public borrarExperiencia(id:number):Observable<Educacion>{
    return this.httpclient.delete<any>(this.url + `borrar/${id}`);
}
  public guardarExperiencia(edu:Educacion):Observable<any>{
    return this.httpclient.put<any>(this.url + 'guardar',edu)
  }
  
}
