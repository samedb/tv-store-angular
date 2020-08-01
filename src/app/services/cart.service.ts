import { Injectable } from '@angular/core';
import { TV } from "../models/TV"

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: TV[] = [];

  constructor() { }

  addToCart(product: TV) {
    this.products.push(product);
  }

  removeFromCart(product: TV) {
    this.products = this.products.filter(p => p != product)
  }

  getProducts() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    return this.products;
  }
}