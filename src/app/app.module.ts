import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TabsComponent } from './shared/tabs/tabs.component';
import { HistoryComponent } from './shared/history/history.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule     } from '@angular/material/table';
import { MatSliderModule    } from '@angular/material/slider';
import { MatButtonModule    } from '@angular/material/button';
import { MatMenuModule      } from '@angular/material/menu';
import { MatIconModule      } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginGuard } from './guards/login.guard';


import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MainComponent } from './shared/main/main.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './ecom/login/login.component';
import { ProductsComponent } from './ecom/products/products.component';
import { RequireLoginComponent } from './ecom/require-login/require-login.component';
import { LogoutComponent } from './ecom/logout/logout.component';

const routes: Routes = [
  // {
  //   path: 'invoice',
  //   loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule)
  // },
  {
    path: '',
    loadChildren: () => import('./ecom/ecom/ecom.module').then(m => m.EcomModule)
  }
]
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HistoryComponent,
    MainComponent,
    HeaderComponent,
    LoginComponent,
    ProductsComponent,
    RequireLoginComponent,
    LogoutComponent
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
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatSliderModule
  ]
})
export class AppModule { }
