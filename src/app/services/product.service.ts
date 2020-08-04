import { Injectable } from '@angular/core'
import { TV } from "../models/TV"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly baseUrl = "http://voyab.pythonanywhere.com"

  async getProducts(): Promise<TV[]> {
    const url = this.baseUrl + "/api/tv/"
    const response = await fetch(url)
    const json = await response.json()
    const products = json.map(r => ({ ...r, slike: r.slike.split(", ") }))
    return products
  }

  async getProductByEan(ean: string): Promise<TV> {
    const url = this.baseUrl + "/api/tv/" + ean
    const response = await fetch(url)
    const json = await response.json()
    const product = { ...json, slike: json.slike.split(", ") }
    return product
  }

}
