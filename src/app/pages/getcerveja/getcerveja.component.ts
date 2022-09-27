import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-getcerveja',
  templateUrl: './getcerveja.component.html',
  styleUrls: ['./getcerveja.component.css']
})
export class GetcervejaComponent implements OnInit {

  @Input() src: string = "";
  @Input() nomeProduto: string = "";
  @Input() valorProduto: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
