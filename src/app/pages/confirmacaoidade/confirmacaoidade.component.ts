import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacaoidade',
  templateUrl: './confirmacaoidade.component.html',
  styleUrls: ['./confirmacaoidade.component.css']
})
export class ConfirmacaoidadeComponent {

  constructor(private router: Router) { }

  public login(){
    localStorage['token'] = 'true';
    this.router.navigate(['/']);
  }

}
