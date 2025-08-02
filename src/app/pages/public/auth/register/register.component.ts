import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { passwordMismatchValidator } from '../../../../utils/passwordMismatch.validator';
@Component({
  selector: 'app-register',
  imports: [CommonModule ,RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  form = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    last_name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    middle_name: new FormControl('', [Validators.maxLength(100)]),
    suffix: new FormControl('', [Validators.maxLength(100)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
    contact: new FormControl('', [Validators.required, Validators.maxLength(13)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    password_confirmation: new FormControl('', [Validators.required, Validators.maxLength(100)])
  }, {validators: passwordMismatchValidator})

  register() {
    this.form.markAllAsTouched()
  }

}



export interface User {
  first_name: string;
  last_name: string;
  middlename?: string;
  suffix?: string;
  email: string;
  contact: string
  password: string;
  password_confirmation: string;
}

