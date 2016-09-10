import {ResultMessageLevel} from "./result-message-level";
export class ResultMessage {
  public message: string;
  public level: ResultMessageLevel;
  public data: any;
  constructor(message: string, level: ResultMessageLevel, data: any) {
    this.message = message;
    this.level = level;
    this.data = data;
  }

  public toString(): string {
    return this.message;
  }
}
