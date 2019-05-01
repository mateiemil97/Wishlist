import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  declarations: [
    NavbarComponent,
    LoginComponent,
  ],
  providers: [
    AuthenticationService
  ],
  exports: [
    NavbarComponent,
    LoginComponent,
  ]

})
export class CoreModule { }
