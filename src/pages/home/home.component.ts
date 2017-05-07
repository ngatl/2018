import { Component, OnInit } from '@angular/core';
import { PillButtonComponent } from '../../components/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sponsors: Array<any>;

  constructor() { }

  ngOnInit() {
    this.sponsors = [
    { name: 'Company Name', level: 'Sponsor Level', image: 'placeholder.jpg' },
    { name: 'Company Name', level: 'Sponsor Level', image: 'placeholder.jpg' },
    { name: 'Company Name', level: 'Sponsor Level', image: 'placeholder.jpg' },
    { name: 'Company Name', level: 'Sponsor Level', image: 'placeholder.jpg' }  
    ];
  }

}
