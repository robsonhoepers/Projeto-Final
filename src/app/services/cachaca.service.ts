import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cachaca } from '../interfaces/cachaca';


@Injectable({
  providedIn: 'root'
})
export class CachacaService {
 
  port = "8080"
  url = "http://localhost:" + this.port + "/produtos"

httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

  constructor(private HttpClient: HttpClient) { }
  
  getCachaca(categoria: string): Observable<Cachaca>{
    return this.HttpClient.get<Cachaca>(this.url + "/" + categoria)
  }
}