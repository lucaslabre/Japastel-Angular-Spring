import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User> = [
    {
      id: 1,
      name: 'Lucas Labre',
      cpf: '13639533704',
      email: 'lucaslabre@gmail.com',
      tel: '21984068589',
      password: '123',
      type: 'adm'
    },
    {
      id: 2,
      name: 'Matheus Soares',
      cpf: '12345678910',
      email: 'matheussoaresx@hotmail.com',
      tel: '21985632567',
      password: '12345',
      type: 'employee'
    },
    {
      id: 3,
      name: 'Isabela Kina',
      cpf: '45698569210',
      email: 'isabelakina@gmail.com',
      tel: '21945612345',
      password: '123456',
      type: 'client'
    }
  ];

  constructor() { }

  getUsers () {
    return this.users;
  }

  getUserByCPFandPassword (cpf: string, password: string): User | undefined {
    return this.users.find((user) => user.cpf === cpf && user.password === password);
  }
}
