import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    cpf: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit () {
    sessionStorage.setItem('currentUser', JSON.stringify(this.loginForm.value));
    this.router.navigateByUrl('/pedidos');
  }

}
