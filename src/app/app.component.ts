import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './core/services/user.service';
import { User } from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Wishlist';
  currentUser: User;
  constructor(
    private authService: AuthenticationService,
    private route: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.currentUser = user;
        this.userService.save(user);
        this.route.navigate(['wishlist']);
      } else {
        this.route.navigate(['/login']);
      }
    })
  }
}
