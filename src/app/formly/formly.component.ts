import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions } from '@ngx-formly/core';

import { Example, exampleFields } from './models';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.scss'],
})
export class FormlyComponent {

  fields = exampleFields;
  form = new FormGroup({});
  model = Example.initialValues;
  options: FormlyFormOptions = {};
  submitted = null;

  prefill() {
    this.model = {
      firstName: 'John',
      lastName: 'Denver',
      birthDate: '1943-12-31T04:00:00.000Z',
      gender: 'm',
      favoriteColor: 'blue',
      favoriteFruits: [
        'blueberry',
        'grape',
        'orange',
      ],
      comment: 'Take me home, ohhh country road!',
      terms: true,
      newsletter: true,
      newsletterEmail: 'john.denver@yahoo.com',
    };
  }

  reset() {
    this.options.resetModel(Example.initialValues);
    this.submitted = null;
  }

  submit() {
    this.submitted = this.form.value;
  }
}
