import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/orders.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent  implements OnInit{
// Item: any;
  constructor(private _order:OrdersService){

  }
  data!:any[];
  ngOnInit(): void {
   this._order.getOrderDetails().subscribe({
    next:(response)=>{
      console.log(response);
     this.data=response;

    }
   })
  }

}
