import { Component } from '@angular/core';
import { WorkshopsService } from '../../workshops.service';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: [ './workshops.component.scss' ]
})
export class WorkshopsComponent {
  workshops;

  constructor(private workshopService: WorkshopsService) {
    this.workshops = workshopService.workshops;
  }

}
