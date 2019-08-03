import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatNativeDateModule } from '@angular/material';
import { FORMLY_CONFIG, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyMatSliderModule } from '@ngx-formly/material/slider';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { FormlyComponent } from './formly.component';
import { registerTranslateExtension } from './i18n';
import { FlexLayoutType } from './types';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormlyModule.forRoot({
      types: [
        { name: 'flex-layout', component: FlexLayoutType },
      ],
    }),
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    FormlyMatSliderModule,
    FormlyMatToggleModule,
    MatButtonModule,
    MatNativeDateModule,
    TranslateModule.forChild(),
  ],
  exports: [FormlyComponent],
  declarations: [
    FlexLayoutType,
    FormlyComponent,
  ],
  providers: [
    {
      provide: FORMLY_CONFIG,
      useFactory: registerTranslateExtension,
      deps: [TranslateService],
      multi: true,
    },
  ],
})
export class AppFormlyModule { }
