import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  productsToShow: TV[]
  paginationIndex: number
  numberOfPages: number
  readonly productsPerPage: number = 12

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.setup()
  }

  async setup() {
    this.products = await this.productService.getProducts()
    this.numberOfPages = Math.ceil(this.products.length / this.productsPerPage)
    console.log(this.numberOfPages)
    this.setPage(0)
  }

  setPage(pageIndex: number) {
    this.paginationIndex = pageIndex
    const start = pageIndex * this.productsPerPage
    const end = start + this.productsPerPage
    this.productsToShow = this.products.slice(start, end)
    window.scrollTo(0, 0)
  }

  goToProductPage(ean: string): void {
    this.router.navigate(["/product", ean])
  }

  addToCart(event, product: TV): void {
    event.stopPropagation()
    this.cartService.addToCart(product)
  }

  range(x: number) {
    return new Array(x)
  }
}
