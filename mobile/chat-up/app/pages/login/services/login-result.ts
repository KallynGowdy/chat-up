import {Result} from '../../../common/results/result';
import {ResultStatus} from '../../../common/results/result-status';
import {ResultMessage} from "../../../common/results/result-message";
export class LoginResult extends Result {
  public provider: string;

  constructor(provider: string, status: ResultStatus, messages?: ResultMessage[]) {
    super();
    this.provider = provider;
    this.status = status;
    this.messages = messages || [];
  }
}
