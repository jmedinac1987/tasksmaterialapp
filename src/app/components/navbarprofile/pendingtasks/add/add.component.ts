import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskService } from "../../../../services/task.service";
import { Task } from '../../../../models/task';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  task: Task = new Task();

  constructor(
    private taskService: TaskService,
    private dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    if (this.task.state === "realizado")
      this.task.endDate = Date.now().toString();
      
    this.taskService.postTask(this.task).subscribe(
      data => {        
        this.dialogRef.close('confirm');
      },
      error => this.onCancelConfirm()
    );    
  }

  onCancelConfirm(){
    this.dialogRef.close('cancel');
  }

}
