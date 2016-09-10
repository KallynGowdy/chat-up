import {CloudSettings} from '@ionic/cloud-angular';
import {provide} from '@angular/core';

export interface IServiceConfig {
  rootUrl: string;
  cloudSettings: CloudSettings;
}

export var defaultConfig: IServiceConfig = {
  rootUrl: 'https://chat-up.kallyngowdy.com',
  cloudSettings: {
    core: {
      app_id: 'ba7baef2'
    }
  }
};

export var CONFIG_PROVIDERS = [
  provide('APP_CONFIG', defaultConfig)
];
