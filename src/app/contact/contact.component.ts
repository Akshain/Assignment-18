import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,OnDestroy {
  interval: any;
  count=0;
  

  constructor(private loginService: LoginService) {
    console.log('constructor: logging starting...');
    this.interval = setInterval(() => {
      console.log(this.count++);
    }, 1000);
   }
   ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy: cleaning up...');
    clearInterval(this.interval);
  }

   onSubmit() {
     this.ngOnDestroy();
   }

  
}
