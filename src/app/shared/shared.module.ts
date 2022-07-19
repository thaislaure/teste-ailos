import { NgModule } from "@angular/core";
import { TimeLineComponent } from "./time-line/time-line.component";
import { ControlErroComponent } from "./control-erro/control-erro.component";
import { NgxMaskModule } from "ngx-mask";

@NgModule({
  declarations: [TimeLineComponent, ControlErroComponent],
  imports: [ NgxMaskModule.forChild()],
  exports: [TimeLineComponent, ControlErroComponent],
})
export class SharedModule {}
