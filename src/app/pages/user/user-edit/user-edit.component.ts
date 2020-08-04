import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from "src/app/models/User"
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  errorMessage: string = ""
  user: User

  constructor(private userService: UserService, private router: Router) { }

  async ngOnInit() {
    try {
      this.user = await this.userService.getCurrentUser()
    } catch (error) {
      this.errorMessage = error.toString()
    }
  }

  async onSubmit() {
    try {
      await this.userService.updateCurrentUser(this.user)
      this.router.navigateByUrl("/");
    } catch (error) {
      this.errorMessage = error.toString()
    }
  }

  canRegister(): boolean {
    return this.user.first_name !== "" && this.user.last_name !== "" &&
      this.user.ulica !== "" && this.user.broj !== "" &&
      this.user.postanski_broj !== "" && this.user.telefon !== "" &&
      this.user.tip !== "" &&
      (this.user.tip === "fizicko" || (this.user.naziv_firme !== "" && this.user.pib !== "" && this.user.maticni_broj_firme !== ""))
  }

}
