import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Component({
    templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

    public model = {
        userName: '',
        password: ''
    };

    constructor(private navCtrl: NavController) {
    }

    public login(): void {
        this.navCtrl.push(TabsPage);
    }
}
