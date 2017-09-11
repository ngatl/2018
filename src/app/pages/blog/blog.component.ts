import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: [ './blog.component.scss' ]
})
export class BlogComponent {
  articles: any = [
    {
      date: 'Sept. 1',
      title: 'Soft Skills are a myth',
      description: 'If you’ve ever been on either side of the interview table, the question of “Soft Skills” has most likely come up. Ambiguous or direct, we all sometimes speak in the “Soft Skills” vernacular of those around us. Mentally checking yet another proverbial box in the interview process. However we may be approaching the interview, and the interviewee in the entirely wrong way.',
      link: 'https://medium.com/@NgAtlanta/soft-skills-are-a-myth-4342b1f70304',
      img: 'blog/checklist.jpg'
    },
    {
      date: 'Aug. 7',
      title: 'NgAtlanta Kicks Off This January',
      description: 'Technology, Inclusivity, and Diversity — The first Angular conference focused on people first.',
      link: 'https://medium.com/@NgAtlanta/ngatlanta-kicks-off-this-january-ab6489801fba',
      img: 'blog/launch.jpg'
    }
  ];

  constructor() {
  }

}
