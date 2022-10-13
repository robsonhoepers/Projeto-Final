import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../interfaces/cadastroprodutos';
import { Vodka } from '../interfaces/vodka';

@Injectable({
  providedIn: 'root'
})
export class VodkaService {

  port = "8080"
  url = "http://localhost:" + this.port + "/produtos"

httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

  constructor(private HttpClient: HttpClient) { }
  
  getVodka(categoria: string): Observable<Produto>{
    return this.HttpClient.get<Produto>(this.url + "/" + categoria)
  }
}
