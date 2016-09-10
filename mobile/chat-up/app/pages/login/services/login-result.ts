import {Result} from '../../../common/results/result';
import {ResultStatus} from '../../../common/results/result-status';
export class LoginResult extends Result {
  public provider: string;

  constructor(provider: string, status: ResultStatus) {
    super();
    this.provider = provider;
    this.status = status;
  }
}
