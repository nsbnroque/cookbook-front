import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.sass']
})
export class NumberInputComponent {
  @Input() placeholder!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() min = 0;
  @Input() max = 10;
  @Input() step = 1;
  @Input() label!: string;

  constructor() { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
