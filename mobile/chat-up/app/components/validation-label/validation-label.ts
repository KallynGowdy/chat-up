
import {Component, Input} from "@angular/core";

@Component({
  selector: 'validation-label',
  templateUrl: 'build/components/validation-label/validation-label.html'
})
export class ValidationLabel {
  @Input() error: string;
}
