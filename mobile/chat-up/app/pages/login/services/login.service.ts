import {LoginResult} from './login-result';
import {Injectable, Inject} from '@angular/core';
import {BaseService} from '../../../common/services/base.service';
import {Http} from '@angular/http';
import {IServiceConfig} from '../../../config';
import {ResultStatus} from '../../../common/results/result-status';
import {Auth, User} from '@ionic/cloud-angular';
import {ResultMessage} from "../../../common/results/result-message";
import {ResultMessageLevel} from "../../../common/results/result-message-level";

export interface ILoginService {
  loginWithGoogle(): Promise<LoginResult>;
  loginWithFacebook(): Promise<LoginResult>;
  loginWithTwitter(): Promise<LoginResult>;
  loginWithMicrosoft(): Promise<LoginResult>;
  loginLocal(username: string, password: string): Promise<LoginResult>;
}

@Injectable()
export class LoginService extends BaseService implements ILoginService {
  public auth: Auth;
  public user: User;

  signupLocal(email: string, username: string, password: string): Promise<LoginResult> {
    return this.auth.signup({
      email: email,
      username: username,
      password: password
    }).then(() => {
      return new LoginResult('local', ResultStatus.Success);
    }).catch(() => {
      return new LoginResult('local', ResultStatus.Failure, [new ResultMessage('Signup failed.', ResultMessageLevel.Error)]);
    });
  }

  loginLocal(email: string, password: string): Promise<LoginResult> {
    return this.auth.login('basic', {
      email: email,
      password: password
    }).then(() => {
      return new LoginResult('local', ResultStatus.Success);
    }).catch(() => {
      return new LoginResult('local', ResultStatus.Failure, [new ResultMessage('Login failed.', ResultMessageLevel.Error)]);
    });
  }

  constructor(http: Http, @Inject('APP_CONFIG') config: IServiceConfig, auth: Auth, user: User) {
    super(http, config);
    this.auth = auth;
    this.user = user;
  }

  loginWithGoogle(): Promise<LoginResult> {
    return undefined;
  }

  loginWithFacebook(): Promise<LoginResult> {
    return undefined;
  }

  loginWithTwitter(): Promise<LoginResult> {
    return undefined;
  }

  loginWithMicrosoft(): Promise<LoginResult> {
    return undefined;
  }

}

