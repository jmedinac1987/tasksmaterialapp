import { Component, OnInit, OnDestroy } from "@angular/core";
import { TaskService } from "../../../services/task.service";
import { Task } from "../../../models/task";
import { MatDialog } from "@angular/material";
import { Subscription } from "rxjs";
import { EditComponent } from "../crud/edit/edit.component";
import { DeleteComponent } from "../crud/delete/delete.component";
import { ShowComponent } from "../crud/show/show.component";

export class SearchTask {
  search: string;
  argument: string;
  constructor(){}  
}

@Component({
  selector: "app-consolidatedtasks",
  templateUrl: "./consolidatedtasks.component.html",
  styleUrls: ["./consolidatedtasks.component.css"]
})
export class ConsolidatedtasksComponent implements OnInit, OnDestroy {
  public showSpinner: boolean = true;
  public dialogResult = "";
  public subscription: Subscription;
  public tasks: Task[];
  public length_tasks: boolean = false;
  public number_tasks: number;
  public currentPage: number = 1;
  public filter: Task[];
  public number_search: number;
  public show: boolean = false;
  public arguments: string[] = ['Titulo', 'Estado'];
  public searchTask: SearchTask = new SearchTask();

  constructor(private taskService: TaskService, private dialog: MatDialog) {}

  ngOnInit() {
    this.subscription = this.taskService.getTasks().subscribe(data => {
      this.handdleResponse(data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filterTask() {
    let searchTask = this.searchTask;
    if (this.searchTask.argument === "Titulo") {
      this.filter = this.tasks.filter(function(task) {
        return (
          task.title.toLowerCase().indexOf(searchTask.search.toLowerCase()) > -1
        );
      });
      this.searchTask = new SearchTask();      
      this.show = true;
      this.number_search = this.filter.length;
      return this.filter;
    }

    if (this.searchTask.argument === "Estado") {
      this.filter = this.tasks.filter(function(task) {
        return (
          task.state.toLowerCase().indexOf(searchTask.search.toLowerCase()) > -1
        );
      });
      this.searchTask = new SearchTask();
      this.show = true;
      this.number_search = this.filter.length;
      return this.filter;
    }
  }

  showAllRegisters() {
    this.show = false;
  }

  handdleResponse(data) {
    this.showSpinner = false;
    this.tasks = data.tasks;
    this.number_tasks = this.tasks.length;
    this.number_tasks <= 0
      ? (this.length_tasks = false)
      : (this.length_tasks = true);
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

  openDialogDelete(task: Task) {
    this.showSpinner = true;
    let dialogRef = this.dialog.open(DeleteComponent, {
      width: "280px",
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "confirm") this.ngOnInit();
      this.showSpinner = false;
    });
  }

  openDialogShow(task: Task) {
    this.dialog.open(ShowComponent, {
      width: "300px",
      data: task
    });
  }
}
