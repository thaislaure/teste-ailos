import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TimeLineComponent } from "./time-line/time-line.component";
import { ControlErroComponent } from "./control-erro/control-erro.component";

@NgModule({
  declarations: [
    TimeLineComponent,
    ControlErroComponent
  ],
  imports: [BrowserModule],
  exports: [TimeLineComponent, ControlErroComponent]
})
export class SharedModule {}
