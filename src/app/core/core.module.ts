import { NgModule } from "@angular/core";
import { HeadComponent } from "./head/head.component";
import { MenuComponent } from "./menu/menu.component";
import { BaseboardComponent } from "./baseboard/baseboard.component";

@NgModule({
  imports: [],

  declarations: [
    HeadComponent,
    MenuComponent,
    BaseboardComponent,
  ],
  exports: [
    HeadComponent,
    MenuComponent,
    BaseboardComponent,
  ],
})
export class CoreModule {}
