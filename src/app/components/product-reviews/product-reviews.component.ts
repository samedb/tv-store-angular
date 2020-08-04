import { Component, OnInit, Input } from '@angular/core';
import { ProductReviewsService } from "src/app/services/product-reviews.service"
import { Review } from 'src/app/models/Review';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {

  @Input() ean: string
  reviews: Review[]

  newReview: Review = new Review(5, "", "", this.ean)

  constructor(private productReviewService: ProductReviewsService) { }

  async ngOnInit() {
    this.reviews = await this.productReviewService.getAllReviews(this.ean)
  }

  async sendReview() {
    await this.productReviewService.sendReview(this.newReview)
    // Ocisti polja za ocenjivanje
    console.log("A")
    this.newReview = new Review(5, "", "", this.ean)
    console.log("B")
    this.reviews = await this.productReviewService.getAllReviews(this.ean)
    console.log("C")
  }

}
