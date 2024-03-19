import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/shared/orders.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  constructor(private _router :ActivatedRoute,private _orderservice:OrdersService ,private formBuilder:FormBuilder){

  }
  idCart!:any;
  ngOnInit(): void {
    this._router.paramMap.subscribe({
      next:(param)=>{
       this.idCart= param.get('id');
       console.log(this.idCart);
      }
    })
    
  }
  
  orederDetails:FormGroup=this.formBuilder.group({
    details:[''],
    phone:[''],
    city:['']
  });
  cashOrder(){
    console.log(this.orederDetails.value);

     this._orderservice.CreateCashOrder(this.idCart,this.orederDetails.value).subscribe({
      next:(response)=>{
      console.log(response);
      }
     })
  }
  checkOut(){
    this._orderservice.createOnlinePayment(this.idCart,this.orederDetails.value).subscribe({
      next:(response)=>{
       console.log(response);
       window.open(response.session.url,"_self");
      }
    })
  }



}
