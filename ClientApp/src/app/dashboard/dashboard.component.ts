import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  loading=true;

  orders:any;
  user:any;

  year:any;
  totalThisMonth:any;
  thisYearOrders:any;
  

  constructor(public service: AuthService, private ordersService: OrdersService) { }

  //nutno dodělat query
  ngOnInit(): void {
    this.year=0;
    this.user = this.service.getcurrentUser();
    this.ordersService.GetOrders(this.year)
    .subscribe((r:any)=>{
      this.orders=r.filter((o:any)=>o.email==this.user.Email);
      this.totalThisMonth=this.summarize(this.orders);
      this.loading=false;
    });
    
  }
  summarize(r:any) {
    let total = r.reduce((ac: any, currentPrize: { totalPrize: any; }) => {
           return ac + currentPrize.totalPrize
    }, 0);
    return total;
  }

}
