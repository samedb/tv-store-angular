import { Injectable } from '@angular/core';
import { User } from '../models/User';

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
    const json = await response.json()

    if (response.ok) {
      this.currentUserToken = json.key
      localStorage.setItem("token", this.currentUserToken)
    } else {
      const errorMessage = this.getErrorMessagesFromResponse(json)
      throw new Error(errorMessage);
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
    const response = await fetch(
      this.baseUrl + "/auth/registration/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    const json = await response.json()

    if (!response.ok) {
      const errorMessage = this.getErrorMessagesFromResponse(json)
      return Promise.reject(new Error(errorMessage))
    }
  }

  getErrorMessagesFromResponse(response: object): string {
    let errorMessage = ""
    Object.keys(response).forEach(key => {
      const array = response[key]
      array.forEach(err => {
        errorMessage += err.toString() + "\n"
      });
    })

    return errorMessage
  }
}