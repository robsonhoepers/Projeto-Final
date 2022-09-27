import { Component, OnInit } from '@angular/core';
import { Cachaca } from 'src/app/interfaces/cachaca';
import { CachacaService } from 'src/app/services/cachaca.service';


@Component({
  selector: 'app-cachaca',
  templateUrl: './cachaca.component.html',
  styleUrls: ['./cachaca.component.css']
})

export class CachacaComponent  implements OnInit{
  
  cachacas: Cachaca [] = [ {
    
      codProd: "",
      imagensSrc: "",  
      descricao: "",
      nomeProduto: "",
      valorProduto: ""
  },

 
]



constructor(private cachacaService: CachacaService) { }

  ngOnInit(): void {

    
    this.cachacaService.getCachaca().subscribe((cachacas) => {
      this.cachacas = cachacas;
      console.log(cachacas);
      
      
   });
   
    console.log(this.cachacas);
  }

}
