import { Injectable } from '@angular/core'
import { Review } from '../models/Review'
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class ProductReviewsService {

  private readonly baseUrl = "https://voyab.pythonanywhere.com"

  constructor(private userService: UserService) { }

  async getAllReviews(ean: string): Promise<Review[]> {
    const response = await fetch(this.baseUrl + "/api/ocena/" + ean)
    const json: Review[] = await response.json()

    return json
  }

  async sendReview(review: Review): Promise<void> {
    const response = await fetch(this.baseUrl + "/api/ocena/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + this.userService.currentUserToken
      },
      body: JSON.stringify(review)
    })

    if (!response.ok)
      throw new Error("Doslo do greske prilikom slanja recenzije!")
  }
}
