import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/user.service";
import { TokenService } from "../../../services/token.service";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(
    private userService: UserService, private tokenService: TokenService, 
    private router:Router, private authService: AuthService
  ) {}

  ngOnInit() {
    
  }
  onSubmit(){
    this.userService.loginService(this.form).subscribe(
      data => this.handleResponse(data)
     ,error => this.handleError(error));
  }
  handleError(error)
  { 
    
    if (error.status === 0) {
      console.log('Lo sentimos en este momento no podemos procesar su solicitud')
     // this.notify.error('Lo sentimos en este momento no podemos procesar su solicitud', {timeout:0});  
    }else{
      this.error = error.error.message;
    }    
  }

  handleResponse(data)  { 
    
    this.error = null;
    this.tokenService.handle(data.token);
    this.authService.changeAuthStatus(true);
    this.router.navigate(['/profile']);
  }
}
