import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Rf1Component } from './rf1/rf1.component';


const routes: Routes = [{path: 'RF1Comp', component: Rf1Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
