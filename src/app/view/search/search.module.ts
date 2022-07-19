
import { ErrorHandler, NgModule } from "@angular/core";
import { SearchComponent } from "./search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxMaskModule } from "ngx-mask";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";
import { SearchRoutingModule } from "./search-routing.module";


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
    SharedModule
  ],
  providers: [
    {
      provide: ErrorHandler,
    },
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
