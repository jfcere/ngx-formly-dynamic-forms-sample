import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { DISABLED_MATCHER, DynamicFormsCoreModule, HIDDEN_MATCHER, REQUIRED_MATCHER } from '@ng-dynamic-forms/core';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';
import { TranslateModule } from '@ngx-translate/core';

import { DynamicFormsComponent } from './dynamic-forms.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsMaterialUIModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    TranslateModule.forChild(),
  ],
  declarations: [DynamicFormsComponent],
  exports: [DynamicFormsComponent],
  providers: [
    DISABLED_MATCHER,
    HIDDEN_MATCHER,
    REQUIRED_MATCHER,
  ],
})
export class AppDynamicFormsModule { }
