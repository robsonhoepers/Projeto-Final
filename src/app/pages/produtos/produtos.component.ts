import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/cadastroprodutos';
import { CadastroprodutosService } from 'src/app/services/cadastroprodutos.service';

import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})


export class ProdutosComponent implements OnInit {

  produto!: Produto;

  @Input() src: string = "";
  @Input() nomeProduto: string = "";
  @Input() valorProduto: string = "";


  constructor(private produtoService: ProdutoService, 
              private router: Router, 
              private route: ActivatedRoute,
              private cadastroprodutosService: CadastroprodutosService) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')
    console.log("logId" + id);   
     this.produtoService.readById(id).subscribe(produto =>{
       this.produto = produto
       console.log(produto);
       
      })
  }

}
