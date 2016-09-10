import {AbstractControl} from '@angular/forms';

/**
 * Defines a validator that checks for a valid email.
 * @returns {(control:AbstractControl)=>{}}
 */
export function email(control: AbstractControl): {[key: string]: any} {
  const email = control.value;
  const at = email.indexOf('@');
  const lastDot = email.indexOf('.');
  const valid = at > 0 && lastDot > at + 1;
  return !valid ? {'email': {email}} : null;
}
