import { Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'validation',
  imports: [],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.scss'
})
export class ValidationComponent {
  form = input.required<FormGroup>()
  validation = input.required<{ [key: string]: string }>()
  controlName = input.required<string>()

  getValidationErrors(): string|null {
    const form = this.form()
    const control = this.controlName()
    
    if(form.get(control)?.invalid && form.get(control)?.dirty){
      for(const errorKey in this.validation){
        if(form.get(control)?.errors?.[errorKey]){
          return this.validation()[errorKey]
        }
      }
    }
    return null
  }
}

