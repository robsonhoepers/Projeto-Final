import { Component, OnInit } from '@angular/core';
import { Gin } from 'src/app/interfaces/gin';
import { GinService } from 'src/app/services/gin.service';

@Component({
  selector: 'app-gin',
  templateUrl: './gin.component.html',
  styleUrls: ['./gin.component.css']
})
export class GinComponent implements OnInit {

  gins: Gin[] = [ {
    
    codProd: "",
    imagensSrc: "",  
    descricao: "",
    nomeProduto: "",
    valorProduto: ""
},
]

constructor(private ginService: GinService) { }

  ngOnInit(): void {

    
    this.ginService.getGin().subscribe((gins) => {
      this.gins =gins;
      
   });
   
  }
}