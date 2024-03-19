import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {

  constructor(private http:HttpClient) {
   
   }
   addProductToWhishList(prodctId:string):Observable<any>{
 return    this.http.post('https://ecommerce.routemisr.com/api/v1/wishlist',{
      "productId": prodctId
  })
   }
   removeProductFromWishList(id:string):Observable<any>{
    return this.http.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`)
   }
   getUserWhishList():Observable<any>{
    return this.http.get('https://ecommerce.routemisr.com/api/v1/wishlist');
   }

}
