import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../interfaces/cadastroprodutos';
import { ProdutoForm } from '../interfaces/produtosForm';


@Injectable({
  providedIn: 'root'
})
export class CadastroprodutosService {

port = "8080"
url = "http://localhost:" + this.port + "/produtos"

httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

constructor(private httpClient: HttpClient) { }

  showAlert(){

      alert('Produto Cadastrado!')
  }
  showAlert2(){

    alert('Produto Deletado!')
    
}
showAlert3(){

  alert('Produto Alterado!')
  
}

  createProduto(cadastroprodutos: ProdutoForm): Observable<Produto>{
      return this.httpClient.post<Produto>(this.url, JSON.stringify(cadastroprodutos), this.httpOptions)
  }

  readProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.url)
  }

  readById(id: string | null): Observable<Produto>{
    return this.httpClient.get<Produto>(this.url + "/" + id)
  }

  update(produto: Produto): Observable<Produto>{
  
    return this.httpClient.put<Produto>(this.url + "/" + produto.id, JSON.stringify(produto), this.httpOptions)
  }

  delete(id: string | null): Observable<Produto>{
    
    return this.httpClient.delete<Produto>(this.url + "/" + id, this.httpOptions)
  }

  }
