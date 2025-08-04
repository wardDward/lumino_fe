import { CommonModule } from '@angular/common';
import { AuthService } from './../../../../services/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService:AuthService){}
  form = new FormGroup({
    email: new FormControl('', [Validators.required ,Validators.email, Validators.maxLength(100)]),
    password: new FormControl('', [Validators.required ,Validators.maxLength(100)])
  })

  login(){
      this.authService.login(this.form.value).subscribe({
        error: (err) => {console.log("error: " + err);},
        complete: () => {console.log('complete');}
      })
  }
}

