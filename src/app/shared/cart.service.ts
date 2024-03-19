import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    headers:any={
      token:localStorage.getItem("etoken")
    }
  constructor(private http:HttpClient) { }

  addToCart(id:string):Observable<any>{
   return  this.http.post('https://ecommerce.routemisr.com/api/v1/cart',{productId:id},{
      headers:this.headers
    })
  }
  getUserCart():Observable<any>{ //hena el mafroud ab3t el token bs ana hndlt el interceptor
   return this.http.get('https://ecommerce.routemisr.com/api/v1/cart' )
  }
  removeSpecificItem(id:string):Observable<any>{
   return  this.http.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
   {headers:this.headers}
   )
  }
  updateSpecificProduct(id:string,count:number):Observable<any>{//momken ashel el token 
    return this.http.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
    count:count
    },
    {
      headers:this.headers
    },
   

    
    )
  }
}
