import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

  constructor() { 
    console.log("hi all this is hooks constructor");
  }
  ngOnInit(): void {
    console.log("hi all this is hooks predefined method");
  }
  

}
