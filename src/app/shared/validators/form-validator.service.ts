import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {



  formValidator(form: FormGroup): void {
    Object.keys(form.controls).forEach(key => {
      const control = form.get(key);
      control?.markAsTouched();
      control?.markAsDirty();
      control?.updateValueAndValidity();
    });
  }
}
