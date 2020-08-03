import { Component, OnInit } from '@angular/core';
import { TV } from 'src/app/models/TV';
import { CartService } from "src/app/services/cart.service"
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = []

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getProducts()
  }

  sum() {
    return this.cartService.sum()
  }

  removeFromCart(product: TV) {
    this.cartService.removeCompleteleyFromCart(product)
    this.cartItems = this.cartService.getProducts()
  }

  increaseQuantity(product: TV) {
    this.cartService.addToCart(product)
  }

  decreaseQuantity(product: TV) {
    this.cartService.removeFromCart(product)
    this.cartItems = this.cartService.getProducts()
  }

  clearCart() {
    this.cartService.clearCart()
    this.cartItems = this.cartService.getProducts()
  }

}
