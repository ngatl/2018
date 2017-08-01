import { Component, TemplateRef } from '@angular/core';
import { SpeakersService } from '../../speakers.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: [ './speakers.component.scss' ]
})
export class SpeakersComponent {
  speakers;
  modalRef: BsModalRef;
  currentSpeaker;

  openModal(template: TemplateRef<any>, speaker: any) {
    this.currentSpeaker = speaker;
    this.modalRef = this.modalService.show(template);
  }

  constructor(private speakersService: SpeakersService, private modalService: BsModalService) {
    this.speakers = speakersService.speakers;
  }

}
