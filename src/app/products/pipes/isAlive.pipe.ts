import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isAlive',
})
export class IsAlivePipe implements PipeTransform {
  transform(value: boolean): 'alive today' | 'not alive' {
    return value ? 'alive today' : 'not alive';
  }
}
