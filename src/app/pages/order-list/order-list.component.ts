import { Component, OnInit } from '@angular/core'
import { OrdersService } from 'src/app/services/orders.service'

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: any[] = []

  constructor(private ordersService: OrdersService) { }

  async ngOnInit() {
    this.orders = await this.ordersService.getAllMyOrders()
  }

}
