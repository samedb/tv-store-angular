import { Component, OnInit, Input } from '@angular/core'
import { ProductReviewsService } from "src/app/services/product-reviews.service"
import { Review } from 'src/app/models/Review'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {

  @Input() ean: string
  reviews: Review[] = []
  newReview: Review

  constructor(private productReviewService: ProductReviewsService, private userService: UserService) { }

  async ngOnInit() {
    this.newReview = new Review(5, "", "", this.ean)
    this.reviews = await this.productReviewService.getAllReviews(this.ean)
  }

  async sendReview() {
    if (!this.userService.isLoggedIn()) {
      alert("Morate da budete prijavljeni da bi ste mogli da šaljete ocene!")
    } else {
      try {
        await this.productReviewService.sendReview(this.newReview)
        // Ocisti polja za ocenjivanje
        this.newReview = new Review(5, "", "", this.ean)
        this.reviews = await this.productReviewService.getAllReviews(this.ean)
      } catch (error) {
        console.error(error)
      }
    }
  }

}
