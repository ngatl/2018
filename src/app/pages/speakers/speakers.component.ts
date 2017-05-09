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
      company: 'Rangle.io',
      social: {
        twitter: 'Brocco'
      }
    },
    {
      name: 'Aysegul Yonet',
      image: '../assets/Aysegul.jpg',
      company: 'Autodesk',
      social: {
        twitter: 'AysSomething'
      }
    },
    {
      name: 'Tracy Lee',
      image: '../assets/Tracy.jpg',
      company: 'dotMedia',
      social: {
        twitter: 'ladyleet'
      }
    },
    {
      name: 'Carmen Popoviciu',
      image: '../assets/Carmen.jpg',
      company: '',
      social: {
        twitter: 'CarmenPopoviciu'
      }
    },
    {
      name: 'Tara Manicsic',
      image: '../assets/Tara.jpg',
      company: 'Progress',
      social: {
        twitter: 'Tzmanics'
      }
    },
    {
      name: 'Chaela Womack',
      image: '../assets/Chaela.jpg',
      company: 'CareerBuilder',
      social: {
        twitter: 'chawomack'
      }
    },
    {
      name: 'Sherry List',
      image: '../assets/Sherry.jpg',
      company: '',
      social: {
        twitter: 'sherrylist'
      }
    },
    {
      name: 'Patrick Stapleton',
      image: '../assets/Patrick.jpg',
      company: 'AngularClass',
      social: {
        twitter: 'gdi2290'
      }
    },
    {
      name: 'Vanessa Yuenn',
      image: '../assets/Vanessa.jpg',
      company: '',
      social: {
        twitter: 'vanessayuenn'
      }
    },
    {
      name: 'Kim Crayton',
      image: '../assets/KimCrayton.jpg',
      company: 'Kim Crayton LLC',
      social: {
        twitter: 'KimCrayton1'
      }
    },
    {
      name: 'Shai Reznik',
      image: '../assets/Shai.jpg',
      company: 'HiRez.io',
      social: {
        twitter: 'shai_reznik'
      }
    },
    {
      name: 'Samantha Lee',
      image: '../assets/Samantha.jpg',
      company: '',
      social: {
        twitter: 'SamLee_509'
      }
    },
    {
      name: 'April Wensel',
      image: '../assets/April.jpg',
      company: 'Compassionate Coding',
      social: {
        twitter: 'aprilwensel'
      }
    },
    {
      name: 'Susan Goldblatt',
      image: '../assets/Susan.jpg',
      company: 'Google',
      social: {
        twitter: 'thatgoldblatt'
      }
    },
    {
      name: 'Kapunahele Wang',
      image: '../assets/Kapunahele.jpg',
      company: '',
      social: {
        twitter: 'kapunahele'
      }
    },
    {
      name: 'Dmitriy Shekhovtsov',
      image: '../assets/Dmitri.jpg',
      company: 'Valor Software',
      social: {
        twitter: 'valorkin'
      }
    },
    {
      name: 'Bonnie Brennan',
      image: '../assets/Bonnie.jpg',
      company: '',
      social: {
        twitter: 'bonnster75'
      }
    }
  ];

  constructor() {
    this.speakers.sort(SpeakersComponent.sorting)
  }

  static sorting(a, b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  ngOnInit() {
  }

}
