import { Injectable } from '@angular/core';
import { Review } from '../models/Review';

@Injectable({
  providedIn: 'root'
})
export class ProductReviewsService {

  constructor() { }

  async getAllReviews(ean: string): Promise<Review[]> {
    return new Promise((resolve, reject) => {
      resolve([
        new Review(5, "Mnogo dobar TV", "Korisnik A", "123"),
        new Review(4, "Mnogo dobar TV", "Korisnik Z", "123"),
        new Review(3, "Mnogo dobar TV asdf", "Korisnik B", "123"),
        new Review(1, "Mnogo dobar TV", "Korisnik A", "123")
      ])
    })
  }

  async sendReview(review: Review): Promise<void> {

  }
}
