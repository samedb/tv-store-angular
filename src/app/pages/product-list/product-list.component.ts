import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ProductService } from "src/app/services/product.service"
import { TV } from "src/app/models/TV"
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  allProducts: TV[]
  filteredProducts: TV[]
  productsToShow: TV[]
  paginationIndex: number
  numberOfPages: number
  readonly productsPerPage: number = 12
  showFilters: boolean = false

  // Pretraga 
  searchTerm = ""

  // Za filtere
  proizvodjac = ""
  dijagonala = ""
  rezolucija = ""
  smartTv = ""

  // Za sortiranja
  sortBy: string = "Sortiranje..."

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.setup()
  }

  async setup() {
    this.allProducts = await this.productService.getProducts()
    this.showProducts()
  }

  showProducts() {
    console.log(this.searchTerm)
    // TODO ovde treba da dodje pretraga po kljucnoj reci, SEARCH
    const afterSearch = this.allProducts.filter(p => p.proizvodjac.toLowerCase().includes(this.searchTerm.toLowerCase()) || p.model.toLowerCase().includes(this.searchTerm.toLowerCase()))
    this.filteredProducts = afterSearch
    this.filter()
    this.numberOfPages = Math.ceil(this.filteredProducts.length / this.productsPerPage)
    this.sortProducts()
    this.setPage(0)
  }

  setPage(pageIndex: number) {
    this.paginationIndex = pageIndex
    const start = pageIndex * this.productsPerPage
    const end = start + this.productsPerPage
    this.productsToShow = this.filteredProducts.slice(start, end)
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

  sortProducts() {
    switch (this.sortBy) {
      case "Naziv A-Z":
        this.filteredProducts = this.filteredProducts.sort((x, y) => {
          if (x.proizvodjac !== y.proizvodjac)
            return x.proizvodjac.localeCompare(y.proizvodjac)
          else
            return x.model.localeCompare(y.model)
        })
        break

      case "Naziv Z-A":
        this.filteredProducts = this.filteredProducts.sort((x, y) => {
          if (x.proizvodjac !== y.proizvodjac)
            return y.proizvodjac.localeCompare(x.proizvodjac)
          else
            return y.model.localeCompare(x.model)
        })
        break

      case "Cena rastuće":
        this.filteredProducts = this.filteredProducts.sort((x, y) => x.cena - y.cena) // TODO i ovde za popust da uradim
        break

      case "Cena opadajuće":
        this.filteredProducts = this.filteredProducts.sort((x, y) => y.cena - x.cena) // TODO i ovde za popust da uradim
        break
    }
  }

  toggleFilters() {
    this.showFilters = !this.showFilters
  }

  filter() {
    if (this.proizvodjac !== "")
      this.filteredProducts = this.filteredProducts.filter(p => p.proizvodjac === this.proizvodjac)

    if (this.dijagonala !== "")
      this.filteredProducts = this.filteredProducts.filter(p => p.dijagonala.toString() === this.dijagonala)

    if (this.rezolucija !== "") {
      let temp = this.rezolucija.replace(" px", "")
      let dimensions = temp.split(" x ")
      this.filteredProducts = this.filteredProducts.filter(p => p.rezolucija.includes(dimensions[0]) || p.rezolucija.includes(dimensions[1]))
    }

    if (this.smartTv !== "")
      this.filteredProducts = this.filteredProducts.filter(p => p.smart === this.smartTv)

    this.showFilters = false
  }

  resetFilters() {
    this.proizvodjac = this.dijagonala = this.rezolucija = this.smartTv = this.searchTerm = ""
    this.showProducts()
  }

  setSearchTerm(event) {
    this.searchTerm = event
    this.showProducts()
  }
}
