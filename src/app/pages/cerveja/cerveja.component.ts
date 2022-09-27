import { Component, OnInit } from '@angular/core';
import { Cerveja } from 'src/app/interfaces/cerveja';
import { CervejaService } from 'src/app/services/cerveja.service';

@Component({
  selector: 'app-cerveja',
  templateUrl: './cerveja.component.html',
  styleUrls: ['./cerveja.component.css']
})
export class CervejaComponent implements OnInit {

 cervejas: Cerveja [] = [ {
    
    codProd: "",
    imagensSrc: "",  
    descricao: "",
    nomeProduto: "",
    valorProduto: ""
},
]

constructor(private cervejaService: CervejaService) { }

  ngOnInit(): void {

    
    this.cervejaService.getCerveja().subscribe((cervejas) => {
      this.cervejas =cervejas;
      
   });
   
  }
}