import { NgModule } from "@angular/core";
import { HeadComponent } from "./head/head.component";
import { MenuComponent } from "./menu/menu.component";
import { BaseboardComponent } from "./baseboard/baseboard.component";

@NgModule({
  declarations: [
    HeadComponent,
    MenuComponent,
    BaseboardComponent,
  ],
  exports: [
    MenuComponent,
    HeadComponent,
    BaseboardComponent
  ]
})
export class CoreModule {}
