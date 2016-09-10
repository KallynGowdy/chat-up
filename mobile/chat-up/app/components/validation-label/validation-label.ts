import {Component, Input} from '@angular/core';

@Component({
  selector: 'validation-label',
  templateUrl: 'build/components/validation-label/validation-label.html'
})
export class ValidationLabel {
  @Input() errors: string[] = [];
  @Input() showAll: boolean = false;

  get firstError(): string {
    if (this.errors.length > 0) {
      return this.errors[0];
    } else {
      return '';
    }
  }
}
