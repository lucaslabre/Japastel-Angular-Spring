import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/feature/user/models/user.model';
import { UserService } from 'src/app/feature/user/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user?: User;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const userStorage = sessionStorage.getItem('currentUser');
    if (userStorage) {
      this.user = this.userService.getUserById(JSON.parse(userStorage));
    }
  }

  exit() {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
