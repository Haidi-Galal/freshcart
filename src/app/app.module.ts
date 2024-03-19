import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { RegisterComponent } from './components/register/register.component';
import { BlankComponent } from './components/blank/blank.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { TexttransformPipe } from './texttransform.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { OrderdetailsComponent } from './components/orderdetails/orderdetails.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { MyHttpInterceptor } from './my-http.interceptor';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { WhishlistComponent } from './components/whishlist/whishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavAuthComponent,
    NotfoundComponent,
    ProductsComponent,
    ProductdetailsComponent,
    RegisterComponent,
    BlankComponent,
    SearchPipe,
    TexttransformPipe,
    OrderdetailsComponent,
    AllordersComponent,
    ForgotpasswordComponent,
    WhishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(), // ToastrModule added

    
    
  ],
  providers: [
  {provide:HTTP_INTERCEPTORS,
    useClass:MyHttpInterceptor,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
