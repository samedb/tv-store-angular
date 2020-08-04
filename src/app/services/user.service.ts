import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = "http://voyab.pythonanywhere.com"

  currentUserToken: string = ""

  constructor() {
    // Uzmi token iz localStorage, ako postoji
    this.currentUserToken = localStorage.getItem("token") || ""
  }

  async login(username, password) {
    const response = await fetch(
      this.baseUrl + "/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username": username,
        "password": password
      })
    })

    if (response.ok) {
      const json = await response.json()
      this.currentUserToken = json.key
      localStorage.setItem("token", this.currentUserToken)
    } else {
      throw new Error("Nesipravno korisničko ime ili lozinka!");
    }
  }

  logout() {
    this.currentUserToken = ""
    localStorage.setItem("token", this.currentUserToken)
  }

  isLoggedIn(): boolean {
    return this.currentUserToken !== ""
  }
}