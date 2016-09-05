import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Component({
    templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

    model = {
        userName: '',
        password: ''
    };

    constructor(private navCtrl: NavController) {
    }

    login() {
        this.navCtrl.push(TabsPage);
    }
}
