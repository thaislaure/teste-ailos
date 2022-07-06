
import { ErrorHandler, NgModule } from "@angular/core";
import { SearchComponent } from "./search.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { NgxMaskModule } from "ngx-mask";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const route: Routes = [
  { path: '', component: SearchComponent }
]

@NgModule({
  declarations: [SearchComponent],
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild(),
    RouterModule.forChild(route)
  ],
  providers: [
    {
      provide: ErrorHandler,
    },
  ],
  exports: [SearchComponent],
})
export class SearchModule { }
