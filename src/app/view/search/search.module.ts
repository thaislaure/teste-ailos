import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { SearchComponent } from "./search.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { NgxMaskModule } from "ngx-mask";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [SearchComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    HttpClientModule,
    NgxMaskModule.forChild(),
  ],
  providers: [
    {
      provide: ErrorHandler,
    },
  ],
  exports: [SearchComponent],
})
export class SearchModule {}
