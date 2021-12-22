import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/feature/user/models/user.model';
import { UserService } from 'src/app/feature/user/services/user.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    cpf: new FormControl(''),
    password: new FormControl('')
  });

  user?: User;

  valid = true;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onSubmit () {
    const login = this.loginForm.value;
    this.user = this.userService.getUserByCPFandPassword(login.cpf, login.password);
    if (this.user) {
      sessionStorage.setItem('currentUser', JSON.stringify(this.user.id));
      return this.router.navigateByUrl('/pedidos');
    }
    return this.valid = false;
  }

}
