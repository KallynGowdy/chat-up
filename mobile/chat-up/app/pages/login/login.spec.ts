import {LoginPage} from './login';
import {FormBuilder} from '@angular/forms';

describe('LoginPage', () => {
  describe('buildFor()', () => {
    it('should set form to a value', () => {
      let subject = new LoginPage(null, null, new FormBuilder());

      subject.buildForm();

      chai.expect(subject.form).to.not.be.null;
    });
  });
});
