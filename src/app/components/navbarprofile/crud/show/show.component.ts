import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Task } from "../../../../models/task";

@Component({
  selector: "app-show",
  templateUrl: "./show.component.html",
  styleUrls: ["./show.component.css"]
})
export class ShowComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ShowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) {}

  ngOnInit() {}

  onCancelConfirm() {
    this.dialogRef.close("cancel");
  }
}
