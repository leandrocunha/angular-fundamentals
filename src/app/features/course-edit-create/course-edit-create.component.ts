import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-edit-create',
  templateUrl: './course-edit-create.component.html',
  styleUrls: ['./course-edit-create.component.css'],
})
export class CourseEditCreateComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      authorName: new FormControl(''),
      duration: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.min(0)])
      ),
    });
  }

  onSubmit(formData: object): void {
    console.log(formData);
  }
}
