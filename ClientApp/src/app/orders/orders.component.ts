import { OrdersService } from './../services/orders.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: any;
  loading=true;
  newOrders:any;
  ordersSwitch=false;
  currentYear:any;

  constructor(private ordersService: OrdersService) { };

  ngOnInit(): void {
    this.currentYear  = new Date().getFullYear();
    this.ordersService.GetOrders().subscribe((o: any) => {
      this.orders = o;
      this.newOrders=o.filter((o:any)=>o.status=='nová');
      this.loading = false;
    })    
  }
  search(input:any)
  {
    this.ordersService.GetOrdersForYear(this.currentYear)
    .subscribe((r:any) => {
      this.orders=r;      
      const inputUp = input.toUpperCase();
      this.orders = this.orders.filter((o: any) => o.fullName.toUpperCase().includes(inputUp));
    });
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
    const i = this.newOrders.indexOf(order, 0);
    this.newOrders.splice(i,1);
    order.status="expedováno";
    this.ordersService.UpdateOrder(order,order.id)
    .subscribe();
  }
}
