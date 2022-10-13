import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/cadastroprodutos';
import { Kits } from 'src/app/interfaces/kits';
import { CadastroprodutosService } from 'src/app/services/cadastroprodutos.service';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.css']
})
export class KitsComponent implements OnInit {

  kits: Kits [] = []
constructor() { }

  ngOnInit(): void {  

   
     
  }
}