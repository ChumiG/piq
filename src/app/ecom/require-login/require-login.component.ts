import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-require-login',
  templateUrl: './require-login.component.html',
  styleUrls: ['./require-login.component.css']
})
export class RequireLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/']);
  }, 2500);  //5s
  }

}
