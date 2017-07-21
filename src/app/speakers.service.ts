import { Injectable } from '@angular/core';

@Injectable()
export class SpeakersService {
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
      name: 'Michael Moss',
      image: '../assets/michaelmoss.jpg',
      company: '',
      social: {
        twitter: 'realmike33'
      }
    },
    {
      name: 'Erica Stanley',
      image: '../assets/erica_stanley.jpg',
      company: 'SalesLoft',
      social: {
        twitter: 'ericastanley'
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
      company: '',
      social: {
        twitter: 'AysSomething'
      }
    },
    {
      name: 'Brad Green',
      image: '../assets/Brad.jpg',
      company: 'Google',
      social: {
        twitter: 'bradlygreen'
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
      company: 'Nordea',
      social: {
        twitter: 'sherrylist',
        linkedin: 'shahrzadazimi'
      },
      bio: 'Sherry is a front-end developer based in beautiful Copenhagen with over 10 years of experience in software engineering. She is also co-organizer of ngCopenhagen, GDG Copenhagen and ngVikings. She loves animals and supports many animal protection organisations.'
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
      company: 'GitHub',
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
      company: 'Google',
      social: {
        twitter: 'jules_kremer'
      }
    },
    {
      name: 'Jennifer Bland',
      image: '../assets/JenniferBland.jpg',
      company: 'Stanley Black & Decker',
      social: {
        twitter: 'ratracegrad'
      }
    },
    {
      name: 'John Papa',
      image: '../assets/John.jpg',
      company: 'Microsoft',
      social: {
        twitter: 'John_Papa',
        github: 'johnpapa',
        linkedin: 'papajohn'
      },
      bio: 'John Papa is dedicated a father and husband, a Principal Developer Advocate with Microsoft, and an alumni of the Google Developer Expert, Microsoft RD and MVP programs. His passions are deploying and teaching modern web technologies, and enjoying everything Disney with his family. John is a co-host of the popular Adventures in Angular podcast, author of the Angular Style Guide, and many popular Pluralsight courses.'
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
      company: 'VMWare',
      social: {
        twitter: 'way2rach'
      }
    },
    {
      name: 'Scott Hanselman',
      image: '../assets/Scott.jpg',
      company: 'Microsoft',
      social: {
        twitter: 'shanselman'
      }
    },
    {
      name: 'John McSwain',
      image: '../assets/JohnMcSwain.jpg',
      company: 'Georgia Tech Professional Ed.',
      social: {
        twitter: 'johnmcswain'
      }
    }
  ];

  constructor() {
    this.speakers.sort(SpeakersService.sorting)
  }

  static sorting(a, b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

}
