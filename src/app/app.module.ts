import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//THIRD PARTY----------------------------------------------
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// COMPONENTS ----------------------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { ForRentComponent } from './for-rent/for-rent.component';
import { PageNotFoundComponent } from './not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ForSaleComponent,
    ForRentComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
