import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from "src/app/models/User"
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  errorMessage: string = ""
  user: User

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User()
  }

  async onSubmit() {
    try {
      await this.userService.register(this.user)
      this.router.navigateByUrl("/user-edit");
    } catch (error) {
      this.errorMessage = error.toString()
    }
  }

  canRegister(): boolean {
    return this.user.email !== "" && this.user.username !== "" &&
      this.user.password1 !== "" && this.user.password2 !== ""
  }
}
