import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }

  tabs = ['Items', 'History'];
  selected = new FormControl(1);
  public activeLink = this.tabs[0];

  ngOnInit(): void {
  }

}
