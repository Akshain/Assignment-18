import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  template: "<p>Hello, {{name}}!</p>",
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() name: string;

  constructor(private loginService: LoginService) {
    this.name= Input();
    
   }

  ngOnInit(): void {

  }

}
