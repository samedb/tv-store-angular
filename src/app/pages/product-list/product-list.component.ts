import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/services/product.service"
import { TV } from "src/app/models/TV"
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: TV[]

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    console.log("On init za Home")
    this.products = this.productService.getProducts()
  }


  addToCart(event, product: TV): void {
    event.stopPropagation()
    console.log("Dodajemo u korpu")
    this.cartService.addToCart(product)
  }
}
