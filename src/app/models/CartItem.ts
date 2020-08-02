import { TV } from "./TV"

export class CartItem {
   TV: TV
   quantity: number

   constructor(TV: TV, quantity: number) {
      this.TV = TV
      this.quantity = quantity
   }
}