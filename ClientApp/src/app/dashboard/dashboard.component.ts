import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  orders:any;
  user:any;

  constructor(public service: AuthService, private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.user = this.service.getcurrentUser();
    this.ordersService.GetOrders()
    .subscribe((r:any)=>{
      this.orders=r.filter((o:any)=>o.email==this.user.Email);     
    });
    
  }

}
