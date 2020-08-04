import { Component, OnInit } from '@angular/core'
import { UserService } from "src/app/services/user.service"
import { Router } from "@angular/router"
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ""
  password: string = ""
  errorMessage: string = ""

  constructor(private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {
    this.userService.logout()
  }

  async onSubmit() {
    try {
      await this.userService.login(this.username, this.password)
      this.router.navigateByUrl("/")
    } catch (error) {
      this.errorMessage = error.toString()
    }
  }

  fillLoginFields(u, p) {
    this.username = u
    this.password = p
    this.onSubmit()
  }

}
