import { Component, OnInit } from '@angular/core';
import { TV } from 'src/app/models/TV';
import { CartService } from "src/app/services/cart.service"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: TV[] = []

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getProducts()
  }

}
