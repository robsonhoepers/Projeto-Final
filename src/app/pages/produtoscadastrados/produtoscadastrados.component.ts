import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/interfaces/cadastroprodutos';
import { CadastroprodutosService } from 'src/app/services/cadastroprodutos.service';

@Component({
  selector: 'app-produtoscadastrados',
  templateUrl: './produtoscadastrados.component.html',
  styleUrls: ['./produtoscadastrados.component.css'],
})
export class ProdutoscadastradosComponent implements OnInit {

  produtos: Produto[] = [ {
    
    id: "",
    imagensSrc: "",  
    descricao: "",
    nomeProduto: "",
    valorProduto: "",
    quantidade: "",
    categoria: ""

  },
]

  displayedColumns = ['id', 'nomeProduto', 'valorProduto' , 'descricao', 'quantidade', 'imagensSrc', 'action']

  constructor( private cadastroprodutosService: CadastroprodutosService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.cadastroprodutosService.readProdutos().subscribe(produto => {
      this.produtos = produto
      console.log(produto); 
    })
  }

  
}
