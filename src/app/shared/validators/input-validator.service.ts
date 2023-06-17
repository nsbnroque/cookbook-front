import { Injectable } from '@angular/core';
import { ValidatorFn, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InputValidatorService {

  constructor() { }

   passwordMatchValidator(control: AbstractControl): {[key: string] : boolean} | null{
      const passwordControl = control.value;
      const confirmPasswordControl = control.parent?.get('confirmPassword')?.value;
      if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
        return { passwordMismatch: true };
      } 
      return null;
    };
  }

