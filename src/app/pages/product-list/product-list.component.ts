import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/services/product.service"
import { TV } from "src/app/models/TV"
import { CartService } from 'src/app/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: TV[]

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

  goToProductPage(ean: string): void {
    this.router.navigate(["/product", ean])
  }

  addToCart(event, product: TV): void {
    event.stopPropagation()
    this.cartService.addToCart(product)
  }
}
