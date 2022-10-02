import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/cadastroprodutos';
import { CadastroprodutosService } from 'src/app/services/cadastroprodutos.service';

@Component({
  selector: 'app-produtoscadastrados',
  templateUrl: './produtoscadastrados.component.html',
  styleUrls: ['./produtoscadastrados.component.css']
})
export class ProdutoscadastradosComponent implements OnInit {

  produtos: Produto[] = [ 

  ]


  constructor(private cadastroprodutosService: CadastroprodutosService ) {}


  ngOnInit(): void {
    this.cadastroprodutosService.getProdutos().subscribe(produto => {
      this.produtos = produto
      console.log(produto);
      
    })
  }

}
