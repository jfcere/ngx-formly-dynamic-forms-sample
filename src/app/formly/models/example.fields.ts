import { FormlyFieldConfig } from '@ngx-formly/core';

import { emailRegexp } from '@shared/regexp';

export const exampleFields: FormlyFieldConfig[] = [
  {
    type: 'flex-layout',
    templateOptions: {
      fxLayout: 'row',
    },
    fieldGroup: [
      {
        key: 'firstName',
        type: 'input',
        templateOptions: {
          appearance: 'fill',
          label: 'first-name.label',
          maxLength: 50,
          placeholder: 'first-name.placeholder',
          required: true,
          translate: true,
        },
      },
      {
        key: 'lastName',
        type: 'input',
        templateOptions: {
          appearance: 'fill',
          label: 'last-name.label',
          maxLength: 50,
          placeholder: 'last-name.placeholder',
          required: true,
          translate: true,
        },
      },
    ],
  },
  {
    key: 'birthDate',
    type: 'datepicker',
    templateOptions: {
      appearance: 'fill',
      label: 'birth-date.label',
      placeholder: 'birth-date.placeholder',
      required: true,
      translate: true,
    },
  },
  {
    key: 'gender',
    type: 'radio',
    templateOptions: {
      label: 'gender.label',
      placeholder: 'gender.placeholder',
      required: true,
      options: [
        { value: 'f', label: 'Female' },
        { value: 'm', label: 'Male' },
      ],
      translate: true,
    },
  },
  {
    key: 'favoriteColor',
    type: 'select',
    templateOptions: {
      appearance: 'fill',
      label: 'favorite-color.label',
      placeholder: 'favorite-color.placeholder',
      required: true,
      options: [
        { value: 'black', label: 'Black' },
        { value: 'blue', label: 'Blue' },
        { value: 'brown', label: 'Brown' },
        { value: 'green', label: 'Green' },
        { value: 'gray', label: 'Gray' },
        { value: 'orange', label: 'Orange' },
        { value: 'purple', label: 'Purple' },
        { value: 'red', label: 'Red' },
        { value: 'turquoise', label: 'Turquoise' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'white', label: 'White' },
      ],
      translate: true,
    },
  },
  {
    key: 'favoriteFruits',
    type: 'select',
    templateOptions: {
      appearance: 'fill',
      label: 'favorite-fruits.label',
      placeholder: 'favorite-fruits.placeholder',
      required: true,
      multiple: true,
      selectAllOption: 'favorite-fruits.select-all-option',
      options: [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'blueberry', label: 'Blueberry' },
        { value: 'cherry', label: 'Cherry' },
        { value: 'cranberry', label: 'Cranberry' },
        { value: 'grape', label: 'Grape' },
        { value: 'grapefruit', label: 'Grapefruit' },
        { value: 'kiwi', label: 'Kiwi' },
        { value: 'lemon', label: 'Lemon' },
        { value: 'lime', label: 'Lime' },
        { value: 'melon', label: 'Melon' },
        { value: 'orange', label: 'Orange' },
        { value: 'papaya', label: 'Papaya' },
        { value: 'pear', label: 'Pear' },
        { value: 'pineapple', label: 'Pineapple' },
        { value: 'rasberry', label: 'Rasberry' },
        { value: 'strawberry', label: 'Strawberry' },
      ],
      translate: true,
    },
  },
  {
    key: 'comment',
    type: 'textarea',
    templateOptions: {
      appearance: 'fill',
      autosize: true,
      autosizeMinRows: 4,
      autosizeMaxRows: 8,
      label: 'comment.label',
      placeholder: 'comment.placeholder',
      description: 'comment.description',
      required: true,
      translate: true,
    },
  },
  {
    key: 'newsletter',
    type: 'toggle',
    templateOptions: {
      label: 'newsletter.label',
      description: 'newsletter.description',
      translate: true,
    },
  },
  {
    className: 'margin-top',
    hideExpression: model => !model.newsletter,
    key: 'newsletterEmail',
    type: 'input',
    templateOptions: {
      appearance: 'fill',
      label: 'email-address.label',
      pattern: emailRegexp,
      placeholder: 'email-address.placeholder',
      required: true,
      translate: true,
    },
    validation: {
      messages: {
        pattern: 'email-address.validation.pattern',
      },
    },
  },
  {
    className: 'margin-bottom',
    key: 'terms',
    type: 'checkbox',
    templateOptions: {
      label: 'terms.label',
      description: 'terms.description',
      pattern: 'true',
      required: true,
      translate: true,
    },
    validation: {
      messages: {
        required: 'terms.validation.pattern',
      },
    },
  },
];
