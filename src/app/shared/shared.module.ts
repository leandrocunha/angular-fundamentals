import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  HeaderComponent,
  InfoComponent,
  ModalComponent,
} from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    ModalComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, ButtonComponent, InfoComponent, ModalComponent],
})
export class SharedModule {}
