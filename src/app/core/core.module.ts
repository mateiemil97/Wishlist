import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    NavbarComponent,
    LoginComponent
  ],
  providers: [
  ],
  exports: [
    NavbarComponent,
    LoginComponent,
  ]

})
export class CoreModule { }
