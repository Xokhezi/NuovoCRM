import { OrdersService } from './../services/orders.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: any;
  newOrders:any;
  ordersSwitch=false;

  constructor(private ordersService: OrdersService) { };

  ngOnInit(): void {
    this.ordersService.GetOrders().subscribe((o: any) => {
      this.orders = o;
      this.newOrders=o.filter((o:any)=>o.status=='nová');
    })    
  }
  switch()
  {
    this.ordersSwitch=!this.ordersSwitch;
  }
  toList(array:any)
  {
    return array.split(";");
  }
  fullfill(order:any)
  {
    this.newOrders.splice(order,1);
    order.status="expedováno";
    this.ordersService.UpdateOrder(order,order.id)
    .subscribe();
  }
}
