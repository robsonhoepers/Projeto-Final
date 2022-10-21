import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  port = "8080"
  url = "http://localhost:" + this.port + "/usuarios"

httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

  constructor(private HttpClient: HttpClient) { }

  readById(userId: string) {
    console.log(userId);
    return this.HttpClient.get<Usuario>(this.url + "/" + userId)
  }
  }
