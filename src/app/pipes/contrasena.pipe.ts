import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activa: boolean = true): any {
     if (activa) {
        value = new Array(value.length + 1).join('*');
     }
     return value;
  }

}
