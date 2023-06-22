import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
 
  { path: 'product', component: ProductComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contactus', component: ContactusComponent },
  { path: 'about', component: AboutComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
