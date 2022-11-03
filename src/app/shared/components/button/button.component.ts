import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() renderType: 'label' | 'icon';
  @Input() type: 'button' | 'submit';
  @Output() onClick = new EventEmitter<boolean>();

  constructor() {
    this.renderType = 'label';
    this.type = 'button';
  }

  handleOnClick() {
    this.onClick.emit();
  }

  ngOnInit(): void {}
}
