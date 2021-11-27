import { Component, OnInit } from '@angular/core';
// import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public pw;
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  login():void{
    localStorage.setItem("loggedIn", "1");
    this.router.navigate(["/test/Products"]);
  }
  
  logout():void{
    localStorage.setItem("loggedIn", "");
  }
}
