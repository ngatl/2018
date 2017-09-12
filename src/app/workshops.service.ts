import { Injectable } from '@angular/core';

@Injectable()
export class WorkshopsService {
  workshops = [
    {
      title: 'Angular Workshop - Core Concepts, CLI, Components, Data Binding, Services',
      length: '1 day',
      day: 'Jan 30',
      description: 'Do you want to get a jumpstart on developing with Angular so you can build robust Web applications? John Papa will help you learn how to work with data binding, build components and services, send and receive data to and from a server using Http, RxJS and observables, lazy load modules with routing, best practices you can employ in your applications, and much more! You\'ll also learn how to get up and running quickly with the Angular CLI. Bring your laptop, as you’ll be writing Angular code using what you learn in several hands-on exercises. What You’ll Learn: · ES2015/TypeScript core concepts · Getting started with the Angular CLI · Bootstrapping your application · The Role of Components · Using Decorators · Binding data to views · Input and output properties · Dependency injection and providers · Managing remote data calls using services · Http and RxJS Observables · Routing and page navigation · Lazy loading and route guards · Template-driven and reactive forms · Tips, tricks and best practices · More!',
      instructors: [
        {
          name: 'John Papa'
        }
      ]
    },
    {
      title: 'Angular Workshop - RxJS/Observables, Http, Routing, Guards, Lazy Loading, Deploying',
      length: '1 day',
      day: 'Jan 31',
      description: 'John Papa will help you learn how to work with data binding, build components and services, send and receive data to and from a server using Http, RxJS and observables, lazy load modules with routing, best practices you can employ in your applications, and much more! You\'ll also learn how to get up and running quickly with the Angular CLI. Bring your laptop, as you’ll be writing Angular code using what you learn in several hands-on exercises. What You’ll Learn: · ES2015/TypeScript core concepts · Getting started with the Angular CLI · Bootstrapping your application · The Role of Components · Using Decorators · Binding data to views · Input and output properties · Dependency injection and providers · Managing remote data calls using services · Http and RxJS Observables · Routing and page navigation · Lazy loading and route guards · Tips, tricks and best practices · More!',
      instructors: [
        {
          name: 'John Papa'
        }
      ]
    },
    {
      title: 'Getting started with Universal Workshop',
      length: '1 day',
      day: 'Jan 31',
      description: 'The creator of Angular Universal, PatrickJS, guides us as we create a project using Universal. Topics will include best practices, pitfalls, performance considerations to name a few. Along with invaluable instruction, students will have major insights into how Universal works.',
      instructors: [
        {
          name: 'PatrickJS'
        }
      ]
    },
    {
      title: 'GraphQL and Angular',
      length: '1 day',
      day: 'Jan 31',
      description: 'GraphQL is on its way in and has proven itself a worthy solution to a component based app future. Scott Moss will guide students through getting started with GraphQL and Angular. Topics include libraries to use, typescript + graphql, testing, and much more.',
      instructors: [
        {
          name: 'Scott Moss'
        }
      ]
    },
    {
      title: 'Ionic',
      length: '1 day',
      day: 'Jan 31',
      description: 'Chris Griffith offers an introduction to the Ionic framework. Built atop Angular and Apache Cordova, this framework gives developers an incredibly powerful set of mobile components to create app store-ready or progressive web apps.',
      instructors: [
        {
          name: 'Chris Griffith'
        }
      ]
    },
    {
      title: 'NativeScript',
      length: '2 days',
      day: 'Jan 30 - Jan 31',
      description: 'Whether you and your team need to build a shared codebase from your web apps to your native mobile apps or just desire to share code between native iOS and Android apps, Nathan Walker, Jen Looper and Nitish Dayal will provide an in-depth look at NativeScript for Angular development. NativeScript is an open source framework for building truly native mobile apps with Angular, TypeScript or JavaScript.',
      instructors: [
        {
          name: 'Nathan Walker'
        },
        {
          name: 'Jen Looper'
        },
        {
          name: 'Nitish Dayal'
        },
        {
          name: 'Sebastian Witalec'
        }
      ]
    },
    {
      title: 'Painless Angular Authentication with Auth0',
      length: '1 day',
      day: 'Jan 31',
      description: 'Authentication and authorization for Angular apps can be a real pain. Thankfully Auth0 makes it really easy. In this workshop, Ryan Chenkie will show you how to get an end-to-end authentication and authorization solution working in your Angular app with Auth0. You’ll come away with a production-ready auth implementation and a ton of knowledge about how Auth0 can be used to take you even further with authentication and authorization as your app grows.',
      instructors: [
        {
          name: 'Ryan Chenkie'
        }
      ]
    },
    {
      title: 'Production Ready Angular',
      length: '1 day',
      day: 'Jan 30',
      description: 'So you’ve built an Angular app before? When launching your app, there are many major considerations you have to think of with Angular. Things like AOT, Lazy loading, and CSS management all need attention when shipping to production. There are many approaches and pitfalls when figuring out a production strategy that may seem intimidating and sometimes confusing. PatrickJS will guide us through to the end, showing us the way to fast, performant Angular apps.',
      instructors: [
        {
          name: 'PatrickJS'
        }
      ]
    },
    {
      title: 'State Management with ngrx',
      length: '1 day',
      day: 'Jan 31',
      description: 'With easy, fun labs, Dominic Elm will help you learn why redux and ngrx is considered an essential library for modern Angular applications. Learn how redux works and why immutable data flows are crucial to predictable UX. Learn how ngrx brings reactive redux features to your Angular application and see how effects and facades work with asynchronous processes. See how easy it is to test your application logic and explore the redux time-travel features.',
      instructors: [
        {
          name: 'Dominic Elm'
        }
      ]
    },
    {
      title: 'Taming Forms in Angular',
      length: '1 day',
      day: 'Jan 31',
      description: 'In this training, Pascal Precht will discuss template-driven and reactive forms, by creating an application that uses various form control types. We will learn how to use built-in validators, create our own custom validators and even custom form controls!',
      instructors: [
        {
          name: 'Pascal Precht'
        }
      ]
    },
    {
      title: 'RxWorkshop',
      length: '1 day',
      day: 'Feb 3',
      description: 'If you are developer looking to broaden your knowledge on RxJS, this is the workshop for you. With a 3-part course, consisting of videos, in-person interaction, and post workshop support, rxworkshop offers the best resources to learn about RxJS 5 and observables in-depth. \n' +
      '\n' +
      'Led by Ben Lesh, you will learn how to use RxJS to manage common and complex async scenarios within an application, how to go about composing streams when thinking in functional reactive programming, and how to build an application using HTTP and WebSockets to accomplish a real time streaming application.',
      instructors: [
        {
          name: 'Ben Lesh'
        },
        {
          name: 'Tracy Lee'
        }
      ]
    },
    {
      title: 'Build a full-stack application with Colmena (API/Admin/Frontend)',
      length: '1 day',
      day: 'Jan 31',
      description: 'Ever heard of Colmena? If not, you should definitely attend this workshop. Colmena is a modular platform for building full-stack applications in JavaScript. It consists of a REST API built on top of LoopBack and an Admin interface built in Angular. During this workshop we build our backend using Colmena. Next, we build a custom frontend, for example a website using Angular, a mobile app using Ionic or your own favorite framework. You will leave the workshop with a custom full-stack application, deployed to the cloud and ready to be extended.',
      instructors: [
        {
          name: 'Bram Borggreve'
        }
      ]
    },
    {
      title: 'Code and Deploy Angular to the Azure Cloud',
      length: '1 day',
      day: 'Jan 31',
      description: 'Workshop: Getting started with Angular is now easier than ever ... said no one ever. Yet with the right toolset we too can create magic. When I code with Angular I can deploy to Azure within minutes.\n' +
      ' \n' +
      'We\'ll go through a simple development to production workflow. First we code with a little help from the Angular CLI. Then we build for production - Webpack to the rescue. We then push our code to Github and deploy it on Node to Azure. Mission accomplished, application is now up in the cloud! \n' +
      ' \n' +
      'We\'ll then learn how to create an API for our application in a serverless way and build a CICD pipeline in Azure. Finally, with the right tools for monitoring and alerting we\'ll stay on top of our application\'s health and performance. \n' +
      ' \n' +
      'Content:\n' +
      ' \n' +
      'Intro to Azure \n' +
      'Build an Angular app and deploy it to Azure App Service\n' +
      'Create your app\'s API using Azure Functions\n' +
      'Add data to your app - CosmosDB\n' +
      'Continuous integration\n' +
      'Monitor and scale your application',
      instructors: [
        {
          name: 'Simona Cotin'
        },
        {
          name: 'Brian Clark'
        }
      ]
    }
  ];

}
