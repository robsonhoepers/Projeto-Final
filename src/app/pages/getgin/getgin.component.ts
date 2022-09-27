import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-getgin',
  templateUrl: './getgin.component.html',
  styleUrls: ['./getgin.component.css']
})
export class GetginComponent implements OnInit {

  @Input() src: string = "";
  @Input() nomeProduto: string = "";
  @Input() valorProduto: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
