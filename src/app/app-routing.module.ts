import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForSaleComponent } from './for-sale/for-sale.component';
import { PageNotFoundComponent } from './not-found.component';
import { ForRentComponent } from './for-rent/for-rent.component';

const routes: Routes = [
  { path: '', redirectTo: '/forSale', pathMatch: 'full' },
  { path: 'forSale', component: ForSaleComponent },
  { path: 'forRent', component: ForRentComponent },
 // { path: 'currencyConverter', component: CurrencyConverterComponent },
  //{ path: 'historicalConvertor', component: HistoricalConvertorComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
