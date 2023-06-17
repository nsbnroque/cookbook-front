import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { FormValidatorService } from 'src/app/shared/validators/form-validator.service';
import { InputValidatorService } from 'src/app/shared/validators/input-validator.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.sass']
})
export class RegisterUserComponent implements OnInit{
  
  form!: FormGroup;
  data!: string;

  constructor(
    private builder: FormBuilder,
    private service : UserService,
    private inputValidator : InputValidatorService,
    private formValidator : FormValidatorService,
    private router: Router){}

  ngOnInit(): void {
    this.createForm();
  }

  get field(){
    return this.form.controls;
  }

  createForm(){
    this.form = this.builder.group({
      name: ['', Validators.required],
      email:['', [Validators.required]],
      password: ['', [Validators.required,  Validators.pattern('^(?=.*\\d).{6,15}$')]],
      confirmPassword: ['', [Validators.required, this.inputValidator.passwordMatchValidator]]
    })
  }

  registerUser(){
    this.formValidator.formValidator(this.form);
    if (this.form.invalid){
      return;
    }
    const user = this.form.getRawValue() as User;
    this.saveUser(user);
  }

  saveUser(user:User){
    this.service.saveUser(user).subscribe({
      next: (response : any) => {
        const userId = response.id; 
        this.data = 'User registered!';
        this.router.navigateByUrl(`/${userId}`);
        console.log(response);
      },
      error: (error : any) =>{
        console.log(error);
      }
    })

  }
}
