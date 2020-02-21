import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { CookieService } from "ngx-cookie-service";
import { isNullOrUndefined } from "util";
import { UserInterface } from "./interfaces/user-interface";
import { from } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AutorizationService {
  baseurl = "http://localhost:8000";
  // http options used for making API calls
  private httpOptions: any;

  // the actual JWT token
  public token: string;

  // the token expiration date
  public token_expires: Date;

  // the username of the logged in user
  public username: string;

  // error messages received from the login attempt
  public errors: any = [];

  constructor(private http: HttpClient, private _cookieService: CookieService) {
    let csrf = this._cookieService.get("csrftoken");

    if (typeof csrf === "undefined") {
      csrf = "";
    }
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-CSRFToken": csrf
      })
    };
  }

  /* public login = (email, password) => {
    console.log('Método de login!');
  } */

  public registro = (email, password) => {
    console.log("Método de registro!");
  };

  /* public login(user) {
    console.log(user);
    this.http.post(this.baseurl + '/login/', JSON.stringify(user), this.httpOptions).subscribe(
      data => {

        this.updateData(data['token']);

      },
      err => {
        console.log(err);

        this.errors = err['error'];
      }
    );
  } */

  public loginuser(email: string, password: string): Observable<any> {
    return this.http
      .post<UserInterface>(
        this.baseurl + "/users/users/login/",
        { email, password },
        { headers: this.httpOptions }
      )
      .pipe(map(data => data));
  }

  setUser(user: UserInterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser() {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user = JSON.parse(user_string);

      return user;
    } else {
      return null;
    }
  }

  // Refreshes the JWT token, to extend the time the user is logged in
  public refreshToken() {
    this.http
      .post(
        this.baseurl + "/users/login/",
        JSON.stringify({ token: this.token }),
        this.httpOptions
      )
      .subscribe(
        data => {
          console.log(data);

          this.updateData(data["token"]);
        },
        err => {
          this.errors = err["error"];
        }
      );
  }
  public logout() {
    this.token = null;
    this.token_expires = null;
    this.username = null;
  }

  private updateData(token) {
    this.token = token;
    this.errors = [];

    // decode the token to read the username and expiration timestamp
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.username;
  }

  /* public logged() {
    
  } */

  logoutUser() {
    let accessToken = localStorage.getItem("accessToken");
    const url_api =
      this.baseurl + "/api/users/login/logout?access_token=${accessToken}";
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.http.post<UserInterface>(url_api, {
      headers: this.httpOptions
    });
  }
}
