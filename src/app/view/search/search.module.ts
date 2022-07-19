
import { ErrorHandler, NgModule } from "@angular/core";
import { SearchComponent } from "./search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
    NgxMaskModule.forChild(),
    RouterModule.forChild(route)
  ],
  providers: [
    {
      provide: ErrorHandler,
    },
  ]
})
export class SearchModule { }
