import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

// import { MatSliderModule } from '@angular/material/slider';

import { LineItemsComponent } from '../shared/line-items/line-items.component';
import { TabsComponent } from '../shared/tabs/tabs.component';
import { HistoryComponent } from '../shared/history/history.component';
import { MainComponent } from '../shared/main/main.component';



export const invoiceRoutes = [
  {
    path: 'History',
    component: LineItemsComponent,

  },
  {
    path: 'main',
    component: TabsComponent,

  },
  {
    path: 'test',
    component: MainComponent,
    children:[
      // { path: 'Items',    component: PoItemsComponent, resolve:{data: PoItemsResolver} },
      { path: 'Items',    component: LineItemsComponent },
      { path: 'History', component: HistoryComponent }
    ]

  },
  
]
@NgModule({
  declarations: [LineItemsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    RouterModule.forChild(invoiceRoutes),
    // MatSliderModule
  ],
  exports: [LineItemsComponent]
})
export class InvoicesModule { }
