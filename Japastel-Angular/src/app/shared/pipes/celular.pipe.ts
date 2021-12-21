import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celular'
})
export class CelularPipe implements PipeTransform {

  transform(cel: string|number): string {
    let celFormat = cel + '';
    
    celFormat = celFormat
      .replace(/[^0-9]/, '')
      .replace(
        /(\d{2})(\d{5})(\d{4})/, '\($1\) $2-$3'
      );
    return celFormat;
  }

}
