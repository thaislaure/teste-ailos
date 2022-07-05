import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialSearchComponent } from './initial-search/initial-search.component';



const routes: Routes = [
  {
    path: '',
    component: InitialSearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
