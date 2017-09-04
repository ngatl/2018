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
      company: 'OneSpeed',
      social: {
        twitter: 'realmike33'
      },
      bio: 'Started his engineering career as a React dev for an educational startup in SF(@LRNG). Often contribute to many different Swift libraries and even launched an app on the app store.',
      beyondBio: 'You\'ll often find him playing DoTA2 or simply outside staring at nature. Sometimes will open up his text editor and hack on some open source games from time to time.'
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
      company: 'Nrwl',
      social: {
        twitter: 'AysSomething'
      },
      bio: 'Aysegul is a JavaScript developer focusing on Angular, WebVR and Data Visualization. She is a Developer Expert at Google for Web Technologies/Angular and an active conference speaker. She worked as Senior Software Engineer at Autodesk Play, a 3D and VR authoring tool that is currently in beta. She enjoys teaching at a variety of non-profit organizations aiming to increase diversity in the software industry.'
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
      },
      bio: 'Tracy is a Google Developer Expert, JavaScript developer, and serial entrepreneur. After the acquisition of her last startup as CEO, she discovered code and spends her time exploring JS frameworks.   Tracy is the creator of This.JavaScript, ng-cruise, Modern.Web podcast, RxWorkshop, and Contributor Days.   She is also Co-Founder of This Dot Labs, a framework agnostic agency helping mentor teams build ambitious apps. You can find her at http://thisdot.co/about and on Twitter @ladyleet.'
    },
    {
      name: 'Carmen Popoviciu',
      image: '../assets/Carmen.jpg',
      company: '',
      social: {
        twitter: 'CarmenPopoviciu'
      },
      bio: 'Carmen is a front-end engineer who likes writing code and solving challenging puzzles. She\'s currently working towards undertaking the path of Artificial Neural Networks and Machine Learning ... all one step at a time.\n' +
      'If she had superpowers, she would smiley all the things.'
    },
    {
      name: 'Tara Manicsic',
      image: '../assets/Tara.jpg',
      company: 'Progress',
      social: {
        twitter: 'Tzmanics'
      },
      bio: 'Tara (@tzmanics) is a life-long student, teacher and maker. She has spent her career using Javascript on both back-end and front-end to create applications. In her free time she works in her community to educate and learn from other developers. Tara launched the Cincinnati Chapter of Women Who Code and Co-Chairs the Cincinnati branch of NodeSchool. Beyond code, she likes to make things with other materials (wool, solder, clay, etc.) and hike any mountain she can get to with her trusty sidekick, #toshmagosh.',
      beyondBio: 'I started with Logo in second grade because I was at a Math/Science Magnet school but then I didn\'t do any programming again until 18 years later. I had found my way back to college classes (via the University\'s tuition assistance program) after flunking out the first time because, it turns out, I wasn\'t meant to be a marketing major. This time I studied CS while working a full-time job at the University and graduated from Harvard University Extension School with an Academic Achievement award. After moving back to Cincinnati, working a few years developing in Node for a paas and helping build up the Cincy tech community, I joined Progress as a Developer Advocate. I love talking failures turned victories, AmeriCorps NCCC, women/girls in tech efforts, puppies, cyberpunk, and lots of things in-between. Always up for chatting & coding together!'
    },
    {
      name: 'Ryan Chenkie',
      image: '../assets/Ryan.jpeg',
      company: 'Auth0',
      social: {
        twitter: 'ryanchenkie'
      },
      bio: 'Ryan is a full-stack JavaScript developer and works mostly with Angular and Node. He\'s a Google Developer Expert, Developer Advocate at Auth0, and also runs Angularcasts.io, a screencast site offering end-to-end Angular and JavaScript training. Ryan is the author of Securing Angular Applications, a complete guide on how to lock down Angular apps.',
      beyondBio: 'I had no idea I would end up working as a programmer. In fact, I used to think it was the last thing I would ever do. After taking a first year CS course focusing on Java and not understanding any of it, I decided I would work solely in my main field of study, Geomatics.\n' +
      '\n' +
      'After graduating and working in my field, I was trying to figure out how to put a map on a webpage. It was at this point that I stumbled across Codecademy where I quickly got immersed in the courses that the site offered, largely due to its teaching style. Codecademy was great at teaching the basics, but I wanted to go further. I found a bunch of other great resources online and spent the next year teaching myself web dev.\n' +
      '\n' +
      'I knew I wanted to make a career change but that it might not be that easy since I didn\'t have any formal training or experience in programming. To get some more experience and give myself some credibility, I decided to start writing tutorials on topics such as how to build applications with AngularJS. About six months after I started blogging, I was able to land a job at Auth0 as a Technical Writer focusing on marketing content. From there I moved into a Product Owner role and now I\'m a Developer Advocate.\n' +
      '\n' +
      'Learning web dev in a self-taught fashion wasn\'t always easy but I\'m glad I did it. I\'m fortunate to now work in a field I love and to be focusing on a topic that I\'m really interested in: application security.'
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
      company: 'OneSpeed',
      social: {
        twitter: 'gdi2290'
      },
      bio: 'Patrick, aka PatrickJS, CTO of OneSpeed and AngularClass. Previously the CTO of Keychain Logistics. He is also the 2014 Launch Hackathon Winner and created Reddit Insight which was on the front page of /r/technology and TechCrunch. He has been contributing to Angular since the beginning and remains very active throughout its progression. When he isn\'t dreaming about the future of web applications he likes to eat sushi, boba, pizza, and talk about why Universal web apps before he converts to vegan.',
      beyondBio: 'I\'m a college drop out from a small town in the heart of California. It was at that moment I decided to follow my heart in pursuit of online education because I believed that education meant more than degrees or paper. Even when all my friends said I was crazy and no support from my family I still knew this was the right path for me. I spent two years teaching myself using online courses, educational meetup, and even auditing my friend\'s CS courses at UCSC. I caught my first break when I discovered One Month Rails on Skillshare which was a focused course to teach you to learn Ruby on Rails in one month. The next day I would start selling simple websites for cash using what I learned the day before to fuel my learning yet again. For designs, I would buy templates online for around $17 then wire everything into a website in one day. I would also teach Ruby on Rails to a few classmates (that I met during the original SkillShare class) to solidify what I just learned. One of the people I taught suggested I should attend the coding academy Hack Reactor (completely unknown at the time but now considered the Harvard of bootcamps). At Hack Reactor they taught us a great JavaScript foundation of from someone at Twitter. Towards the end of the course we had a group project which my team and I created an app called Reddit Insight. It turned out that our project became viral and was popular enough to be featured on Tech Crunch. We reached 600 concurrent users and was in the top 50,000 in the world that day. I graduated as one of the top students of Hack Reactor and became highly in demand due to my 15 minutes of fame. Rather than going with a large company I decided to go with a startup called Keychain Logistics which was Uber for the trucking industry ($603.9 billion dollar industry). The company was also funded by top tier investors such as Andreessen Horowitz and Softbank Capital. I hired a great development team and we built a ton of innovative tech around Angular and realtime data. The startup eventually folded and rather than joining another company I started my own with Scott Moss as AngularClass. I spent the year working on open-source with the Angular Team building out Angular Universal and with Netflix working on FalcorJS. Now we created a parent company OneSpeed broaden our scope with the team I created from Keychain Logistics. We focus heavily on diversity, open-source, consulting, and training.'
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
      },
      bio: 'Shai is founder of HiRez.io - the funniest Angular video courses in the universe. \n' +
      'An experienced developer, teacher, consultant, Google Developer Expert and worldwide speaker also known for his crazy ng-conf talks - “ng-wat”,“The ng-show”, “ng-rap” and more.\n' +
      'Shai is also the organizer of the largest JavaScript group in Israel and a professional Improv performer.'
    },
    {
      name: 'Samantha Rhodes',
      image: '../assets/Samantha.jpg',
      company: '',
      social: {
        twitter: 'SamLee_509'
      },
      bio: 'Samantha Rhodes is the co-founder of Code Bridge Texas and a high school student in Houston, Texas. Along with her mom, Sam enjoys learning Angular and teaching it to others. In her free time, she enjoys running, teaching, volunteering, and learning new things.'
    },
    {
      name: 'April Wensel',
      image: '../assets/April.jpg',
      company: 'Compassionate Coding',
      social: {
        twitter: 'aprilwensel'
      },
      bio: 'April Wensel is the founder of Compassionate Coding, a social enterprise that offers coaching and training to empower individuals and teams to cultivate sustainable and human-­centered agile software development practices. She has spent the past decade in software engineering and technical leadership roles at various Silicon Valley startups. She also mentors widely and volunteers with organizations like Black Girls Code and Hackbright Academy to advance diversity in the software industry. When not coding, she enjoys writing, running marathons, and cooking vegan food.'
    },
    {
      name: 'Randall Koutnik',
      image: '../assets/Randall.jpg',
      company: 'Netflix',
      social: {
        twitter: 'rkoutnik'
      },
      bio: 'Randall is a senior software engineer at Netflix, building tools that wake up other Netflixers when things break.  To offset that karma, he’s adopted a cat that wakes him up whenever a new JavaScript framework is released.  He doesn’t get much sleep.',
      beyondBio:'4 of the 5 companies Randall\'s worked for no longer exist.  He hopes that\'s just a coincidence.'
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
      name: 'Kapunahele Wong',
      image: '../assets/Kapunahele.jpg',
      company: '',
      social: {
        twitter: 'kapunahele'
      },
      bio: 'Kapunahele likes explaining things and playing with electronics, especially broken ones. She also likes cooking, eating, and dancing the Native Hawaiian hula. She is a developer based in Richmond, Virginia and can usually be spotted gazing at the Angular docs.',
      beyondBio: 'Kapunahele has done a lotta, lotta stuff because life is neat that way. One day, she discovered that she really liked JavaScript and Angular. It\'s never too late to do what you enjoy. The details will take care of themselves.'
    },
    {
      name: 'Nathan Walker',
      image: '../assets/Nathan.jpg',
      company: 'nStudio LLC',
      social:{
        twitter: 'wwwalkerrun'
      },
      bio: 'Nathan Ross Walker has enjoyed the opportunity to work in the web/mobile app development arena for over 15 years. His varied background rooted in the world of design and the arts provides him a unique approach to problem solving. Spending several years working across multiple industries including entertainment, audio/video production, manufacturing, b2b marketing, communications, and technology helped establish a focused sensibility with client needs.',
      beyondBio: 'Do good for others, be good to your code and stay mindful of the bigger picture.'
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
      },
      bio: 'Bonnie Brennan is the founder of the ngHouston Angular Meetup. Along with her teenage daughter, she also co-founded Code Bridge Texas, where together they plan and teach free programming workshops for girls and women. Bonnie has been writing and teaching Angular since 2013 and is passionate about code quality, continuing education, and empowering others who want to learn.'
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
      company: 'Warner Bros',
      social: {
        twitter: 'Aimee_Knight'
      },
      bio: 'Aimee Knight is a former figure skater, graduate of the Nashville Software School, software engineer for Warner Bros. Outside of work, she’s a weekly panelist on the JavaScript Jabber podcast, and she regularly participates in a variety of others. In her spare time, she enjoys speaking at conferences, playing with new technology, running, working out, or trying the latest flavor of Kombucha. Find her, and her contagious enthusiasm on Twitter @Aimee_Knight!'
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
      name: 'Jen Looper',
      image: '../assets/Jen.jpg',
      company: 'Progress',
      social: {
        twitter: 'jenlooper'
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
      company: '',
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
      },
      bio: 'Scott is a web developer who has been blogging at https://hanselman.com for over a decade. He works in Open Source on ASP.NET and the Azure Cloud for Microsoft out of his home office in Portland, Oregon. Scott has three podcasts, http://hanselminutes.com for tech talk, http://thisdeveloperslife.com on developers\' lives and loves, and http://ratchetandthegeek.com for pop culture and tech media. He\'s written a number of books and spoken in person to almost a half million developers worldwide.'
    },
    {
      name: 'John McSwain',
      image: '../assets/JohnMcSwain.jpg',
      company: 'Georgia Tech Professional Ed.',
      social: {
        twitter: 'johnmcswain'
      }
    },
    {
      name: 'Wylesha Rachell',
      image: '../assets/Wylesha.jpg',
      company: 'Turner Broadcasting | NBA.com',
      social: {
        twitter: 'WyleshaRachell'
      },
      bio: 'Wylesha wrote her first line of code with custom Myspace pages for music artists while in college at LSU. Through ingenuity and a little reverse engineering, Wylesha taught herself the basic concepts of front-end development, and turned a profit in the process. It wasn’t until after she took her first Computer Science course her senior year, that she realized programming is what she wanted to do the rest of her life. After graduating with a Bachelors in Business Management, Wylesha moved to Atlanta and immersed herself in Software Engineering. She is currently on the tech team as a Sr. Engineer for NBA.com at Turner Broadcasting.'
    },
    {
      name: 'Alyssa Nicoll',
      image: '../assets/Alyssa.jpg',
      company: '',
      social: {
        twitter: 'AlyssaNicoll'
      },
      bio: 'I am an energetic, über passionate GDE and Web Dev. I have some Front-End and Angular courses on Egghead.io and Code School. I love to learn new things and share them with others. I Scuba Dive and have a toothless dog named \'Gummy\'. My DM is always open, come talk sometime.'
    }
  ];

  constructor() {
    this.speakers.sort(SpeakersService.sorting)
  }

  static sorting(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase())
      return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase())
      return 1;
    return 0;
  }

}
