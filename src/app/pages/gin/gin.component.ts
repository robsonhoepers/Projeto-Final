import { Component, OnInit } from '@angular/core';
import { Gin } from 'src/app/interfaces/gin';
import { GinService } from 'src/app/services/gin.service';

@Component({
  selector: 'app-gin',
  templateUrl: './gin.component.html',
  styleUrls: ['./gin.component.css']
})
export class GinComponent implements OnInit {

  gins: Gin[] = []

constructor(private ginService: GinService) { }

  ngOnInit(): void {

    const categoria = "5";
    this.ginService.getGin(categoria).subscribe((gins) => {
      this.gins.push(gins);
      console.log(gins);
      
      
   });
   
    console.log(this.gins);

}
}