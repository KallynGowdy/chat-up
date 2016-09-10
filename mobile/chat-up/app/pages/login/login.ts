import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {LoginService} from './services/login.service';
import {SignupPage} from '../signup/signup';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {ValidationPage} from '../validation/validation';
import {ValidationLabel} from '../../components/validation-label/validation-label';
import * as ExtraValidators from '../../common/validation';

@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [LoginService],
  directives: [ValidationLabel]
})
export class LoginPage extends ValidationPage {

  email: string = '';
  password: string = '';

  formErrors = {
    email: [],
    password: []
  };

  submitErrors = [];

  validationMessages = {
    email: {
      required: 'Your email address is required.',
      email: 'Please enter a valid email address'
    },
    password: {
      required: 'Your password is required.'
    },
    _default: 'This field is invalid'
  };

  constructor(private navCtrl: NavController, private loginService: LoginService, private builder: FormBuilder, private loadingCtrl: LoadingController) {
    super();
  }

  buildForm(): void {
    this.form = this.builder.group({
      email: [this.email,
        [Validators.required, ExtraValidators.email]
      ],
      password: [this.password, Validators.required]
    });
    super.buildForm();
  }

  public loginLocal(): void {
    let loader = this.loadingCtrl.create({
      content: 'Signing In...'
    });
    loader.present();
    this.loginService.loginLocal(this.email, this.password)
      .then(result => {
        loader.destroy();
        if (result.isSuccessful) {
          this.navCtrl.push(TabsPage);
        } else {
          // Log Error
          this.submitErrors = result.messages.map(m => m.toString());
        }
      });
  }

  public showSignup(): void {
    this.navCtrl.setRoot(SignupPage);
  }
}
