import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-telaprincipal',
  templateUrl: './telaprincipal.component.html',
  styleUrls: ['./telaprincipal.component.css']
})
export class TelaprincipalComponent implements OnInit {

  images = [
    {
      imageSrc:
        'https://github.com/robsonhoepers/Projeto-Final/blob/main/src/assets/cachaca/cachaça_mondlicht.jpg?raw=true',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://github.com/robsonhoepers/Projeto-Final/blob/main/src/assets/gin/gin_mondlicht.jpg?raw=true',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://github.com/robsonhoepers/Projeto-Final/blob/main/src/assets/vodka/vodka_mondlicht.jpg?raw=true',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://github.com/robsonhoepers/Projeto-Final/blob/main/src/assets/vodka/belvedere.jpg?raw=true',
      imageAlt: 'person2',
    },
  ]
 

  constructor() { }

  ngOnInit(): void {}

}
