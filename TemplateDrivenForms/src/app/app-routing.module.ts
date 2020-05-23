import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tdf1Component } from './tdf1/tdf1.component';
import { Tdf2Component } from './tdf2/tdf2.component';
import { Tdf3Component } from './tdf3/tdf3.component';
import { Tdf4Component } from './tdf4/tdf4.component';
import { TdfValidaion1Component } from './tdf-validaion1/tdf-validaion1.component';
import { TdfValidation2Component } from './tdf-validation2/tdf-validation2.component';

const routes: Routes = [
  { path: 'TDF1Comp', component: Tdf1Component },
  { path: 'TDF2Comp', component: Tdf2Component },
  { path: 'TDF3Comp', component: Tdf3Component },
  { path: 'TDF4Comp', component: Tdf4Component },
  { path: 'TDFValidation1', component: TdfValidaion1Component },
  { path: 'TDFValidation2', component: TdfValidation2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
