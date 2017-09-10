import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: [ './blog.component.scss' ]
})
export class BlogComponent {
  articles: any = [
    {
      title: 'NgAtlanta Kicks Off This January',
      description: 'Technology, Inclusivity, and Diversity — The first Angular conference focused on people first.',
      link: 'https://medium.com/@NgAtlanta/ngatlanta-kicks-off-this-january-ab6489801fba',
      img:'blog/launch.jpg'
    }
  ];

  constructor() {
  }

}
