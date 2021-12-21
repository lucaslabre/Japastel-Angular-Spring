import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userType'
})
export class UserTypePipe implements PipeTransform {

  transform(type: string): string {
    if (type === 'adm') {
      return 'Administrador';
    }
    else if (type === 'employee') {
      return 'Funcionário';
    }
    else {
      return 'Cliente';
    }
  }

}
