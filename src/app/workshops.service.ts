import { Injectable } from '@angular/core';

@Injectable()
export class WorkshopsService {
  workshops = [
    {
      title: '',
      length: '',
      day: '',
      description: '',
      instructors: [
        {
          name: ''
        }
      ]
    }
  ];

  constructor() { }

}
