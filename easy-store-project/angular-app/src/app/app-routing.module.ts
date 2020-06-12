import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';

const routes: Routes = [
  {path: 'home', component: ShowproductsComponent},
  {path: 'manager', component: AddproductsComponent},
  {path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
