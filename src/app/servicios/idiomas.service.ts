import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idioma } from '../entidades/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {

  url='http://localhost:8080/experiencia/'

  constructor(private httpclient:HttpClient) { }



  public list():Observable<Idioma[]>{
    return this.httpclient.get<Idioma[]>(this.url + 'lista');
  }
  public encontrarIdioma(id:number):Observable<Idioma>{
    return this.httpclient.get<Idioma>(this.url + `ver/${id}`);
  }
  public crearIdioma(idio:Idioma):Observable<any>{
    return this.httpclient.post<any>(this.url + 'crear',idio)
  }
  public borrarIdioma(id:number):Observable<Idioma>{
    return this.httpclient.delete<any>(this.url + `borrar/${id}`);
}
  public guardarIdioma(idio:Idioma):Observable<any>{
    return this.httpclient.put<any>(this.url + 'guardar',idio)
  }
}
