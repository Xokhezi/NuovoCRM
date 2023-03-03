import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  loading = true;
  orders: any;
  user: any;

  year: any;
  totalThisMonth: any;
  thisYearOrdersByMonths: any;


  constructor(public service: AuthService, private ordersService: OrdersService) { }

  //nutno dodělat query
  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.user = this.service.getcurrentUser();
    this.ordersService.GetOrdersForYear(this.year)
      .subscribe((r: any) => {
        this.orders = r.filter((o: any) => o.email == this.user.Email);
        this.totalThisMonth = this.summarize(this.orders);
        this.loading = false;
        this.thisYearOrdersByMonths = this.sortByMonth(this.orders, this.year);
      });

  }
  summarize(r: any) {
    let total = r.reduce((ac: any, currentPrize: { totalPrize: any; }) => {
      return ac + currentPrize.totalPrize
    }, 0);
    return total;
  }
  sortByMonth(input: any, year: any) {
    let monthValues = [];
    let ordersForMonth = input.filter((o: any) => {
      let placedOnDate = new Date(o.placedOn);
      return placedOnDate.getFullYear() == year;
    });
    for (let i = 0; i < 12; i++) {
      ordersForMonth = input.filter((o: any) => {
        let placedOnDate = new Date(o.placedOn);
        return placedOnDate.getMonth() == i;
      });
      let total = ordersForMonth.reduce((ac: any, currentPrize: { totalPrize: any; }) => {
        return ac + currentPrize.totalPrize
      }, 0);
      monthValues.push(total);
    }
    return monthValues;
  }
  getBarHeight(value: number): number {
    const min = Math.log10(50000);
    const max = Math.log10(1000000);
    const logValue = Math.log10(value);
    return (logValue - min) / (max - min) * 100;
  }

}
