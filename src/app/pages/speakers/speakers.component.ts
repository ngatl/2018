import { Component } from '@angular/core';
import { SpeakersService } from '../../speakers.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: [ './speakers.component.scss' ]
})
export class SpeakersComponent {
  speakers;

  constructor(private speakersService: SpeakersService) {
    this.speakers = speakersService.speakers;
  }

}
