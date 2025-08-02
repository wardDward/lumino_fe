import { AuthService } from './../../../../services/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ValidationComponent } from '../../../../common/validation/validation.component';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, ValidationComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService:AuthService){}
  form = new FormGroup({
    email: new FormControl('', [Validators.required ,Validators.email, Validators.maxLength(100)]),
    password: new FormControl('', [Validators.required ,Validators.maxLength(100)])
  })

  get email() {
    return this.form.get("email")
  }

  get password(){
    return this.form.get("password")
  }
   
  login(){
// disable the submit button if not filled up the input
    console.log('login test')
    const form = this.form.getRawValue();
    this.authService.login(form)
  }
}

