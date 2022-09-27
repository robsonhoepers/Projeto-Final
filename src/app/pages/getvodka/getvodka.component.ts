import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-getvodka',
  templateUrl: './getvodka.component.html',
  styleUrls: ['./getvodka.component.css']
})
export class GetvodkaComponent implements OnInit {

  @Input() src: string = "";
  @Input() nomeProduto: string = "";
  @Input() valorProduto: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
