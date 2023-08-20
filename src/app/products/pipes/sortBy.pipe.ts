import { Pipe, PipeTransform } from '@angular/core';
import { Artist, Style } from '../interfaces/artist';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(artists: Artist[], sortBy?: keyof Artist | ''): Artist[] {
    switch (sortBy) {
      case 'name':
        return artists.sort((a, b) => (a.name > b.name ? 1 : -1));
      case 'isAlive':
        return artists.sort((a, b) => (a.isAlive > b.isAlive ? 1 : -1));
      case 'style':
        return artists.sort((a, b) =>
          Style[a.style] > Style[b.style] ? 1 : -1
        );
      case 'country':
        return artists.sort((a, b) => (a.country > b.country ? 1 : -1));
      case 'time':
        return artists.sort((a, b) => (a.time > b.time ? -1 : +1));
      default:
        return artists;
    }
  }
}
