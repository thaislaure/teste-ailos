import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeadComponent } from "./head/head.component";
import { MenuComponent } from "./menu/menu.component";


import { InitialSearchComponent } from "./initial/initial-search/initial-search.component";
import { InitialResultComponent } from "./initial/initial-result/initial-result.component";
import { TimeLineComponent } from './time-line/time-line.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MenuComponent,
    InitialSearchComponent,
    InitialResultComponent,
    TimeLineComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
