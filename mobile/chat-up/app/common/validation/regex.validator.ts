import {ValidatorFn, AbstractControl} from '@angular/forms';

/**
 * Defines a validator that validates a control based on whether the control value matches the regex's value.
 * @param regex The regex that the control value has to match.
 * @param name The name of the validation.
 * @returns {(control:AbstractControl)=>{}}
 */
export function regex(regex: RegExp, name: string = 'regex'): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const value = control.value;
    const match = regex.test(value);
    return !match ? {[name]: value} : null;
  };
}
