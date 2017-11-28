import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  }
]


@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginFormComponent, FooterComponent, DashboardComponent],
  imports: [
  RouterModule.forRoot(appRoutes),
  BrowserModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule

  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
