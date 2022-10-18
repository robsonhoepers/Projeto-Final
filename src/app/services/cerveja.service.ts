import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cerveja } from '../interfaces/cerveja';

@Injectable({
  providedIn: 'root'
})
export class CervejaService {
 
  port = "8080"
  url = "http://localhost:" + this.port + "/produtos"

httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

  constructor(private HttpClient: HttpClient) { }
  
  getCerveja(categoria: string): Observable<Cerveja[]>{
    return this.HttpClient.get<Cerveja[]>(this.url + "?categoria=" + categoria)
       
  }
  
}

