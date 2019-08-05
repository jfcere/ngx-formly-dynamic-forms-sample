import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  DynamicFormArrayModel,
  DynamicFormGroupModel,
  DynamicFormLayout,
  DynamicFormModel,
  DynamicFormService,
  DynamicFormValueControlModel,
} from '@ng-dynamic-forms/core';

import { Example, exampleFormLayout, exampleFormModel } from './models';


@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss'],
})
export class DynamicFormsComponent implements OnInit {

  form: FormGroup;
  layout: DynamicFormLayout = exampleFormLayout;
  model: DynamicFormModel = exampleFormModel;
  submitted = null;

  constructor(
    private formService: DynamicFormService,
  ) { }

  ngOnInit() {
    this.form = this.formService.createFormGroup(this.model);
  }

  prefill() {
    this.updateFormValues<Example>({
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
    }, this.model);
  }

  reset() {
    this.updateFormValues<Example>(Example.initialValues, this.model);
    this.submitted = null;
  }

  submit() {
    this.submitted = this.form.value;
  }

  private updateFormValues<T>(data: T, model: any) {
    let fieldModel: any;
    Object.keys(data).forEach(key => {
      const groupModel = this.formService.findById(key, model);
      if (groupModel instanceof DynamicFormGroupModel) {
        if (data[key] instanceof Array) {
          throw new Error(`Error : $(key) data structure should be an object`);
        } else {
          this.updateFormValues(data[key], model.group);
          // could also be simply `this.updateFormValues(data[key], model);`
          // as `formService.findById` searches recursively within embedded `FormGroupModels`
          // but won't work if multiple fields have the same id as in the sample above : ie name
        }
      } else if (groupModel instanceof DynamicFormArrayModel) {
        if (data[key] instanceof Array) {
          for (let i = 0; i < data[key].length; i++) {
            this.updateFormValues(data[key][i], groupModel.groups[i].group);
          }
        } else {
          throw new Error(`Error : $(key) data structure should be an array`);
        }
      } else {
        fieldModel = this.formService.findById(key, model);
        if (fieldModel) {
          fieldModel.valueUpdates.next(data[key]);
        } else if (model instanceof DynamicFormValueControlModel) {
          model.valueUpdates.next(data[key]);
        } else {
          throw new Error(`Error : $(key) data structure missing in form`);
        }
      }
    });
  }
}
