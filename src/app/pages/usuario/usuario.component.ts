import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public signiOut(){
    localStorage['token'] = 'false'
    this.router.navigate(['/']);
  }

  /**
   * readLocalStorageToken
   */
  public readLocalStorageToken() {
    if (localStorage['token'] === 'true'){
      return true
    } else {
      return false
    }
    
  }
}


