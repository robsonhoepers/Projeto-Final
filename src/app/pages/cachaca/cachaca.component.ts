import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { Cachaca } from 'src/app/interfaces/cachaca';
import { CachacaService } from 'src/app/services/cachaca.service';


@Component({
  selector: 'app-cachaca',
  templateUrl: './cachaca.component.html',
  styleUrls: ['./cachaca.component.css']
})

export class CachacaComponent  implements OnInit{
  
  cachacas: Cachaca [] = [];

constructor(private cachacaService: CachacaService) { }

  ngOnInit(): void {

    const categoria = "Cachaça";
    this.cachacaService.getCachaca(categoria).subscribe((cachacas) => {
      this.cachacas = cachacas;
      console.log(cachacas);
      console.log();
      
   });
   console.log(this.cachacas);
  }
  
}
