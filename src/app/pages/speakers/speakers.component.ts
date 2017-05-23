import { Component, OnInit, Output } from '@angular/core';
import { SpeakerDetailComponent, SpeakerCardComponent } from '../../../components/components';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: [ './speakers.component.scss' ]
})
export class SpeakersComponent implements OnInit {
  @Output() selectedSpeaker: any;

  showDetail(speaker){
    console.log('speaker selected: ', speaker.name);
    this.selectedSpeaker = speaker;
  }

  dismissOverlay(){
    console.log('dismiss overlay from parent');
    this.selectedSpeaker = null;
  }
  
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
    },
    {
      name: 'Deanna Rowe',
      image: '../assets/Deanna.jpg',
      company: 'Google',
      social: {
        twitter: 'djrowe9'
      }
    },
    {
      name: 'Aimee Knight',
      image: '../assets/Aimee.jpg',
      company: '',
      social: {
        twitter: 'Aimee_Knight'
      }
    },
    {
      name: 'Brandon Roberts',
      image: '../assets/Brandon.jpg',
      company: '',
      social: {
        twitter: 'brandontroberts'
      }
    },
    {
      name: 'Shmuela Jacobs',
      image: '../assets/Shmuela.jpg',
      company: '',
      social: {
        twitter: 'ShmuelaJ'
      }
    },
    {
      name: 'Jules Kremer',
      image: '../assets/Jules.jpg',
      company: '',
      social: {
        twitter: 'jules_kremer'
      }
    },
    {
      name: 'John Papa',
      image: '../assets/John.jpg',
      company: '',
      social: {
        twitter: 'John_Papa'
      }
    },
    {
      name: 'Meredith Bayne',
      image: '../assets/Meredith.jpg',
      company: '',
      social: {
        twitter: 'meredithjordyn'
      }
    },
    {
      name: 'Rachita Joshi',
      image: '../assets/Rachita.jpg',
      company: '',
      social: {
        twitter: 'way2rach'
      }
    },
    {
      name: 'Scott Hanselman',
      image: '../assets/Scott.jpg',
      company: '',
      social: {
        twitter: 'shanselman'
      }
    },
    {
      name: 'John McSwain',
      image: '../assets/JohnMcSwain.jpg',
      company: '',
      social: {
        twitter: 'johnmcswain'
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
