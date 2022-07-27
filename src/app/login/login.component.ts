import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  users: any;
  
  number = 103;
  deleteMessage: any;

  constructor(private loginService: LoginService) { 
   
  }

  profileForm = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    psw: new FormControl('', [Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z ]*$')]),
  });
  get f() {
    return this.profileForm.controls;
  }


  onSubmit() {
    console.log(this.profileForm.value);
    //this.getUserList()


    //Here logic will be there Develop your application can add logic here to call API Hit
    // console.warn(this.profileForm.value);

    this.user.uname = this.f['uname'].value;
    this.user.password = this.f['psw'].value;
    this.postUser()
  }
 

  postUser() {  //Calls the REST API throgh the services
    this.loginService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }
 


  deleteUser(id: number) {
    //delete users is called here
    this.loginService.deleteUser(id)

      .subscribe(

        data => {

          console.log(data);

          this.deleteMessage=true;

          this.loginService.getUserList().subscribe(data =>{

            this.users =data

            })

        },

        error => console.log(error));
  }
  getUser() {
    this.loginService.getUserList().subscribe((data: any) => {
      this.users = data; // we are pulled data from backend to the UI inside TS file and taken on HTML file. 
      console.log(this.users);
      // this.dtTrigger.next();

    })
  }



  // both the methods which are there is respected form must be defined here
  ngOnInit(): void {
  }
  getUserList(this: any) {
    this.loginService.getUserList().subscribe((data: any) => {

      this.users = data; // we are pulled data from backend to the UI inside TS file and taken on HTML file. 
      console.log(this.users);
      // this.dtTrigger.next();

    })
  }

}




