import { Injectable } from '@angular/core'
import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = "https://voyab.pythonanywhere.com"

  currentUserToken: string = ""

  constructor() {
    // Uzmi token iz localStorage, ako postoji
    this.currentUserToken = localStorage.getItem("token") || ""
  }

  async login(username, password) {
    const response = await fetch(this.baseUrl + "/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username": username,
        "password": password
      })
    })
    const json = await response.json()

    if (response.ok) {
      this.currentUserToken = json.key
      localStorage.setItem("token", this.currentUserToken)
    } else {
      const errorMessage = this.getErrorMessagesFromResponse(json)
      throw new Error(errorMessage)
    }
  }

  logout() {
    this.currentUserToken = ""
    localStorage.setItem("token", this.currentUserToken)
  }

  isLoggedIn(): boolean {
    return this.currentUserToken !== ""
  }

  async register(user: User) {
    const response = await fetch(this.baseUrl + "/auth/registration/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    const json = await response.json()

    if (!response.ok) {
      const errorMessage = this.getErrorMessagesFromResponse(json)
      throw new Error(errorMessage)
    }
    this.currentUserToken = json.key
    localStorage.setItem("token", this.currentUserToken)
  }

  getErrorMessagesFromResponse(response: object): string {
    let errorMessage = ""
    Object.keys(response).forEach(key => {
      const array = response[key]
      array.forEach(err => {
        errorMessage += err.toString() + "\n"
      })
    })

    return errorMessage
  }

  async getCurrentUser(): Promise<User> {
    const response = await fetch(this.baseUrl + "/api/me/", {
      headers: {
        "Authorization": "Token " + this.currentUserToken
      }
    })
    const json: User = await response.json()

    if (!response.ok) {
      const errorMessage = this.getErrorMessagesFromResponse(json)
      throw new Error(errorMessage)
    }

    return json
  }

  async updateCurrentUser(user: User): Promise<User> {
    const response = await fetch(this.baseUrl + "/api/me/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + this.currentUserToken
      },
      body: JSON.stringify(user)
    })
    const json: User = await response.json()

    if (!response.ok) {
      const errorMessage = this.getErrorMessagesFromResponse(json)
      throw new Error(errorMessage)
    }

    return json
  }

  async passwordChange(oldPassword, password1, password2) {
    const response = await fetch(this.baseUrl + "/auth/password/change/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + this.currentUserToken
      },
      body: JSON.stringify({
        old_password: oldPassword,
        new_password1: password1,
        new_password2: password2,
      })
    })
    const json: User = await response.json()

    if (!response.ok) {
      const errorMessage = this.getErrorMessagesFromResponse(json)
      throw new Error(errorMessage)
    }

    return json
  }
}