import { Component, Input, OnInit } from '@angular/core';





@Component({
  selector: 'app-getcachaca',
  templateUrl: './getcachaca.component.html',
  styleUrls: ['./getcachaca.component.css']
})


export class GetcachacaComponent implements OnInit {

  @Input() src: string = "";
  @Input() nomeProduto: string = "";
  @Input() valorProduto: string = "";
  @Input() id: string = "";
  

  constructor() {

   }

  ngOnInit(): void {

    
  }
}