import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cerveja } from '../interfaces/cerveja';

@Injectable({
  providedIn: 'root'
})
export class CervejaService {

  constructor(private http: HttpClient) { }
  //chama o usuário no db.jSon
  getCerveja(): Observable<Cerveja[]> {
    return this.http.get<Cerveja[]>("http://localhost:3000/cerveja")
  }
}

