import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.sass']
})
export class TextInputComponent {
  @Input() label!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() placeholder!: string;

  constructor() { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
