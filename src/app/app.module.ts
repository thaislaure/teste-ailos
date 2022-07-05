import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TimeLineComponent } from "./shared/time-line/time-line.component";
import { HeadComponent } from "./core/head/head.component";
import { MenuComponent } from "./core/menu/menu.component";
import { InitialSearchComponent } from "./initial-search/initial-search.component";



@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MenuComponent,
    InitialSearchComponent,
    TimeLineComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
