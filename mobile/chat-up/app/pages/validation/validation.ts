
import {FormGroup} from "@angular/forms";
export class ValidationPage {

  form: FormGroup;

  formErrors = {};
  validationMessages = {
    _default: 'This field is invalid'
  };

  buildForm(): void {
    this.form.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data?: any): void {
    if (!this.form) {
      return;
    }
    const form = this.form;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = [];
      const control = form.find(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          const message = messages[key] || this.validationMessages._default || 'This field is invalid';
          this.formErrors[field].push(message);
        }
      }
    }
  }
}
