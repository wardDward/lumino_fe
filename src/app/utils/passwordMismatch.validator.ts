import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMismatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('password_confirmation')?.value;

  if (!password || !confirmPassword) return null;

  return password === confirmPassword ? null : { PasswordNoMatch: true };
};
