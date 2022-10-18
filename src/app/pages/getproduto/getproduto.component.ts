import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-getproduto',
  templateUrl: './getproduto.component.html',
  styleUrls: ['./getproduto.component.css']
})
export class GetprodutoComponent implements OnInit {

  @Input() src: string = "";
  @Input() nomeProduto: string = "";
  @Input() valorProduto: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
