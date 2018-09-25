import { Component, OnInit } from "@angular/core";
import { TaskService } from "../../../services/task.service";
import { Task } from "../../../models/task";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { TokenService } from "../../../services/token.service";
import { MatDialog } from "@angular/material";
import { AddComponent } from "./add/add.component";
import { Subscription } from "rxjs";

@Component({
  selector: "app-pendingtasks",
  templateUrl: "./pendingtasks.component.html",
  styleUrls: ["./pendingtasks.component.css"]
})
export class PendingtasksComponent implements OnInit {
  dialogResult = "";
  subscription: Subscription;
  tasks: Task[];
  currentPage: number = 1;

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

  handdleResponse(data) {
    this.tasks = data.tasks;
  }

  openDialogAdd() {
    let dialogRef = this.dialog.open(AddComponent, {
      width: "300px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      if (result === "confirm") this.ngOnInit();
    });
  }
}
