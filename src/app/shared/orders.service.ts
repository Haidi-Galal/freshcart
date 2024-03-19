import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  headers:any={
    token:localStorage.getItem('etoken')
  }
  userData:any=jwtDecode(localStorage.getItem('etoken')!);
  constructor(private http:HttpClient) { }

  CreateCashOrder(cartId:number,shippingDetails:object):Observable<any>{
 return this.http.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
  {
    shippingAdress:shippingDetails
  },
  {
   headers: this.headers
  }
  )
  }
  createOnlinePayment(cartId:number,shippingDetails:object):Observable<any>{ //you can remove token as interceptor is handled 
  return   this.http.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://haidi-galal.github.io/freshcart/`,
    {
     shippingDetails:shippingDetails 
    },
    {
      headers:this.headers
    }
    )
  }
  getOrderDetails():Observable<any>{
  return  this.http.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${this.userData.id}`);
  }
}
