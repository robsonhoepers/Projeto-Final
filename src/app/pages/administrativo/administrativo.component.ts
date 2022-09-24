import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.css']
})
export class AdministrativoComponent implements OnInit {

  constructor(private router: Router){}


  ngOnInit(): void {
    
  }

  public signiOut(){
    localStorage['token'] = 'false'
    this.router.navigate(['/login']);
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
