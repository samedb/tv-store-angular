import { Injectable } from '@angular/core';
import { CartItem } from "../models/CartItem"
import { TV } from "../models/TV"

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];

  constructor() { }

  addToCart(product: TV) {
    const item = this.cartItems.find(p => p.TV.ean === product.ean)
    if (item === undefined)
      this.cartItems.push(new CartItem(product, 1));
    else
      item.quantity++
  }

  removeFromCart(product: TV) {
    const item = this.cartItems.find(p => p.TV.ean === product.ean)
    if (item.quantity === 1)
      // Izbaci iz liste
      this.cartItems = this.cartItems.filter(p => p.TV.ean != product.ean)
    else
      // Smanji kolicinu za jedan
      item.quantity--
  }

  removeCompleteleyFromCart(product: TV) {
    this.cartItems = this.cartItems.filter(p => p.TV.ean != product.ean)
  }

  getProducts() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }

  sum() {
    let sum = 0
    this.cartItems.forEach(element => {
      sum += element.quantity * element.TV.cena
    });

    return sum
  }
}