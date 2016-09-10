import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {LoginService} from "./services/login.service";
import {SignupPage} from "../signup/signup";
import {Control, ControlGroup} from "@angular/common";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [LoginService]
})
export class LoginPage {

  username: string;
  password: string;
  form: FormGroup;

  formErrors = {
    username: '',
    password: ''
  };

  validationMessages = {
    username: {
      required: 'Your username is required.'
    },
    password: {
      required: 'Your password is required.'
    }
  }

  constructor(private navCtrl: NavController, private loginService: LoginService, private builder: FormBuilder) {
  }

  buildForm(): void {
    this.form = this.builder.group({
      username: [this.username, Validators.required],
      password: [this.password, Validators.required]
    });

    this.form.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onValueChanged(data?: any) {
    if (!this.form) {
      return;
    }
    const form = this.form;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.find(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
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
