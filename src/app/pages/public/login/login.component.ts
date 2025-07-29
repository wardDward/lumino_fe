import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ValidationComponent } from "../../../common/validation/validation.component";

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, ValidationComponent, ValidationComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.maxLength(100)]),
    password: new FormControl('', [Validators.maxLength(100)])
  })

  get email() {
    return this.form.get("email")
  }

}

