import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/utils/emailValidator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(
        '',
        Validators.compose([
          Validators.min(6),
          Validators.pattern('[\\w\\-\\s\\/]+'),
        ])
      ),
      email: new FormControl(
        '',
        Validators.compose([Validators.required, emailValidator])
      ),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(formData: object): void {
    console.log(formData);
  }
}
