import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// import { MatSliderModule } from '@angular/material/slider';

import { LoginGuard } from '../../guards/login.guard';
import { LoginComponent } from '../login/login.component';
import { ProductsComponent } from '../products/products.component';
import { RequireLoginComponent } from '../require-login/require-login.component';
import { LogoutComponent } from '../logout/logout.component';
// import { TabsComponent } from '../shared/tabs/tabs.component';
// import { HistoryComponent } from '../shared/history/history.component';
// import { MainComponent } from '../shared/main/main.component';

export const invoiceRoutes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'requireLogin',
    component: RequireLoginComponent,
  },
  {
    path: 'test',
    canActivate: [LoginGuard],
    component: ProductsComponent,
    children:[
      { path: 'Products',     component: ProductsComponent },
      { path: 'History',      component: ProductsComponent }
    ]
  },
]
@NgModule({
  // declarations: [LineItemsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(invoiceRoutes),
    // MatSliderModule
  ],
  // exports: [LineItemsComponent]
})
export class EcomModule { }
