import { Injectable } from '@angular/core';

@Injectable()
export class SessionsService {
  sessions: Array<any> = [
    {
      title: 'The Holy Grail of Web Development with Angular Universal',
      description: 'With Angular we\'re able to do a ton of advanced and complex setups due to the meta programming nature of Angular. In this talk, Patrick will go over how many teams can work together in one monolithic website. We will be leveraging Angular Universal and Tools created at OneSpeed to compose static and dynamic apps together. With the Tools created at OneSpeed many common problems of Web Development are solved allowing the team to focus more on their app.',
      instructors: [
        {
          name: 'PatrickJS',
          twitter: 'gdi2290'
        }
      ]
    },
    {
      title: 'It\'s Not Dark Magic - Pulling Back the Curtains From Your Stylesheets',
      description: 'Chances are if you\'re a web developer you\'re going to have to write some CSS from time to time. When you first looked at CSS it probably seemed like a breeze. You added some border here, changed some colors there. JavaScript was the hard part of front end development! Somewhere during your progression as a front end developer that changed though! What\'s worse is that many developers in the front end community have simply learned to dismiss CSS as a toy language. The truth however is that when we hit a wall many of us don’t actually understand what our CSS is doing under the hood!\n' +
      '\n' +
      'We all like to make jokes about it, but how many of us have actually taken the time to try and understand the CSS we\'re writing. How many of us have actually reasonably debugged an issue to the next lowest abstraction layer when we hit a wall? All too often we settle for the first StackOverflow answer, hacks, or we just let the issue go entirely.\n' +
      '\n' +
      'In this talk we\'re going to finally take a step back and stop mindlessly throwing darts at the dart board! We’ll discuss the most common issues developers face such as, z-index, the cascade, and positioning in depth by diving deep into the browser\'s internal rendering engine structure to see how are styles are actually parsed. Sure, you may still not have an eye for design, but you might just walk away a CSS guru!',
      instructors: [
        {
          name: 'Aimee Knight',
          twitter: 'Aimee_Knight'
        }
      ]
    },
    {
      title: 'Something Magical',
      description: 'what more could you expect?',
      instructors: [
        {
          name: 'Shai Reznik',
          twitter: 'shai_reznik'
        }
      ],
      isShai: true
    },
    {
      title: 'Angular\'s User Authentication Tool Belt',
      description: 'Your Angular app is nearly done and now you just need to add authentication before it goes out to the real world. Simple, right? Not always. There are a lot of moving parts when it comes to authentication and authorization in general and it gets even worse for single page apps. Fortunately for us, Angular provides some great tools that help to make our lives easier when it comes to implementing auth.\n' +
      '\n' +
      'In this talk you’ll learn about Angular’s user authentication tool belt and how you can get started with it today. You’ll also come away knowing what JSON Web Tokens are and how they can be used alongside features baked into Angular to help you solve authentication and authorization in your apps.',
      instructors: [
        {
          name: 'Ryan Chenkie',
          twitter: 'ryanchenkie'
        }
      ]
    },
    {
      title: 'Immersive World of Mixed Reality.',
      description: 'We will look into creating immersive virtual worlds using WebVR apis and Angular components. While creating 3D experiences on the web has not been the easiest, Angular gives us an opportunity to create sharable libraries and create experiences in a declarative way. Get to know the building blocks of 3D Web and learn how you can write your own components.',
      instructors: [
        {
          name: 'Aysegul Yonet',
          twitter: 'AysSomething'
        }
      ]
    },
    {
      title: 'NativeScript and CodeSharing',
      description: 'When it comes to sharing code between Angular web projects and NativeScript mobile apps there are several landmines you will want avoid. Even in today’s innovative frontend world, there really is no magic bullet to enable codesharing. Achieving success when marrying the 2 technologies varies a lot depending on several important factors. Nathan Walker has been experimenting and developing in this arena ever since both technologies emerged and has encountered a couple of important take aways. In this session, you’ll learn several important *Major Keys* to maximize code reuse with real world case studies.',
      instructors: [
        {
          name: 'Nathan Walker',
          twitter: 'wwwalkerrun'
        }
      ]
    }
  ];

  constructor() {
    this.sessions.sort(SessionsService.sorting)
  }

  static sorting(a, b) {
    if (a.title < b.title)
      return -1;
    if (a.title > b.title)
      return 1;
    return 0;
  }
}
