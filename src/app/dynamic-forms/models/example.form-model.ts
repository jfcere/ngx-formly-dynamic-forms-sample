import {
  DynamicCheckboxModel,
  DynamicDatePickerModel,
  DynamicFormModel,
  DynamicInputModel,
  DynamicRadioGroupModel,
  DynamicSelectModel,
  DynamicSwitchModel,
  DynamicTextAreaModel,
  MATCH_DISABLED,
  MATCH_REQUIRED,
} from '@ng-dynamic-forms/core';

import { emailRegexp } from '@shared/regexp';

export const exampleFormModel: DynamicFormModel = [

  new DynamicInputModel({
    id: 'firstName',
    label: 'First Name',
    placeholder: 'Enter first name',
    required: true,
    validators: {
      maxLength: 50,
      required: null,
    },
    additional: {
      appearance: 'fill',
    },
  }),

  new DynamicInputModel({
    id: 'lastName',
    label: 'Last Name',
    placeholder: 'Enter last name',
    required: true,
    validators: {
      maxLength: 50,
      required: null,
    },
    additional: {
      appearance: 'fill',
    },
  }),

  new DynamicDatePickerModel({
    id: 'birthDate',
    label: 'Birth Date',
    placeholder: 'Select Birth Date',
    required: true,
    validators: {
      required: null,
    },
    additional: {
      appearance: 'fill',
    },
  }),

  new DynamicRadioGroupModel<string>({
    id: 'gender',
    label: 'Gender *',
    options: [
      { value: 'f', label: 'Female' },
      { value: 'm', label: 'Male' },
    ],
    required: true,
    validators: {
      required: null,
    },
  }),

  new DynamicSelectModel<string>({
    id: 'favoriteColor',
    label: 'Favorite Color',
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
    placeholder: 'Select a color',
    required: true,
    validators: {
      required: null,
    },
    additional: {
      appearance: 'fill',
    },
  }),

  new DynamicSelectModel<string>({
    id: 'favoriteFruits',
    label: 'Favorite Fruits',
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
    multiple: true,
    placeholder: 'Select your favorite fruits',
    required: true,
    validators: {
      required: null,
    },
    additional: {
      appearance: 'fill',
    },
  }),

  new DynamicTextAreaModel({
    id: 'comment',
    hint: '200 characters maximum',
    label: 'Comment',
    placeholder: 'Enter comment',
    required: true,
    rows: 4,
    validators: {
      maxLength: 200,
      required: null,
    },
    additional: {
      appearance: 'fill',
      autosize: true,
      autosizeMinRows: 4,
      autosizeMaxRows: 8,
    },
  }),

  new DynamicSwitchModel({
    id: 'newsletter',
    hint: 'You will receive newsletters about new functionalities, events and promotions',
    offLabel: 'Keep me informed about the product',
    onLabel: 'Keep me informed about the product',
  }),

  new DynamicInputModel({
    id: 'newsletterEmail',
    label: 'Email Address',
    placeholder: 'Enter email',
    relations: [
      {
        match: MATCH_REQUIRED,
        when: [
          {
            id: 'newsletter',
            value: true,
          },
        ],
      },
      {
        match: MATCH_DISABLED, // MATCH_HIDDEN doesn't work has per v8.1.1
        when: [
          {
            id: 'newsletter',
            value: false,
          },
        ],
      },
    ],
    validators: {
      pattern: emailRegexp,
    },
    errorMessages: {
      pattern: 'Please enter a valid email(example@domain.com)',
    },
    additional: {
      appearance: 'fill',
    },
  }),

  new DynamicCheckboxModel({
    id: 'terms',
    hint: 'In order to proceed, please accept terms',
    label: 'I Accept Legal Terms',
    required: true,
    validators: {
      pattern: 'true',
    },
    errorMessages: {
      pattern: 'You must accept the terms to continue',
    },
  }),
];
