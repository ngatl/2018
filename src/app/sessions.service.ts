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
      title: 'Beyond the Angular CLI',
      description: 'The cat is out of the bag, people know about the Angular CLI and what it can do for them. But what is coming? What else can it do? What changes and improvements can I expect? Come learn what the Angular CLI can do and will evolve into.',
      instructors: [
        {
          name: 'Mike Brocchi',
          twitter: 'Brocco'
        }
      ]
    },
    {
      title: 'Emotional Intelligence for Engineers',
      description: 'Software may be built on machines, but it’s built by and for human beings. To be a highly effective software engineer, you must be able to navigate human interactions successfully. Emotional intelligence is the set of competencies that will allow you to do just that!\n' +
      '\n' +
      'Whether you’re discussing tradeoffs with your UX designer, convincing your team to adopt a new tool, or just reviewing someone’s code, interpersonal skills are essential.\n' +
      '\n' +
      'Emotional intelligence not only helps in our interactions with others; it also includes self-awareness, which allows us to motivate ourselves, manage stress, and avoid burnout.\n' +
      '\n' +
      'This talk will give you a better understanding of your own behavior, and it will also help you to cultivate empathy for the people on your team. You’ll learn a suite of practical tools that will empower you to prevent burnout, improve productivity, and tackle difficult conversations at work. You’ll leave inspired to apply these new skills to unlock your full potential as a developer and a human being!',
      instructors: [
        {
          name: 'April Wensel',
          twitter: 'aprilwensel'
        }
      ]
    },
    {
      title: 'Make Your Mobile Apps Smarter with Machine Learning and NativeScript',
      description: 'Do you ever wake up in a cold sweat, thinking that your mobile apps are both boring and stupid? When this happens, you start to question yourself, asking why your apps aren’t more empathetic, why they don’t respond better to your users’ needs. Even if you have built a performant app with a great UI, you can leverage new methods of adding machine learning to your apps to create a really useful and enticing mobile app experience. In this talk, you’ll learn some basics of machine learning and how to integrate it into your mobile app, first with some clever APIs, and then with custom trained models using TensorFlow. Come learn how to send your apps back to school and level up their innate ‘intelligence’!',
      instructors: [
        {
          name: 'Jen Looper',
          twitter: 'jenlooper'
        }
      ]
    },
    {
      title: 'Breaking Down Reactive Forms',
      description: 'Angular offers two options for building forms in your application: Reactive Forms and Template Driven Forms. In this talk, Bonnie will focus on reactive forms and explain the structure, data model, and setup. You’ll learn about the synchronous flow of data between the UI and server, covering how your component can quickly respond to user input how to update the server once your input is validated. You’ll also see how you can easily validate and test your reactive form. If you’re one of the many people leaning toward reactive style programming, you’re going to love reactive forms!',
      instructors: [
        {
          name: 'Bonnie Brennan',
          twitter: 'bonnster75'
        },
        {
          name: 'Samantha Rhodes',
          twitter: 'SamLee_509'
        }
      ]
    },
    {
      title: 'Angular as strategy for collaboration and scale',
      description: 'We on the Angular team care most about seeing the amazing things you all build with the platform. Because of this, we\'ve always focused on how teams can scale from the smallest prototypes to Google-scale consumer and enterprise applications. Come hear about how we\'ve designed for productive teams and eliminating development roadblocks at Google and throughout the open source world.',
      instructors: [
        {
          name: 'Brad Green',
          twitter: 'bradlygreen'
        }
      ]
    },
    {
      title: 'Create web components and use them anywhere!',
      description: 'Many of us who work at larger companies often have to work with different teams, each using their web framework of choice. This means that projects often end up having a slightly different look and feel, as well as a lot of similar but non-sharable code.\n' +
      '\n' +
      'Web components were invented to solve some of these issues in part by making sharable components, which can be used standalone or within existing projects, based on different frameworks.\n' +
      '\n' +
      'During this talk, we will introduce web components and provide examples of how to get started, as well as how to use these components in your existing projects. ',
      instructors: [
        {
          name: 'Sherry List',
          twitter: 'sherrrylst'
        }
      ]
    },
    {
      title: 'The parable of the blender',
      description: 'Between Webpack, new Angular releases and blogging about the latest npm controversy, it can be easy to lose sight of what we\'re here for: Using software to solve real-world problems.  Let\'s take a step back from the nitty-gritty to focus on the big picture - how do we figure out what our customers want?  How do we turn those vague wants into real products?  And what on earth does this have to do with a blender?\n',
      instructors: [
        {
          name: 'Randall Koutnik',
          twitter: 'rkoutnik'
        }
      ]
    },
    {
      title: 'PWA All The Things!',
      description: 'Progressive Web Apps are not replacing native mobile applications any time soon. Don’t disregard them just yet! They can take our web applications that we build or are currently running and make them better. By using support for offline caching, push notifications, home screen icons and more, we can upgrade our app to a PWA to make it more accessible, reliable and engaging! Let\'s take a look at how to to create or update our Angular applications. Then we will see what this looks like & acts like on multiple platforms so we know what all of our users are experiencing.',
      instructors: [
        {
          name: 'Tara Manicsic',
          twitter: 'tzmanics'
        }
      ]
    },
    {
      title: 'Modern Testing Strategies for Reactive Applications',
      description: 'In the world of Angular applications, testing is key to protect against regressions and validating functionality. With apps becoming more reactive with observables, testing how these independent pieces work becomes more important. Learn how these testing patterns and practices will ease the burden of testing your Angular application. From unit testing presentation components, integration testing with smart components, testing observables, state management and end-to-end tests, you can use these strategies to make your testing your reactive application easier and to simplify your testing triangle.',
      instructors: [
        {
          name: 'Brandon Roberts',
          twitter: 'brandontroberts'
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
