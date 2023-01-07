import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../entidades/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url='http://localhost:8080/experiencia/'

  constructor(private httpclient:HttpClient) { }



  public list():Observable<Proyectos[]>{
    return this.httpclient.get<Proyectos[]>(this.url + 'lista');
  }
  public encontrarProyecto(id:number):Observable<Proyectos>{
    return this.httpclient.get<Proyectos>(this.url + `ver/${id}`);
  }
  public crearProyecto(proyectos:Proyectos):Observable<any>{
    return this.httpclient.post<any>(this.url + 'crear',proyectos)
  }
  public borrarProyecto(id:number):Observable<Proyectos>{
    return this.httpclient.delete<any>(this.url + `borrar/${id}`);
}
  public guardarProyecto(proyectos:Proyectos):Observable<any>{
    return this.httpclient.put<any>(this.url + 'guardar',proyectos)
  }

  
}
