import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../interfaces/cadastroprodutos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  port = "8080"
  url = "http://localhost:" + this.port + "/produtos"

httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}
  

  constructor(private httpClient: HttpClient) { }

  readById(id: string | null): Observable<Produto>{
    return this.httpClient.get<Produto>(this.url + "/" + id)
  }

}
