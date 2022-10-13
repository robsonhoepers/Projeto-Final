import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../interfaces/cadastroprodutos';
import { Gin } from '../interfaces/gin';

@Injectable({
  providedIn: 'root'
})
export class GinService {

  port = "8080"
  url = "http://localhost:" + this.port + "/produtos"

httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

  constructor(private HttpClient: HttpClient) { }
  
  getGin(categoria: string): Observable<Produto>{
    return this.HttpClient.get<Produto>(this.url + "/" + categoria)
  }
  
}
