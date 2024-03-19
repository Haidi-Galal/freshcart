import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/cart.service';
import { Products } from 'src/app/shared/interfaces/products';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  constructor(private _Activatedroute:ActivatedRoute,private _productservice:ProductsService,private _cart:CartService,private _toastr:ToastrService){


  }
  productDetails:Products={} as Products;
//  id:string="";
imgSlider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
 items:1,
  nav: true
}
  ngOnInit(): void {
    
   this._Activatedroute.paramMap.subscribe({
    next:(params)=>{
       let id:any=params.get('id');
      //  this.id=id;
      this._productservice.getProductsDetails(id).subscribe({
        next:(response)=>{
          // console.log(response);
          this.productDetails=response.data;
          console.log("details",this.productDetails);
        },
        error:(err)=>{
          console.log(err);
        }

      })
    }
   })
  
    
   
  }
  addProductToCart(id:string){
    this._cart.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._toastr.success(response.message);
        
      }
    });
  }
   
}
