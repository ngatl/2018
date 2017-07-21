import { Component, OnInit } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  sponsors: Array<any>;
  signup = {
    FNAME: '',
    LNAME: '',
    EMAIL: '',
    b_0b058da04fc0ba7ae956cb672_b623efabaf: ''
  };
  mcSubmitted: boolean = false;
  showMCSubmit: boolean = true;
  message: string = '';

  constructor(private jsonp: Jsonp) {
  }

  submitMailChimp() {
    this.mcSubmitted = true;
    event.preventDefault();
    this.jsonp.get(
      `http://ng-atl.us15.list-manage.com/subscribe/post-json?u=0b058da04fc0ba7ae956cb672&amp;id=b623efabaf&subscribe=Subscribe&EMAIL=${this.signup.EMAIL}&FNAME=${this.signup.FNAME}&LNAME=${this.signup.LNAME}&b_0b058da04fc0ba7ae956cb672_b623efabaf=${this.signup.b_0b058da04fc0ba7ae956cb672_b623efabaf}&c=JSONP_CALLBACK`)
      .map((response: Response) => response.json())
      .subscribe((mcResult: MailChimpResult) => {
      this.showMCSubmit = false;
        if (mcResult.result === 'error') {
          if (mcResult.msg.indexOf('already subscribed') > -1) {
            this.message = 'You\'ve already subscribed. Please check your email.';
          }
        } else {
          if (mcResult.msg.indexOf('Almost finished') > -1) {
            this.message = 'See you soon! Please make sure to verify your email!';
          }
        }
      });
  }

  ngOnInit() {
    this.sponsors = [
      {name: 'GitHub', level: 'Diversity Supporter', image: '/sponsors/GitHub_Logo.png'},
      {name: 'Robert Half Technology', level: 'Silver', image: '/sponsors/robert-half.gif'},
      {name: 'ADP', level: 'Gold', image: '/sponsors/adp_logo.svg'}
    ];
  }

}

export interface MailChimpResult {
  result: string;
  msg: string;
}
