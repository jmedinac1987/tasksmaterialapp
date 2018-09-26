import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../../services/user.service";
import { SnotifyService } from "ng-snotify";
import { User } from "../../../../models/user";

@Component({
  selector: "app-request-reset",
  templateUrl: "./request-reset.component.html",
  styleUrls: ["./request-reset.component.css"]
})
export class RequestResetComponent implements OnInit {
  public showSpinner: boolean;
  public user: User = new User();
  public error = null;

  constructor(
    private userService: UserService,
    private notify: SnotifyService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.showSpinner = true;    
    this.userService
      .sendPasswordReset(this.user.email)
      .subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
  }

  handleError(error) {
    this.showSpinner = false;
    if (error.status === 0) {
      this.notify.error(
        "Lo sentimos en este momento no podemos procesar su solicitud",
        { timeout: 0 }
      );
    } else {
      this.error = error.error.message;
    }
  }

  handleResponse(response) {
    this.showSpinner = false;
    this.error = null;
    this.notify.success(response.message, { timeout: 0 });
    this.user.email = null;
  }
}
