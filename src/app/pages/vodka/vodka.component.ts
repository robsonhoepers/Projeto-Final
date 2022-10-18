import { Component, OnInit } from '@angular/core';
import { Vodka } from 'src/app/interfaces/vodka';
import { VodkaService } from 'src/app/services/vodka.service';

@Component({
  selector: 'app-vodka',
  templateUrl: './vodka.component.html',
  styleUrls: ['./vodka.component.css']
})
export class VodkaComponent implements OnInit {

  vodkas: Vodka[] = []

constructor(private vodkaService: VodkaService) { }

  ngOnInit(): void {

    const categoria = "Vodka";
    this.vodkaService.getVodka(categoria).subscribe((vodkas) => {
      this.vodkas = vodkas;
      console.log(vodkas);
      
      
   });
   
    console.log(this.vodkas);

    
   
  }
}
