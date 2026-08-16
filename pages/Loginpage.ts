import { Page,Locator } from "@playwright/test";

export class Loginpage{
    readonly page:Page;
    readonly Username: Locator;
    readonly Password: Locator;
    readonly LoginButton: Locator;
    readonly DropdownMenu: Locator;
    readonly LogOutButton: Locator;

    constructor( page:Page){

        this.page=page;
        this.Username=page.locator("//input[@name='username']");
        this.Password= page.locator("//input[@type='password']");
        this.LoginButton=page.locator("//button[@type='submit']");
        this.DropdownMenu= page.locator("//*[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']");
        this.LogOutButton = page.locator("//a[normalize-space(.)='Logout']");
    }

    async goto(){
        await this.page.goto('/web/index.php/auth/login');
    }

    async Login(username:string, password:string){
        await this.Username.fill(username);
        await this.Password.fill(password);
        await this.LoginButton.click();
    }
    async Dropdownmenu(){
        await this.DropdownMenu.click();
    }
    async LogoutButton(){
        await this.LogOutButton.click();
    }

}
