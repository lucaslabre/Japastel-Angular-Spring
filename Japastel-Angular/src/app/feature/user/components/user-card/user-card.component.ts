import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  user?: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void { 
    const userStorage = sessionStorage.getItem('currentUser');
    if (userStorage) {
      const userJson = JSON.parse(userStorage);
      this.user = this.userService.getUserByCPFandPassword(userJson.cpf, userJson.password);
    }
  }

  setUser () {

  }
}
