import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public expanded = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle = function(){
    this.expanded = !this.expanded;
  }
}
