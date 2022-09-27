import { Component, OnInit } from '@angular/core';
import { Kits } from 'src/app/interfaces/kits';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.css']
})
export class KitsComponent implements OnInit {

  kits: Kits[] = [ {
    
    codProd: "",
    imagensSrc: "",  
    descricao: "",
    nomeProduto: "",
    valorProduto: ""
},
]

constructor() { }

  ngOnInit(): void {

  }
}