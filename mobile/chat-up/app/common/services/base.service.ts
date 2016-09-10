import {Http} from '@angular/http';
import {IServiceConfig} from '../../config';

export class BaseService {
  public config: IServiceConfig;
  protected http: Http;

  constructor(http: Http, config: IServiceConfig) {
    this.http = http;
    this.config = config;
  }

}
