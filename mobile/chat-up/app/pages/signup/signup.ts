import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {LoginService} from '../login/services/login.service';
import {LoginPage} from '../login/login';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {ValidationPage} from '../validation/validation';
import {ValidationLabel} from '../../components/validation-label/validation-label';
import * as ExtraValidators from '../../common/validation';

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
    email: '',
    userName: '',
    password: '',
    confirmPassword: ''
  };

  validationMessages = {
    email: {
      required: 'You need to provide an email address',
      email: 'You need to provide a valid email'
    },
    userName: {
      required: "You need to provide a Username",
      minlength: "Your username must be at least 3 characters long"
    },
    password: {
      required: 'You need to provide a password',
      minlength: 'Your password must be at least 8 characters long'
    },
    confirmPassword: {
      required: 'You need to confirm your password',
      'equals-password': 'Your passwords do not match'
    }
  };

  constructor(private navCtrl: NavController, private loginService: LoginService, private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      email: [this.email,
        [Validators.required, ExtraValidators.email]
      ],
      userName: [this.userName,
        [Validators.required, Validators.minLength(3)]
      ],
      password: [this.password,
        [Validators.required, Validators.minLength(8)]
      ],
      confirmPassword: [this.confirmPassword,
        [Validators.required, ExtraValidators.equals(() => this.form, 'password')]
      ]
    });
    super.buildForm();
  }

  public showLogin(): void {
    this.navCtrl.setRoot(LoginPage);
  }

  public signupLocal(): void {
    this.loginService.signupLocal(this.email, this.userName, this.password)
      .then(result => {
        if (result.isSuccessful) {
          this.navCtrl.push(TabsPage);
        }
      });
  }
}
