import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';
import { Cart } from 'src/app/shared/interfaces/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit{
  constructor(private _cart:CartService){

  }
  cartData: Cart={} as Cart;
  
  ngOnInit(): void {
    this._cart.getUserCart().subscribe({
      next:(response)=>{
        console.log("hello from cart");
        console.log(response.data);
        this.cartData=response.data;
      }
    })
      

    
  }
  RemoveItem(id:string){
   this._cart.removeSpecificItem(id).subscribe({
    next:(response)=>{
      console.log(response);
     this.cartData= response.data;
    }
   })
  }
  updateCartItem(id:any ,count:number){
    if(count>=1){
      this._cart.updateSpecificProduct(id,count).subscribe({
        next:(response)=>{
         this.cartData=response.data;
        }
       })
    }
    
  }
  


}
