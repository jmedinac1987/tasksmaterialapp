import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { TokenService } from "../../services/token.service";
import { SnotifyService } from "ng-snotify";
import { Subscription } from "rxjs";
import { User } from "../../models/user";

@Component({
  selector: "app-navbarprofile",
  templateUrl: "./navbarprofile.component.html",
  styleUrls: ["./navbarprofile.component.css"]
})
export class NavbarprofileComponent implements OnInit, OnDestroy {
  public user: User = new User();
  public subscription: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
    private userService: UserService,
    private notify: SnotifyService
  ) {}

  ngOnInit() {
    this.subscription = this.authService.authStatus.subscribe(value => {
      if (this.tokenService.isValidToken())
        this.user = this.tokenService.getUser();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  closeAcount(event: MouseEvent) {
    event.preventDefault();
    if (confirm("Realmente desea cerrar su cuenta?")) {
      this.userService.closeAcount(this.user.email).subscribe(
        response => {
          this.serverResponse(response);
        },
        error => this.handdleError(error)
      );
    }
  }

  handdleError(error) {
    if (error.status === 0) {
      this.notify.error(
        "Lo sentimos en este momento no podemos procesar su solicitud",
        { timeout: 0 }
      );
      return;
    }

    if (error.error.message === "Token invalido") {
      this.notify.error("No tienes autorización", { timeout: 5000 });
      this.tokenService.removeToken();
      this.authService.changeAuthStatus(false);
      this.router.navigate(["/home"]);
      return;
    }

    this.notify.error(`Error: ${error.error.message}`, { timeout: 5000 });
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.tokenService.removeToken();
    this.authService.changeAuthStatus(false);
    this.router.navigate(["/home"]);
  }

  serverResponse(response) {
    this.notify.success(response.message, { timeout: 3000 });
    this.tokenService.removeToken();
    this.authService.changeAuthStatus(false);
    this.router.navigate(["/home"]);
  }
}
