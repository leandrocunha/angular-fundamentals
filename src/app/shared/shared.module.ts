import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  HeaderComponent,
  InfoComponent,
  ModalComponent,
  SearchComponent,
} from './components';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    ModalComponent,
    EmailValidatorDirective,
    DurationPipe,
    SearchComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ButtonComponent,
    DurationPipe,
    EmailValidatorDirective,
    HeaderComponent,
    InfoComponent,
    ModalComponent,
    SearchComponent,
  ],
})
export class SharedModule {}
