import { Component, OnInit } from "@angular/core";
import { TaskService } from "../../../services/task.service";
import { Task } from "../../../models/task";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { TokenService } from "../../../services/token.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-consolidatedtasks",
  templateUrl: "./consolidatedtasks.component.html",
  styleUrls: ["./consolidatedtasks.component.css"]
})
export class ConsolidatedtasksComponent implements OnInit {
  subscription: Subscription;
  tasks: Task[];    
  currentPage: number = 1; 

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.subscription = this.taskService.getTasks().subscribe(data => {
      this.handdleResponse(data);
    });
  }

  handdleResponse(data) {
    this.tasks = data.tasks;    
  }
}
