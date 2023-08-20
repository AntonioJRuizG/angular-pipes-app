import { Pipe, PipeTransform } from '@angular/core';
import { Artist, Style } from '../interfaces/artist';

@Pipe({
  name: 'enumIntToDescription',
})
export class EnumIntToDescriptionPipe implements PipeTransform {
  transform(value: Style) {
    return Style[value];
  }
}
