import { Component, OnInit } from '@angular/core';
import { jsPDF} from 'jspdf';

@Component({
  selector: 'app-relatoriocompra',
  templateUrl: './relatoriocompra.component.html',
  styleUrls: ['./relatoriocompra.component.css']
})
export class RelatoriocompraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  printPdf(){
  
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf"); 
    }
}
