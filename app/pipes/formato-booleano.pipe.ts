import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoBooleano'
})
export class FormatoBooleanoPipe implements PipeTransform {

  transform(valorBooleano:boolean, ...args:any[]):string {
    return valorBooleano ? args[0] : args[1];

  };


}
