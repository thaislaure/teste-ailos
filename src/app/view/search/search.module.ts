import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { SearchComponent } from "./search.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, SharedModule],
  providers: [
    {
      provide: ErrorHandler,
    }
  ]
})
export class SearchModule {}
