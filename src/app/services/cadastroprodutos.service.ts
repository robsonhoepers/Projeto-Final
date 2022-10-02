import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../interfaces/cadastroprodutos';

@Injectable({
  providedIn: 'root'
})
export class CadastroprodutosService {

  cadastroServer = "http://localhost:3000/produto"

constructor(private http: HttpClient) { }


  showAlert(){

      alert('Produto Cadastrado!')
  }

  cadastrarProduto(cadastroprodutos: Produto): Observable<Produto>{
      return this.http.post<Produto>(this.cadastroServer, cadastroprodutos)
  }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.cadastroServer)
  }


  }
