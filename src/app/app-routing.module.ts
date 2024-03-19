import { OrderdetailsComponent } from './components/orderdetails/orderdetails.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuardGuard } from './shared/core/auth-guard.guard';
import { BlankComponent } from './components/blank/blank.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { CategoriesModule } from './categories/categories.module';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { WhishlistComponent } from './components/whishlist/whishlist.component';

const routes: Routes = [
  {
    path:'' ,component:NavAuthComponent,children:[
      {
        path:'login' ,component:LoginComponent,title:'login'
        

      },
      {path:'forgotpassword',component:ForgotpasswordComponent},

      {
    path:'register' , component:RegisterComponent,title:'register'

      },
      {
        path:'' ,redirectTo:'register' ,pathMatch:'full'


      }
      

    ]

  }
  ,
  {
   
    path:'' , component:BlankComponent,  canActivate: [authGuardGuard] , children:[
      {
        path:'home' ,component:HomeComponent,title:'home'
      
      },
      {
       path:'order/:id' ,component:OrderdetailsComponent
      },
      {
        path:'allorders' ,component:AllordersComponent
       },
      {
        path:'cart' ,component:CartComponent
      }
      ,
      {
        path:'brands' ,component:BrandsComponent
      },
      {
        path:'categories' , loadChildren:()=> import('./categories/categories.module').then((m)=>m.CategoriesModule)
      },
      {
        path:'products' ,component:ProductsComponent
      },
      {
        path:'details/:id' ,component:ProductdetailsComponent
      }
      ,{
        path:'whishlist' ,component:WhishlistComponent ,title:'whishlist'
      }
    ]
  }
  ,{
    path:"**" ,component:NotfoundComponent, title:'Not found'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
