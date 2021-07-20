import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
// import { MatSliderModule } from '@angular/material/slider';

import { LineItemsComponent } from '../shared/line-items/line-items.component';
import { TabsComponent } from '../shared/tabs/tabs.component';
import { HistoryComponent } from '../shared/history/history.component';



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
    component: TabsComponent,
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
    RouterModule.forChild(invoiceRoutes),
    // MatSliderModule
  ],
  exports: [LineItemsComponent]
})
export class InvoicesModule { }
