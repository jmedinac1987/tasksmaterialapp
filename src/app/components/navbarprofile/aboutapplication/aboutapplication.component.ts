import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutapplication',
  templateUrl: './aboutapplication.component.html',
  styleUrls: ['./aboutapplication.component.css']
})
export class AboutapplicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let scroll = document.querySelector('mat-sidenav-content');
    scroll.scroll(0,0);        
  }

}
