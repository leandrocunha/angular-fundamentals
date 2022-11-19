import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() appearance: 'default' | 'full-width';
  @Input() renderType: 'label' | 'icon';
  @Input() type: 'button' | 'submit';
  @Input() disabled: boolean;
  @Output() onClick = new EventEmitter<boolean>();

  composedClass: string;

  constructor() {
    this.appearance = 'default';
    this.disabled = false;
    this.renderType = 'label';
    this.type = 'button';
    this.composedClass = 'default';
  }

  handleOnClick() {
    this.onClick.emit();
  }

  ngOnInit(): void {
    this.composedClass = `button ${
      !this.renderType ? 'app-button' : 'app-button app-button--icon'
    } app-button--${this.appearance}`;
  }
}
