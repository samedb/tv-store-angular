import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {
  errorMessage: string = ""
  oldPassword: string = ""
  password1: string = ""
  password2: string = ""

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  canSubmit(): boolean {
    return this.oldPassword !== "" && this.password1 !== "" && this.password2 !== ""
  }

  async onSubmit() {
    try {
      await this.userService.passwordChange(this.oldPassword, this.password1, this.password2)
      this.router.navigateByUrl("/")
    } catch (error) {
      this.errorMessage = error.toString()
    }
  }

}
