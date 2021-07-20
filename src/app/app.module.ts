import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TabsComponent } from './shared/tabs/tabs.component';
import { HistoryComponent } from './shared/history/history.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';





const routes: Routes = [
  {
    path: 'invoice',
    loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule)
  }
]
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSliderModule,
    MatTabsModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatSliderModule
  ]
})
export class AppModule { }
