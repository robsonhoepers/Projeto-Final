import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../interfaces/endereco';

@Injectable({
  providedIn: 'root'
})


export class CadastroendService {

  port = "8080"
  url = "http://localhost:" + this.port + "/enderecos"

  httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

  constructor(private httpClient: HttpClient) { }
  
    cadastroEnd(endereco: Endereco): Observable<Endereco>{
      return this.httpClient.post<Endereco>(this.url, JSON.stringify(endereco), this.httpOptions)
  }
    
  }

