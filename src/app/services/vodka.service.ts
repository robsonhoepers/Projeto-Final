import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vodka } from '../interfaces/vodka';

@Injectable({
  providedIn: 'root'
})
export class VodkaService {

  constructor(private http: HttpClient) { }
  //chama o vodka no db.jSon
  getVodka(): Observable<Vodka[]> {
    return this.http.get<Vodka[]>("http://localhost:3000/vodka")
  }
}
