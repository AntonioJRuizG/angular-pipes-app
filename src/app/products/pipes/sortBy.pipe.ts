import { Pipe, PipeTransform } from '@angular/core';
import { Artist, Style } from '../interfaces/artist';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(
    artists: Artist[],
    comparison: number,
    sortBy?: keyof Artist | ''
  ): Artist[] {
    switch (sortBy) {
      case 'name':
        return artists.sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase() ? comparison : -comparison
        );
      case 'isAlive':
        return artists.sort((a, b) =>
          a.isAlive < b.isAlive ? comparison : -comparison
        );
      case 'style':
        return artists.sort((a, b) =>
          Style[a.style] > Style[b.style] ? comparison : -comparison
        );
      case 'country':
        return artists.sort((a, b) =>
          a.country.toLowerCase() > b.country.toLowerCase()
            ? comparison
            : -comparison
        );
      case 'time':
        return artists.sort((a, b) =>
          a.time < b.time ? comparison : -comparison
        );
      default:
        return artists;
    }
  }
}
