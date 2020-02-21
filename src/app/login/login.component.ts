import { Component, OnInit } from "@angular/core";
import { AutorizationService } from "../autorization.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { UserInterface } from "../interfaces/user-interface";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private autorizationService: AutorizationService,
    private router: Router
  ) {}
  user: UserInterface = {
    email: "",
    password: ""
  };
  public isError = false;

  ngOnInit() {}

  onLogin(form: NgForm) {
    if (form.valid) {
      return this.autorizationService
        .loginuser(this.user.email, this.user.password)
        .subscribe(
          data => {
            this.autorizationService.setUser(data.user);
            const token = data.access_token;
            this.autorizationService.setToken(token);
            this.autorizationService.getCurrentUser();
            this.isError = false;
            console.log('succefully');
            
            this.router.navigateByUrl("/");
          },
          error => this.onIsError()
        );
    } else {
      this.onIsError();
    }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
}
