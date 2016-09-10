import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  /* tslint:disable no-unused-variable */
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  /* tslint:enable no-unused-variable */
}
