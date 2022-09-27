import { Component, OnInit } from '@angular/core';
import { Vodka } from 'src/app/interfaces/vodka';
import { VodkaService } from 'src/app/services/vodka.service';

@Component({
  selector: 'app-vodka',
  templateUrl: './vodka.component.html',
  styleUrls: ['./vodka.component.css']
})
export class VodkaComponent implements OnInit {

  vodkas: Vodka[] = [ {
    
    codProd: "",
    imagensSrc: "",  
    descricao: "",
    nomeProduto: "",
    valorProduto: ""
},
]

constructor(private vodkaService: VodkaService) { }

  ngOnInit(): void {

    
    this.vodkaService.getVodka().subscribe((vodkas) => {
      this.vodkas = vodkas;
      
   });
   
  }
}
