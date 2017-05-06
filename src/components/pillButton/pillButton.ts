import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pill-button',
  templateUrl: './pillButton.html',
  styleUrls: ['./pillButton.scss']
})
export class PillButtonComponent implements OnInit {
    @Input() label: string;
    @Input() color: string;
    constructor() { }

    ngOnInit() {}

}
