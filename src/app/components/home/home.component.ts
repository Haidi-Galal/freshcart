import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/cart.service';
import { CategoriesService } from 'src/app/shared/categories.service';
import { Categories } from 'src/app/shared/interfaces/categories';
import { Products } from 'src/app/shared/interfaces/products';
import { ProductsService } from 'src/app/shared/products.service';
import { WhishlistService } from 'src/app/shared/whishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _products:ProductsService,private _categoris:CategoriesService,private _cart:CartService,private _toastr:ToastrService, private _whishlistService:WhishlistService){


  }
  searchInput:string='';
  products: Products[]=[] ;
  categories:Categories[]=[];
  categoriesOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  mainOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay:true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
   items:1,
    nav: true
  }
  productsIds:string[]=[];
  ngOnInit(): void {
  this._categoris.getCategories().subscribe({
  next:(response) =>{
    console.log("categories ...");
    console.log(response.data);
    this.categories=response.data;
  } 
  })
   this._products.getProducts().subscribe({
    next:(response)=>{
      this.products=response.data;
      console.log(response.data);
      
    },
    error:(err)=>{
      console.log(err);
    }
   });
   this._whishlistService.getUserWhishList().subscribe({
    next:(response)=>{
      this.productsIds=  response.data.map((item:any)=>{
       return item._id;
      })
     console.log("dataaaa", response.data);
    }
   })
    
  }
  addProductToCart(id:string){
    this._cart.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._toastr.success(response.message);
        console.log("carrrrt")

      }
    });
  }
  addproductToFav(id:string){
    this._whishlistService.addProductToWhishList(id).subscribe({
      next:(response)=>{
        
        this.productsIds=response.data;
        
        console.log(this.productsIds);
        this._toastr.success(response.message);

      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  removeProductFromFav(id:string){
    this._whishlistService.removeProductFromWishList(id).subscribe({
      next:(response)=>{
        this.productsIds=response.data;
        console.log(response);
        this._toastr.success(response.message);

      }
    })
  }
}

