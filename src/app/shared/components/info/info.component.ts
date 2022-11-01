import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  @Input() title: string = 'The Info Title Placeholder';
  @Input() text: string = 'Lorem ipsum dollor sit amem';

  constructor() {}

  ngOnInit(): void {}
}
