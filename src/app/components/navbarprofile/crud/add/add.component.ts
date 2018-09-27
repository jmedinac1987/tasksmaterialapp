import { Component, OnInit, Inject, OnDestroy } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { SnotifyService } from "ng-snotify";
import { TaskService } from "../../../../services/task.service";
import { AuthService } from "../../../../services/auth.service";
import { Router } from "@angular/router";
import { TokenService } from "../../../../services/token.service";
import { Task } from "../../../../models/task";
import { Subscription } from "rxjs";

export interface States {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public task: Task = new Task();
  public states: States[] = [
    { value: "pendiente", viewValue: "Pendiente" },
    { value: "realizado", viewValue: "Realizado" }
  ];

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
    private notify: SnotifyService,
    private dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onSubmit() {
    if (this.task.state === "realizado") this.task.endDate = Date.now();
    this.subscription = this.taskService.postTask(this.task).subscribe(
      data => {
        this.serverResponse(data);
        this.dialogRef.close("confirm");
      },
      error => {
        this.onCancelConfirm();
        this.handdleError(error);
      }
    );
  }

  onCancelConfirm() {
    this.dialogRef.close("cancel");
  }

  serverResponse(response) {
    this.notify.success(response.message, { timeout: 3000 });
    this.task = new Task();
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
}
