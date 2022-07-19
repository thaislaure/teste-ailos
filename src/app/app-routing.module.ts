import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
 //   loadChildren: () => import('./view/search/search.module').then(m => m.SearchModule)
  { path: 'home', loadChildren: () => import('./view/search/search.module').then(m => m.SearchModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
