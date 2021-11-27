import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(public router: Router,) { }
  ngOnInit(): void {
  }
  logout():void{
    localStorage.setItem("loggedIn", "");
    this.router.navigate(["/requireLogin"]);
  }
}
