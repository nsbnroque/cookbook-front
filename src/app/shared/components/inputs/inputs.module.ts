import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextAreaInputComponent } from './text-area-input/text-area-input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { SelectInputComponent } from './select-input/select-input.component';



@NgModule({
  declarations: [
    TextInputComponent,
    TextAreaInputComponent,
    NumberInputComponent,
    PasswordInputComponent,
    SelectInputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    TextInputComponent,
    TextAreaInputComponent,

  ]
})
export class InputsModule { }
