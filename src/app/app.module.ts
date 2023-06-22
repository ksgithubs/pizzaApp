import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { OrderModule } from 'ngx-order-pipe';
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductComponent,
    HomeComponent,
    ContactusComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    OrderModule

  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
