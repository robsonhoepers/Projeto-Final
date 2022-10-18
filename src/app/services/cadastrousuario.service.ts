import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  port = "8080"
  url = "http://localhost:" + this.port + "/usuarios"

  httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

  constructor(private httpClient: HttpClient) { }

  showAlert(){
    alert('Usuário Cadastrado!')
  }

  cadastrarUsuario(usuario: Usuario): Observable<Usuario>{
      return this.httpClient.post<Usuario>(this.url, JSON.stringify(usuario), this.httpOptions)
  }

  update(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.put<Usuario>(this.url + "/" + usuario.userId, JSON.stringify(usuario), this.httpOptions)
  }

  readById(userId: String) {
    return this.httpClient.get<Usuario>(this.url + "/" + userId)
  }

  delete(userId: string): Observable<Usuario>{    
    return this.httpClient.delete<Usuario>(this.url + "/" + userId, this.httpOptions)
  }

  }
