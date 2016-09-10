import {ValidatorFn, AbstractControl, FormGroup} from "@angular/forms";

/**
 * Defines a validator that determines whether the control's value equals the given other control's value.
 * @param form A function that is able to retrieve the form group that the other control is in.
 * @param controlName The name of the other control.
 * @returns {(control:AbstractControl)=>{}}
 */
export function equals(form: () => FormGroup, controlName: string): ValidatorFn {
  return (otherControl: AbstractControl): { [key: string]: any } => {
    const f = form();
    if (f) {
      const expected = f.find(controlName).value;
      const value = otherControl.value;
      const equal = expected === value;
      const key = 'equals-' + controlName;
      return !equal ? {[key]: value} : null;
    }
    return null;
  };
}
