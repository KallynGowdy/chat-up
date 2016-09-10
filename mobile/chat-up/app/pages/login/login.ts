import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {LoginService} from './services/login.service';
import {SignupPage} from '../signup/signup';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {ValidationPage} from '../validation/validation';
import {ValidationLabel} from '../../components/validation-label/validation-label';

@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [LoginService],
  directives: [ValidationLabel]
})
export class LoginPage extends ValidationPage {

  username: string;
  password: string;
  form: FormGroup;

  formErrors = {
    username: [],
    password: []
  };

  validationMessages = {
    username: {
      required: 'Your username is required.'
    },
    password: {
      required: 'Your password is required.'
    },
    _default: 'This field is invalid'
  };

  constructor(private navCtrl: NavController, private loginService: LoginService, private builder: FormBuilder) {
    super();
  }

  buildForm(): void {
    this.form = this.builder.group({
      username: [this.username, Validators.required],
      password: [this.password, Validators.required]
    });
    super.buildForm();
  }

  public loginLocal(): void {
    this.loginService.loginLocal(this.username, this.password)
      .then(result => {
        if (result.isSuccessful) {
          this.navCtrl.push(TabsPage);
        } else {
          // Log Error
        }
      });
  }

  public showSignup(): void {
    this.navCtrl.setRoot(SignupPage);
  }
}
