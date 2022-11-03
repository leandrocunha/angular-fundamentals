import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  HeaderComponent,
  InfoComponent,
  ModalComponent,
} from './components';
import { EmailValidatorDirective } from './directives/email-validator.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    ModalComponent,
    EmailValidatorDirective,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, ButtonComponent, InfoComponent, ModalComponent],
})
export class SharedModule {}
