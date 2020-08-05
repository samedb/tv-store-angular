import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  errorMessage: string = ""
  user: User
  nacin_placanja: string = "Plaćanje pouzećem"

  constructor(private userService: UserService, public cartService: CartService, private ordersService: OrdersService, private router: Router) { }

  async ngOnInit() {
    this.user = await this.userService.getCurrentUser()
  }

  async onSubmit() {
    try {
      await this.ordersService.zavrsiKupovinu(this.user, this.nacin_placanja, this.cartService.getProducts())
      this.cartService.clearCart()
      this.router.navigateByUrl("/success")
    } catch (error) {
      this.errorMessage = error.toString()
    }

  }

  canSubmit(): boolean {
    return this.user.first_name !== "" && this.user.last_name !== "" &&
      this.user.ulica !== "" && this.user.broj !== "" &&
      this.user.postanski_broj !== "" && this.user.telefon !== "" &&
      this.user.tip !== "" &&
      (this.user.tip === "fizicko" || (this.user.naziv_firme !== "" && this.user.pib !== "" && this.user.maticni_broj_firme !== ""))
  }

}
