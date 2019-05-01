import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  constructor(
    private elementRef: ElementRef,
    private authService: AuthenticationService,
    private route: Router
    ) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#23B574';
 }

 GoogleLogin() {
   this.authService.googleLogin();
   console.log("test1");
 }

}
