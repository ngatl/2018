import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: [ './speakers.component.scss' ]
})
export class SpeakersComponent implements OnInit {
  speakers: Array<any> = [
    {
      name: 'Simona Cotin',
      image: '../assets/Simona.jpg',
      company: 'Microsoft',
      social: {
        twitter: 'simona_cotin'
      }
    },
    {
      name: 'Mike Brocchi',
      image: '../assets/Mike.jpg',
      social: {
        twitter: 'Brocco'
      }
    },
    {
      name: 'Aysegul Yonet',
      image: '../assets/Aysegul.jpg',
      social: {
        twitter: 'AysSomething'
      }
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
