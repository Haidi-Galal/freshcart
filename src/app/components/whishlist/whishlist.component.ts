import { WhishlistService } from 'src/app/shared/whishlist.service';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/interfaces/products';
import { CartService } from 'src/app/shared/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css']
})
export class WhishlistComponent implements OnInit {

  constructor(private listService: WhishlistService, private _cart:CartService,private _toastr:ToastrService, private _whishlistService:WhishlistService){

  }
  products: Products[]=[] ;
  productsIds:string[]=[];
  ngOnInit(): void {
   this.listService.getUserWhishList().subscribe({
    next:(response)=>{
    console.log(response);
   this.products= response.data;
   this.productsIds=response.data.map((item:any)=>item._id);
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
        console.log(response);
        this.productsIds=response.data;

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
      //  el filter  hena a7san ..
     this.products= this.products.filter((item)=>{
        return this.productsIds.includes(item._id);
      })
        // this.listService.getUserWhishList().subscribe({
        //   next:(response)=>{
        //   console.log(response);
        //  this.products= response.data;
        // //  this.productsIds=response.data.map((item:any)=>item._id);
        //   }
        //  })
      }
    })
  }
  
}
