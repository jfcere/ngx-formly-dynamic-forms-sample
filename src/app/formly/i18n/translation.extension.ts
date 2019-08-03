import { FormlyExtension, FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';

export class TranslateExtension implements FormlyExtension {
  constructor(
    private translate: TranslateService,
  ) { }

  prePopulate(field: FormlyFieldConfig) {
    const to = field.templateOptions || {};
    // validate if should translate OR already translated
    if (!to.translate || to._translated) {
      return;
    }
    to._translated = true;
    // templateOptions
    field.expressionProperties = {
      ...(field.expressionProperties || {}),
      ...(this.translateTemplateOptions(to, 'description')),
      ...(this.translateTemplateOptions(to, 'label')),
      ...(this.translateTemplateOptions(to, 'placeholder')),
      ...(this.translateTemplateOptions(to, 'selectAllOption')),
    };
    // validation.messages
    if (!field.validation || !field.validation.messages) {
      return;
    }
    field.expressionProperties = {
      ...(field.expressionProperties || {}),
      ...(this.translateValidationMessages(field.validation.messages as { [key: string]: string })),
    };
  }

  private translateTemplateOptions(to: FormlyTemplateOptions, toPropertyName: string) {
    const toPropertyValue = to[toPropertyName];
    return toPropertyValue != null
      ? { [`templateOptions.${toPropertyName}`]: this.translate.stream(toPropertyValue) }
      : {};
  }

  private translateValidationMessages(vm: { [key: string]: string }) {
    return Object.keys(vm)
      .reduce((accumulated, key) => ({
        ...accumulated,
        [`validation.messages.${key}`]: this.translate.stream(vm[key]),
      }), {});
  }
}

export function registerTranslateExtension(translate: TranslateService) {
  return {
    extensions: [{
      name: 'translate',
      extension: new TranslateExtension(translate),
    }],
  };
}
