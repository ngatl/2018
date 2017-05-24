import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'speaker-detail-overlay',
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.scss']
})
export class SpeakerDetailComponent implements OnInit {

  @Input() selectedSpeaker;
  @Output() dismissed = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
      console.log('Hello from the speaker detail component, ',this.selectedSpeaker.name);
  }

  dismiss(){
      console.log('dismiss overlay from child');
      this.dismissed.emit('dismissed');
  }

}
