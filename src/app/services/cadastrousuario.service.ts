import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {
  value(value: any) {
    throw new Error('Method not implemented.');
  }

  cadastroServer = "http://localhost:3001/usuario"

  constructor(private http: HttpClient) { }

  usuarios: Array<Usuario> = new Array<Usuario>();
  showAlert(){
    alert('Usuário Cadastrado!')
  }

  cadastrarUsuario(usuario: Usuario): Observable<Usuario>{
    usuario.codUsuario = '1';
    this.usuarios.concat(usuario);
      return this.http.post<Usuario>(this.cadastroServer, usuario)
  }

  salvar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.cadastroServer, usuario)
  }

  getUsuario(id: String) {
    return this.usuarios.find(user => user.codUsuario == id);
  }

  }
