import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss']
})
export class SpeakerCardComponent implements OnInit {

  @Input()
  speaker;

  showDetails: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
