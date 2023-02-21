import { OrdersService } from './../services/orders.service';
import { UsersService } from './../services/users.service';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  isLogedIn = false;
  countOfNotifications: any;
  newOrders: any;
  user = { Email: "", Role: "" };
  interval: any;


  constructor(public service: AuthService, private ordersService: OrdersService) { }
  ngOnInit(): void {
    this.newOrders=[];
    this.user = this.service.getcurrentUser();
    this.updateNotifications();
    this.interval = setInterval(() => {
      this.updateNotifications();
    }, 180000);

  }
  collapse() {
    this.isExpanded = false;
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  logOut() {
    this.service.logout();
  }
  updateNotifications() {
    this.ordersService.GetOrders()
      .subscribe((r: any) => {
        let usersOrders = r.filter((o: any) => o.email == this.user.Email);
        this.newOrders = usersOrders.filter((o: any) => o.status == 'expedováno');
        this.newOrders = this.newOrders.filter((o: any) => o.checkedByCustomer == false);
        this.countOfNotifications = this.newOrders.length;
      });
    //use interval to refresh and filter new orders withotu change
  }
  aknowlegde(o:any)
  {
    o.checkedByCustomer=true;
    this.ordersService.UpdateOrder(o,o.id)
    .subscribe();
    this.newOrders.splice(o,1);
    this.countOfNotifications = this.newOrders.length;

  }
}
