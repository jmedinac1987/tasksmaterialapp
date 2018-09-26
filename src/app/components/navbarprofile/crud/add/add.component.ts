import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { SnotifyService } from "ng-snotify";
import { TaskService } from "../../../../services/task.service";
import { AuthService } from "../../../../services/auth.service";
import { Router } from "@angular/router";
import { TokenService } from "../../../../services/token.service";
import { Task } from "../../../../models/task";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  public task: Task = new Task();  
  public states: string[] = ['Pendiente', 'Realizado'];

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

  onSubmit() {    
    if (this.task.state === "realizado") this.task.endDate = Date.now();
    this.taskService.postTask(this.task).subscribe(
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
