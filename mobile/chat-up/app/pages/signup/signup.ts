import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {LoginService} from '../login/services/login.service';
import {LoginPage} from '../login/login';
import {FormBuilder, Validators} from '@angular/forms';
import {ValidationPage} from '../validation/validation';
import {ValidationLabel} from '../../components/validation-label/validation-label';
import * as ExtraValidators from '../../common/validation';
import {HomePage} from "../home/home";

@Component({
  templateUrl: 'build/pages/signup/signup.html',
  providers: [LoginService],
  directives: [ValidationLabel]
})
export class SignupPage extends ValidationPage {

  email: string = '';
  userName: string = '';
  password: string = '';
  confirmPassword: string = '';

  formErrors = {
    email: [],
    username: [],
    password: [],
    confirmPassword: []
  };
  submitErrors = [];

  validationMessages = {
    email: {
      required: 'You need to provide an email address',
      email: 'You need to provide a valid email'
    },
    username: {
      required: 'You need to provide a username',
      minlength: 'Your username must be at least 3 characters long',
      number: 'Your username must start with a letter'
    },
    password: {
      required: 'You need to provide a password',
      minlength: 'Your password must be at least 8 characters long',
      digit: 'Your password must contain at least 1 number'
    },
    confirmPassword: {
      required: 'You need to confirm your password',
      'equals-password': 'Your passwords do not match'
    },
    _default: 'This field is invalid'
  };

  constructor(private navCtrl: NavController, private loginService: LoginService, private fb: FormBuilder, private loaderCtrl: LoadingController) {
    super();
  }

  buildForm(): void {
    this.form = this.fb.group({
      email: [this.email,
        [Validators.required, ExtraValidators.email]
      ],
      username: [this.userName,
        [Validators.required, ExtraValidators.regex(/^[a-zA-Z]\w*$/, 'number'), Validators.minLength(3)]
      ],
      password: [this.password,
        [Validators.required, ExtraValidators.regex(/\d/, 'digit'), Validators.minLength(8)]
      ],
      confirmPassword: [this.confirmPassword,
        [Validators.required, ExtraValidators.equals(() => this.form, 'password')]
      ]
    });
    super.buildForm();
  }

  showLogin(): void {
    this.navCtrl.setRoot(LoginPage);
  }

  signupLocal(): void {
    let loader = this.loaderCtrl.create({
      content: 'Creating your account...'
    });
    loader.present();
    this.loginService.signupLocal(this.email, this.userName, this.password)
      .then(result => {
        loader.destroy();
        if (result.isSuccessful) {
          this.navCtrl.setRoot(HomePage);
        } else {
          this.submitErrors = result.messages.map(m => m.toString());
        }
      });
  }
}
