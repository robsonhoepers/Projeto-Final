import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  port = "8080"
  url = "http://localhost:" + this.port + "/usuarios"

httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

  constructor(private HttpClient: HttpClient) { }
  
  getUsuarios(): Observable<Usuario>{
   
    return this.HttpClient.get<Usuario>(this.url)
  }

}