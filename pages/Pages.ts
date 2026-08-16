import { Page } from '@playwright/test';
import { Loginpage } from './Loginpage';
import { ContextMenu } from './ContextMenu';
//import { HomePage } from './HomePage';

export class Pages {
  readonly loginPage: Loginpage;
  readonly contextMenu: ContextMenu;
  
 // readonly homePage: HomePage;

  constructor(page: Page) {
    this.loginPage = new Loginpage(page);
    this.contextMenu = new ContextMenu(page);
  }
}