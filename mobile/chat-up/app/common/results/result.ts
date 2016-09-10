
import {ResultStatus} from "./result-status";
import {ResultMessage} from "./result-message";
export class Result {
  public status: ResultStatus;
  public get isSuccessful(): boolean {
    return this.status === ResultStatus.Success;
  }
  public get isFailure(): boolean {
    return this.status === ResultStatus.Failure;
  }

  public messages: ResultMessage[] = [];
}
