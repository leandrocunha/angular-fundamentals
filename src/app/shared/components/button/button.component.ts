import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() type: string | null = null;
  @Output() onClick = new EventEmitter<boolean>();

  constructor() {}

  handleOnClick() {
    this.onClick.emit();
  }

  ngOnInit(): void {}
}
