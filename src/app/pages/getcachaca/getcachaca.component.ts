import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Cachaca } from 'src/app/interfaces/cachaca';
import { CachacaService } from 'src/app/services/cachaca.service';

@Component({
  selector: 'app-getcachaca',
  templateUrl: './getcachaca.component.html',
  styleUrls: ['./getcachaca.component.css']
})
export class GetcachacaComponent {



  cachacas: Cachaca = {

        codProd: "", 
        imagens: "", 
        descricao: "",
        nomeProduto: ""
    }
 
  

  constructor(private cachacaService: CachacaService, private router: Router) {

   }
  

  public cachaca() {

    this.cachacaService.getUsuario().subscribe((cachacas) => {
      this.cachacas = cachacas[0];
      
   });
  }
}