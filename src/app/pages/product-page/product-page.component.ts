import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { TV } from 'src/app/models/TV';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  tv: TV
  keys: string[]
  selektovanaSlika: string

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const ean = params['ean']
      console.log(ean)
      this.tv = this.productService.getProducts().find(p => p.ean === ean)
      this.keys = Object.keys(this.tv).filter(k => k !== "slike")
      this.selektovanaSlika = this.tv.slike[0]
    })
  }

  setSelektovanaSlika(slika: string): void {
    this.selektovanaSlika = slika
  }

  addToCart(product: TV) {
    this.cartService.addToCart(product)
  }

}
