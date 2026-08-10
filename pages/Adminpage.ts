import { Page,Locator } from "playwright";

export class Adminpage{
   readonly page:Page;
   readonly username:Locator;
   readonly userRoleDropdown:Locator;

   constructor(page:Page){
    this.page=page;
    this.username=page.locator("(//input[@class='oxd-input oxd-input--active'])[2]");

    this.userRoleDropdown=page.locator("(//*[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[1]");

   }

   async selectuserRoleDropdown(text:string){

    await this.userRoleDropdown.click();
   }

}