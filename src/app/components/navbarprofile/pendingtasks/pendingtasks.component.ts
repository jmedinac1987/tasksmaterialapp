import { Component, OnInit, OnDestroy } from "@angular/core";
import { TaskService } from "../../../services/task.service";
import { Task } from "../../../models/task";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { TokenService } from "../../../services/token.service";
import { MatDialog } from "@angular/material";
import { AddComponent } from "../crud/add/add.component";
import { EditComponent } from "../crud/edit/edit.component"
import { Subscription } from "rxjs";

@Component({
  selector: "app-pendingtasks",
  templateUrl: "./pendingtasks.component.html",
  styleUrls: ["./pendingtasks.component.css"]
})
export class PendingtasksComponent implements OnInit, OnDestroy {
  public showSpinner: boolean = true;
  public dialogResult = "";
  public subscription: Subscription;
  public tasks: Task[];
  public length_tasks: boolean = false;
  public number_tasks: number;
  public currentPage: number = 1;

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.subscription = this.taskService
      .getTasksPending()
      .subscribe(data => this.handdleResponse(data));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handdleResponse(data) {
    this.showSpinner = false;
    this.tasks = data.tasks;
    this.number_tasks = this.tasks.length;
    this.number_tasks <= 0
      ? (this.length_tasks = false)
      : (this.length_tasks = true);
  }

  openDialogAdd() {
    this.showSpinner = true;
    let dialogRef = this.dialog.open(AddComponent, {
      width: "300px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "confirm") this.ngOnInit();
      this.showSpinner = false;
    });
  }

  openDialogEdit(task: Task) {
    this.showSpinner = true;
    let dialogRef = this.dialog.open(EditComponent, {
      width: "300px",
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "confirm") this.ngOnInit();
      this.showSpinner = false;
    });
  }

}
