import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialResultComponent } from './initial/initial-result/initial-result.component';
import { InitialSearchComponent } from './initial/initial-search/initial-search.component';


const routes: Routes = [
  {
    path: '',
    component: InitialSearchComponent
  },
  {
    path: 'result',
    component: InitialResultComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
