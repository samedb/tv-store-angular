import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() value: number
  @Output() valueChange = new EventEmitter<number>()
  @Input() readonly: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  setValue(x: number) {
    if (!this.readonly) {
      this.value = x
      this.valueChange.emit(this.value)
    }
  }

}
