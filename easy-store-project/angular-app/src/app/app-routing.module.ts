import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentComponent } from './components/payment/payment.component';
import { AddressComponent } from './components/address/address.component';
import { PayComponent } from './components/pay/pay.component';
import { UpdateaddressComponent } from './components/updateaddress/updateaddress.component';

const routes: Routes = [
  { path: 'payment', component: PaymentComponent },
  { path: 'address', component: AddressComponent },
  { path: 'pay', component: PayComponent },
  { path: 'myadd', component: UpdateaddressComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
