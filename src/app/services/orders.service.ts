import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { CartItem } from "../models/CartItem"
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private readonly baseUrl = "http://voyab.pythonanywhere.com"

  constructor(private userService: UserService) { }

  async zavrsiKupovinu(user: User, nacin_placanja: string, cartItems: CartItem[]) {
    // Pripremanje podataka u formatu koji ocekuje server
    const data = {
      ...user,
      datumPorudzbine: new Date().toUTCString(),
      nacinPlacanja: nacin_placanja,
      artikli: cartItems.map(ci => ({ ean: ci.TV.ean, kolicina: ci.quantity }))
    }

    const response = await fetch(this.baseUrl + "/api/porudzbina/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + this.userService.currentUserToken
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      const json = await response.json()
      console.log(json)
      throw new Error("Greska prilikom zavrsavanja porudzbine!")
    }
  }

}