
import { NgModule } from "@angular/core";
import { TimeLineComponent } from "./time-line/time-line.component";
import { ControlErroComponent } from "./control-erro/control-erro.component";
import { NgxMaskModule } from "ngx-mask";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    TimeLineComponent,
    ControlErroComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forChild()]
})
export class SharedModule {}
