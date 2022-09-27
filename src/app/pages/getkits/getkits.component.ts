import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-getkits',
  templateUrl: './getkits.component.html',
  styleUrls: ['./getkits.component.css']
})
export class GetkitsComponent implements OnInit {

  @Input() src: string = "";
  @Input() nomeProduto: string = "";
  @Input() valorProduto: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
