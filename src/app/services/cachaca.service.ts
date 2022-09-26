import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cachaca } from '../interfaces/cachaca';

@Injectable({
  providedIn: 'root'
})
export class CachacaService {
  [x: string]: any;
  
  constructor(private http: HttpClient) { }
  //chama o usuário no db.jSon
  getUsuario(): Observable<Cachaca[]> {
    return this.http.get<Cachaca[]>("http://localhost:3000/cachaca")
  }
}