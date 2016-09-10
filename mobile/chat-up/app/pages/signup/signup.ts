import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {LoginService} from "../login/services/login.service";
import {LoginPage} from "../login/login";

@Component({
  templateUrl: 'build/pages/signup/signup.html',
  providers: [LoginService]
})
export class SignupPage {

  public signupModel = {
    email: '',
    userName: '',
    password: '',
    confirmPassword: ''
  }

  constructor(private navCtrl: NavController, private loginService: LoginService) {
  }

  public showLogin(): void {
    this.navCtrl.setRoot(LoginPage);
  }

  public signupLocal(): void {
    this.loginService.signupLocal(this.signupModel.email, this.signupModel.userName, this.signupModel.password)
      .then(result => {
        if(result.isSuccessful) {
          this.navCtrl.push(TabsPage);
        }
      });
  }
}
