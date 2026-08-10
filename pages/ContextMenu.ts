import {Page,Locator} from "@playwright/test";

export class ContextMenu{
    readonly page:Page;
    readonly Search:Locator;
    readonly Admin:Locator;
    readonly PIM: Locator;
    readonly Leave: Locator;
    readonly Time: Locator;

constructor(page: Page) {
    this.page = page;
    // Example locator by placeholder
    this.Search = page.getByPlaceholder("Search");
    this.Admin = page.locator("//span[normalize-space()='Admin']");
    this.PIM = page.locator("//span[normalize-space()='PIM']");
    this.Leave= page.locator("//span[normalize-space()='Leave']");
    this.Time= page.locator("//span[normalize-space()='Time']");
}

async enterSearch(text:string){
    await this.Search.fill(text);
}
async clickAdmin(){
    await this.Admin.click();
}
async clickPIM(){
    await this.PIM.click();
}
async clickLeave(){
    await this.Leave.click();
}
async clickTime(){
    await this.Time.click();
}
}