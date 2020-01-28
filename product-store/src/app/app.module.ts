import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './shared/productservice';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EstimatedDeliveryDatePipe } from './pipes/estimed-delivery-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EstimatedDeliveryDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
